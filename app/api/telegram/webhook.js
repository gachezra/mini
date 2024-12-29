import bot from "@/lib/bot";
import { db } from "@/lib/firebase";
import { collection, doc, setDoc } from "firebase/firestore";

bot.on("message", async (ctx) => {
  const { id: chatId, username } = ctx.chat;
  
  try {
    // Get profile photo if available
    let profilePhoto = null;
    const photos = await ctx.telegram.getUserProfilePhotos(ctx.from.id, 0, 1);
    if (photos && photos.total_count > 0) {
      profilePhoto = photos.photos[0][0].file_id;
    }

    // Save user data to Firebase
    const userRef = doc(db, "users", chatId.toString());
    await setDoc(userRef, {
      chatId: chatId.toString(),
      username,
      profilePhoto,
      lastActive: new Date().toISOString(),
    }, { merge: true });

    ctx.reply("Your data has been captured!");
  } catch (error) {
    console.error("Error saving user data:", error);
    ctx.reply("Sorry, there was an error processing your data.");
  }
});

export async function POST(req) {
  try {
    await bot.handleUpdate(await req.json());
    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error handling update", { status: 500 });
  }
}
import bot from "@/lib/bot";

let userData = null;

bot.on("message", async (ctx) => {
  const { id: chatId, username } = ctx.chat;
  const photos = ctx.message.from?.photo || [];
  const profilePhoto = photos.length > 0 ? photos[0].file_id : null;

  userData = {
    chatId,
    username,
    profilePhoto,
  };

  ctx.reply("Your data has been captured!");
});

export async function POST(req, res) {
  try {
    await bot.handleUpdate(await req.json());
    res.status(200).send("OK");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error handling update");
  }
}

export function GET(req, res) {
  res.status(200).json(userData || { message: "No data captured yet." });
}

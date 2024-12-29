"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/layout/navigation";
import { AnnouncementBanner } from "@/components/home/announcement-banner";
import { Leaderboard } from "@/components/home/leaderboard";
import { UserStats } from "@/components/home/user-stats";
import { useTelegramWebApp } from "@/hooks/useTelegramWebApp";

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const { user, isReady, error } = useTelegramWebApp();

  return (
    <main className="min-h-screen gradient-bg pb-20">
      <div className="container px-4 py-6">
        <div className="flex justify-end mb-6">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonStar className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>

        <AnnouncementBanner />

        <div className="mb-6">
          {error ? (
            <p className="text-red-500">Error: {error.message}</p>
          ) : !isReady ? (
            <p>Loading user data...</p>
          ) : (
            user && (
              <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <h2 className="text-xl font-bold mb-4">User Data (JSON):</h2>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                  {JSON.stringify(user, null, 2)}
                </pre>
              </div>
            )
          )}
        </div>

        <UserStats />
        <Leaderboard />
      </div>
      <Navigation />
    </main>
  );
}

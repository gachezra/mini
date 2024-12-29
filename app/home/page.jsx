"use client";

import { MoonStar, Sun, Shield, Mail, Star, Image } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/layout/navigation";
import { AnnouncementBanner } from "@/components/home/announcement-banner";
import { Leaderboard } from "@/components/home/leaderboard";
import { UserStats } from "@/components/home/user-stats";
import { useTelegramWebApp } from "@/hooks/useTelegramWebApp";

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const { user, isReady, error, fetchWithAuth } = useTelegramWebApp();

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
              <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 space-y-4">
                <div className="flex items-start gap-4">
                  {user.photoUrl ? (
                    <img 
                      src={user.photoUrl} 
                      alt={user.firstName}
                      className="w-16 h-16 rounded-full"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <Image className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      {user.firstName} {user.lastName}
                      {user.isPremium && (
                        <Star className="w-5 h-5 text-yellow-500" />
                      )}
                    </h2>
                    
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <p className="flex items-center gap-2">
                        @{user.username}
                      </p>
                      <p className="flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        ID: {user.id}
                      </p>
                      {user.allowsWriteToPm && (
                        <p className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Direct messages allowed
                        </p>
                      )}
                    </div>
                  </div>
                </div>
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
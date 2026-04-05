"use client";

import { useState } from "react";
import URLInput from "@/components/URLInput";
import ShortURLDisplay from "@/components/ShortURLDisplay";

export default function Home() {
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleShorten = async (longUrl: string, userId: string) => {
    setLoading(true);
    setError(null);
    setShortUrl(null);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:9808";
      const response = await fetch(`${apiUrl}/create-shorturl`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          longUrl,
          userId,
        }),
      });

      if (!response.ok) {
        const errorData = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(errorData?.error || "Failed to create short URL");
      }

      const data = (await response.json()) as { shortUrl?: string };
      setShortUrl(data.shortUrl || null);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-10 space-y-2">
          <h1 className="text-5xl font-extrabold text-white tracking-tight drop-shadow-md">
            FlashLink
          </h1>
          <p className="text-indigo-100 text-lg">
            Simplify your links with our fast and secure URL shortener.
          </p>
        </div>

        <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30">
          <URLInput onShorten={handleShorten} loading={loading} />

          {error && (
            <div className="mt-6 p-4 bg-red-500/20 text-red-100 rounded-xl border border-red-500/30 text-center">
              {error}
            </div>
          )}
        </div>

        {shortUrl && <ShortURLDisplay shortUrl={shortUrl} />}

        <div className="mt-16 text-center text-indigo-200 text-sm">
          <p>&copy; {new Date().getFullYear()} FlashLink Project. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}

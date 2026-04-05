"use client";

import { useState } from "react";

function getOrCreateUserId(): string {
  if (typeof window === "undefined") return "";

  const key = "shortener_user_id";
  const storedId = localStorage.getItem(key);
  if (storedId) {
    return storedId;
  }

  // Use crypto.randomUUID() for secure, non-colliding user IDs
  const generatedId = crypto.randomUUID();
  localStorage.setItem(key, generatedId);
  return generatedId;
}

export default function ShortenPage() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [userId] = useState(() => getOrCreateUserId());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!longUrl) return;

    setLoading(true);
    setError(null);
    setShortUrl(null);
    setCopied(false);

    try {
      // Use Next.js API route to avoid CORS issues
      const response = await fetch("/api/shorten", {
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
      if (data.shortUrl) {
        setShortUrl(data.shortUrl);
      }
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

  const handleCopy = async () => {
    if (!shortUrl) return;

    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Failed to copy to clipboard");
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] py-12 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-text mb-4">Shorten Your URL</h1>
          <p className="text-muted text-lg">
            Enter a long URL and get a short, shareable link instantly.
          </p>
        </div>

        <div className="bg-surface border border-border rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="url" className="block text-sm font-medium text-text mb-2">
                Enter your long URL
              </label>
              <div className="relative">
                <input
                  type="url"
                  id="url"
                  value={longUrl}
                  onChange={(e) => setLongUrl(e.target.value)}
                  required
                  placeholder="https://example.com/very/long/url/to/shorten"
                  className="w-full px-4 py-3 bg-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text placeholder:text-muted"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !longUrl}
              className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Generating...
                </>
              ) : (
                "Shorten URL"
              )}
            </button>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-error/10 border border-error/20 text-error rounded-lg text-sm">
              {error}
            </div>
          )}

          {shortUrl && (
            <div className="mt-8 p-6 bg-success/5 border border-success/20 rounded-lg">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-muted mb-2">Your shortened URL</h3>
                  <button
                    onClick={handleCopy}
                    className="text-primary hover:text-primary-hover font-mono text-lg break-all text-left transition-colors"
                    title="Click to copy"
                  >
                    {shortUrl}
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleCopy}
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors font-medium flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  {copied ? "Copied!" : "Copy URL"}
                </button>

                <a
                  href={shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-surface border border-border text-text rounded-lg hover:bg-primary/5 transition-colors font-medium flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Open Link
                </a>
              </div>

              {copied && (
                <div className="mt-4 text-center text-sm text-success font-medium">
                  ✓ Copied to clipboard!
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-8 text-center text-sm text-muted">
          <p>Short URLs expire after 6 hours of creation.</p>
        </div>
      </div>
    </div>
  );
}

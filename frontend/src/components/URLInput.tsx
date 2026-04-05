"use client";

import { useState } from "react";

function getOrCreateUserId(): string {
  const key = "shortener_user_id";
  const storedId = localStorage.getItem(key);
  if (storedId) {
    return storedId;
  }

  const generatedId = "user_" + crypto.randomUUID();
  localStorage.setItem(key, generatedId);
  return generatedId;
}

interface URLInputProps {
  onShorten: (longUrl: string, userId: string) => Promise<void>;
  loading: boolean;
}

export default function URLInput({ onShorten, loading }: URLInputProps) {
  const [longUrl, setLongUrl] = useState("");
  const [userId] = useState(() => getOrCreateUserId());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (longUrl && userId) {
      onShorten(longUrl, userId);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="relative">
        <input
          type="url"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          required
          className="w-full pl-6 pr-32 py-4 rounded-full border-0 focus:ring-2 focus:ring-indigo-400 shadow-xl text-gray-800 placeholder-gray-400 text-lg"
          placeholder="Paste your long link here..."
        />
        <button
          type="submit"
          disabled={loading}
          className={`absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full px-6 transition-all duration-200 transform active:scale-95 ${loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
        >
          {loading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Thinking...
            </span>
          ) : (
            "Shorten"
          )}
        </button>
      </div>
    </form>
  );
}

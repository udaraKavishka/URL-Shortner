export default function ShortURLDisplay({ shortUrl }: { shortUrl: string }) {
    return (
        <div className="w-full mt-8 animate-fade-in-up">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/50 text-center">
                <h3 className="text-gray-500 font-medium uppercase tracking-wide text-xs mb-3">
                    Your Shortened Link
                </h3>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-indigo-50/50 p-3 rounded-xl border border-indigo-100">
                    <a
                        href={shortUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 font-bold hover:text-indigo-800 truncate text-lg px-2"
                    >
                        {shortUrl}
                    </a>
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(shortUrl);
                            alert("Copied to clipboard!");
                        }}
                        className="bg-white hover:bg-gray-50 text-indigo-600 font-semibold px-4 py-2 rounded-lg border border-indigo-200 shadow-sm transition-colors text-sm"
                    >
                        Copy
                    </button>
                </div>
            </div>
        </div>
    );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>Open Source Learning Project</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text mb-6 tracking-tight">
              Shorten URLs,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Fast & Free
              </span>
            </h1>

            <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
              A modern URL shortener built to learn Go backend development, Redis integration, and
              full-stack deployment. Clean, fast, and simple.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shorten"
                className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-hover transition-all shadow-lg hover:shadow-xl font-semibold text-lg"
              >
                Start Shortening
              </Link>
              <Link
                href="/project"
                className="px-8 py-4 bg-surface border border-border text-text rounded-lg hover:bg-primary/5 transition-colors font-semibold text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">Why FlashLink?</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Built with modern technologies and best practices for learning and real-world
              application.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-bg border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-2">Blazing Fast</h3>
              <p className="text-muted">
                Powered by Go and Redis for instant URL generation and sub-millisecond redirects.
              </p>
            </div>

            <div className="bg-bg border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-2">Simple & Secure</h3>
              <p className="text-muted">
                Clean architecture with SHA-256 hashing and Base58 encoding for reliable short
                codes.
              </p>
            </div>

            <div className="bg-bg border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-2">Open Source</h3>
              <p className="text-muted">
                Fully open source and built for learning. Explore the code and contribute on GitHub.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to shorten your first URL?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join the journey of learning modern web development through practical projects.
            </p>
            <Link
              href="/shorten"
              className="inline-block px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg shadow-lg"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

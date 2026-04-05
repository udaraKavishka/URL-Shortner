export default function AuthorPage() {
  return (
    <div className="py-12 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-text mb-4">About the Author</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Building tools and learning through practical software engineering projects.
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-surface border border-border rounded-2xl p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-5xl font-bold text-white">UN</span>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-text mb-2">Udara Nalawansa</h2>
              <p className="text-xl text-primary mb-4">Software Engineer</p>

              <p className="text-muted mb-6 max-w-2xl">
                Passionate about building tools that enhance productivity and improve workflows.
                Focused on clean code, excellent UX, and solving real-world problems with
                technology. Currently exploring backend development with Go and building various
                SaaS applications as learning projects.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="https://github.com/udaraKavishka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-bg border border-border text-text rounded-lg hover:bg-primary/5 hover:border-primary transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </a>

                <a
                  href="mailto:hello@udaradev.me"
                  className="inline-flex items-center px-4 py-2 bg-bg border border-border text-text rounded-lg hover:bg-primary/5 hover:border-primary transition-colors"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Focus Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-surface border border-border rounded-xl p-6">
            <h3 className="text-xl font-bold text-text mb-4 flex items-center">
              <svg
                className="w-6 h-6 text-primary mr-2"
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
              Technical Skills
            </h3>
            <ul className="space-y-2 text-muted">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                Backend: Go, Node.js, Python
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                Frontend: React, Next.js, TypeScript
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                Databases: Redis, PostgreSQL, MongoDB
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                DevOps: Docker, GitHub Actions, CI/CD
              </li>
            </ul>
          </div>

          <div className="bg-surface border border-border rounded-xl p-6">
            <h3 className="text-xl font-bold text-text mb-4 flex items-center">
              <svg
                className="w-6 h-6 text-accent mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              Focus Areas
            </h3>
            <ul className="space-y-2 text-muted">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                Building productivity tools
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                Learning through practical projects
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                Clean architecture and code quality
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                Exploring SaaS development
              </li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div className="bg-surface border border-border rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-text mb-6 text-center">Current Projects</h3>

          <div className="space-y-6">
            <div className="bg-bg border border-border rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg font-semibold text-text">FlashLink (URL Shortener)</h4>
                <a
                  href="https://github.com/udaraKavishka/URL-Shortner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-hover transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <p className="text-muted text-sm mb-3">
                A learning project to understand Go backend development, Redis integration, and
                full-stack deployment. Features deterministic hashing, automatic expiry, and
                containerized architecture.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Go</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Redis</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                  Next.js
                </span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Docker</span>
              </div>
            </div>

            <div className="bg-bg border border-border rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg font-semibold text-text">Other SaaS Projects</h4>
              </div>
              <p className="text-muted text-sm">
                Actively developing multiple SaaS applications to explore different architectures,
                tech stacks, and deployment strategies. Each project serves as a practical learning
                experience in building production-ready applications.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-border rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-text mb-4">Get in Touch</h3>
          <p className="text-muted mb-6 max-w-2xl mx-auto">
            Interested in collaboration or have questions about my projects? Feel free to reach out
            via email or connect on GitHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@udaradev.me"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send Email
            </a>
            <a
              href="https://github.com/udaraKavishka/URL-Shortner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-surface border border-border text-text rounded-lg hover:bg-primary/5 transition-colors font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              Star on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

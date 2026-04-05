export default function ProjectPage() {
  const techStack = [
    {
      category: "Backend",
      icon: "🔧",
      technologies: [
        { name: "Go 1.24", description: "High-performance backend language" },
        { name: "Gin Framework", description: "Fast HTTP web framework" },
        { name: "Redis 7", description: "In-memory data structure store" },
        { name: "Docker", description: "Containerization platform" },
      ],
    },
    {
      category: "Frontend",
      icon: "🎨",
      technologies: [
        { name: "Next.js 16", description: "React framework with App Router" },
        { name: "TypeScript", description: "Type-safe JavaScript" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework" },
        { name: "React 19", description: "UI component library" },
      ],
    },
    {
      category: "DevOps",
      icon: "⚙️",
      technologies: [
        { name: "Docker Compose", description: "Multi-container orchestration" },
        { name: "GitHub Actions", description: "CI/CD automation" },
        { name: "Husky", description: "Git hooks for code quality" },
      ],
    },
  ];

  const features = [
    {
      title: "Deterministic Hashing",
      description:
        "Same URL + user ID always produces the same short code using SHA-256 + Base58 encoding.",
    },
    {
      title: "Fast Redirects",
      description: "Redis-backed storage ensures sub-millisecond lookup times for URL redirects.",
    },
    {
      title: "Automatic Expiry",
      description: "All short URLs expire after 6 hours using Redis TTL mechanism.",
    },
    {
      title: "CORS Enabled",
      description: "Cross-origin resource sharing configured for flexible frontend deployment.",
    },
    {
      title: "Type Safety",
      description: "Full TypeScript coverage in frontend with strict mode enabled.",
    },
    {
      title: "Theme Support",
      description: "Light/dark mode with persistent user preference across sessions.",
    },
  ];

  return (
    <div className="py-12 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-text mb-4">Project Details</h1>
          <p className="text-muted text-lg max-w-3xl mx-auto mb-8">
            A learning-focused project built to understand backend development with Go, Redis
            integration, and modern full-stack deployment practices.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/udaraKavishka/URL-Shortner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View Source Code
            </a>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-text mb-12 text-center">Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {techStack.map((stack) => (
              <div
                key={stack.category}
                className="bg-surface border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-3xl">{stack.icon}</span>
                  <h3 className="text-xl font-bold text-text">{stack.category}</h3>
                </div>
                <div className="space-y-4">
                  {stack.technologies.map((tech) => (
                    <div key={tech.name}>
                      <h4 className="font-semibold text-text mb-1">{tech.name}</h4>
                      <p className="text-sm text-muted">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-text mb-12 text-center">System Architecture</h2>
          <div className="bg-surface border border-border rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-text mb-2">Next.js Frontend</h3>
                <p className="text-sm text-muted">
                  User interface with form validation and state management
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-text mb-2">Go API Server</h3>
                <p className="text-sm text-muted">
                  REST endpoints for URL creation and redirect handling
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-text mb-2">Redis Store</h3>
                <p className="text-sm text-muted">
                  In-memory key-value storage with automatic expiry
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-bg rounded-lg border border-border">
              <p className="text-sm text-muted text-center">
                <strong className="text-text">Data Flow:</strong> Frontend → POST /create-shorturl →
                Generate Hash → Store in Redis → Return Short URL → GET /:shortUrl → Fetch from
                Redis → 302 Redirect
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-text mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-surface border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-text mb-2 flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                  {feature.title}
                </h3>
                <p className="text-sm text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Goals */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-border rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-text mb-6 text-center">Learning Objectives</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4 text-muted">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-success mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Master Go backend development with practical HTTP server implementation</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-success mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Understand Redis integration and in-memory caching strategies</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-success mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Build modern frontend with Next.js App Router and TypeScript</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-success mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Practice Docker containerization and multi-service orchestration</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-success mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Implement CI/CD pipelines with GitHub Actions and code quality tools</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-success mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Evolve codebase architecture incrementally through refactoring</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

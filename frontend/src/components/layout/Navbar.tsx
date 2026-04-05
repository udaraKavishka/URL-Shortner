"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const ThemeToggle = dynamic(() => import("../theme/ThemeToggle"), {
  ssr: false,
});

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shorten", label: "Shorten" },
  { href: "/process", label: "Process" },
  { href: "/project", label: "Project" },
  { href: "/author", label: "Author" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <span className="font-bold text-lg text-text">FlashLink</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  pathname === link.href ? "bg-primary text-white" : "text-text hover:bg-surface"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href="/shorten"
              className="hidden sm:block px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden pb-4 flex flex-wrap gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                pathname === link.href ? "bg-primary text-white" : "text-text hover:bg-surface"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e4e2de] bg-[#fbf9f5]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-360 items-center justify-between px-5 md:px-12 lg:px-16">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="flex h-8 w-8 items-center justify-center bg-[#9c2c1a] text-sm font-semibold text-white">
            T
          </div>

          <span className="font-display text-xl font-semibold uppercase tracking-tight text-[#1b1c1a]">
            Travala
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-body text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                  isActive
                    ? "text-[#bd442f]"
                    : "text-[#58413d] hover:text-[#9c2c1a]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/#packages"
            className="hidden items-center justify-center border border-transparent bg-[#bd442f] px-6 py-2.5 font-body text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#9c2c1a] lg:inline-flex"
          >
            Explore Trips
          </Link>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex items-center justify-center p-1 text-[#1b1c1a] lg:hidden"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-6 w-6"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-6 w-6"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[#e4e2de] bg-[#fbf9f5] lg:hidden">
          <nav className="mx-auto flex max-w-360 flex-col px-5 py-4 md:px-12 lg:px-16">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-[#e4e2de] py-4 font-body text-xs font-semibold uppercase tracking-[0.12em] text-[#58413d] last:border-b-0"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/#packages"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center bg-[#bd442f] px-6 py-3 font-body text-xs font-semibold uppercase tracking-[0.12em] text-white"
            >
              Explore Trips
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
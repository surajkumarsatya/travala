import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#fbf9f5] text-[#1b1c1a]">
      <div className="mx-auto max-w-360 px-5 py-14 md:px-12 lg:px-16 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <Link
              href="#home"
              className="font-display text-xl font-semibold uppercase tracking-[0.08em]"
            >
              Travala
            </Link>

            <p className="mt-5 max-w-md font-body text-sm leading-6 text-[#1b1c1a]">
              Thoughtfully designed holiday experiences for travelers who want
              to explore more and plan less.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="mb-5 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1b1c1a]">
              Navigation
            </p>

            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit font-body text-sm text-[#1b1c1a] transition-colors hover:text-[#1b1c1a]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3">
            <p className="mb-5 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1b1c1a]">
              Contact
            </p>

            <div className="space-y-3 font-body text-sm text-[#1b1c1a]">
              <a
                href="mailto:hello@travala.com"
                className="block transition-colors hover:text-[#1b1c1a]"
              >
                hello@travala.com
              </a>

              <a
                href="tel:+919876543210"
                className="block transition-colors hover:text-[#1b1c1a]"
              >
                +91 98765 43210
              </a>

              <p>New Delhi, India</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs text-[#1b1c1a]">
            © {new Date().getFullYear()} Travala. All rights reserved.
          </p>

          <p className="font-body text-xs uppercase tracking-[0.12em] text-[#1b1c1a]">
            Travel • Explore • Experience
          </p>
        </div>
      </div>
    </footer>
  );
}
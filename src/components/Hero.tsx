import Link from "next/link";

const heroImage =
  "https://lh3.googleusercontent.com/aida/AEtjO1WEJo2stKgW21F33gzzmoeKxgOXHoKD9Rxb4BhWxKtDMflVjEa11wcJPJcVHW3bbdfkKXMsj8Uqw8xNb5xq8bx8ykTYdRz0GHWpyBQyg8NaWRDTrXsjcyMYQu5oGip3UjKyTe5VYveTbQEe_QSSgjJujtqh6kTStk47rwSq-7iA0uKOf2p1HuTA00zD4gMFn-pZHbEbi8L1dbmUo-8c3PsFGAyL_-c_uZ1V_fQdJyDGOX_dUsjLMqD7ao0v";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full border-b border-[#e4e2de] bg-[#fbf9f5]"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-16 md:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Content */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="mb-2 inline-flex items-center gap-2">
              <span className="h-2 w-2 bg-[#bd442f]" />

              <span className="font-[var(--font-work-sans)] text-xs font-semibold uppercase tracking-[0.2em] text-[#bd442f]">
                Travel • Explore • Experience
              </span>
            </div>

            <h1 className="mb-4 max-w-xl font-[var(--font-manrope)] text-[2.75rem] font-semibold uppercase leading-[1.18] tracking-[-0.02em] text-[#1b1c1a] md:text-5xl md:leading-[1.17]">
              Discover Your Next Great Escape
            </h1>

            <p className="mb-10 max-w-xl font-[var(--font-work-sans)] text-lg leading-7 text-[#58413d]">
              Explore unforgettable destinations and thoughtfully designed
              holiday packages made for memorable journeys. Handpicked
              sanctuaries with effortless planning.
            </p>

            {/* CTA buttons */}
            <div className="mb-16 flex flex-wrap items-center gap-4">
              <Link
                href="#packages"
                className="inline-flex items-center gap-2 border border-transparent bg-[#bd442f] px-8 py-4 font-[var(--font-work-sans)] text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#9c2c1a]"
              >
                Explore Packages
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center border border-[#1b1c1a] bg-transparent px-8 py-4 font-[var(--font-work-sans)] text-xs font-semibold uppercase tracking-[0.15em] text-[#1b1c1a] transition-colors hover:bg-[#1b1c1a] hover:text-white"
              >
                Contact Us
              </Link>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 border-t border-[#e4e2de] pt-6">
              <div className="flex flex-col">
                <span className="font-[var(--font-manrope)] text-2xl font-semibold tracking-tight text-[#1b1c1a]">
                  50+
                </span>
                <span className="font-[var(--font-work-sans)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#605e5d]">
                  Destinations
                </span>
              </div>

              <div className="flex flex-col border-l border-[#e4e2de] pl-4">
                <span className="font-[var(--font-manrope)] text-2xl font-semibold tracking-tight text-[#1b1c1a]">
                  100%
                </span>
                <span className="font-[var(--font-work-sans)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#605e5d]">
                  Tailored stays
                </span>
              </div>

              <div className="flex flex-col border-l border-[#e4e2de] pl-4">
                <span className="font-[var(--font-manrope)] text-2xl font-semibold tracking-tight text-[#1b1c1a]">
                  24/7
                </span>
                <span className="font-[var(--font-work-sans)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#605e5d]">
                  Host care
                </span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mt-4 lg:col-span-5 lg:mt-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#e4e2de] bg-[#efeeea]">
              <img
                src="/images/hero.jpg"
                alt="Pristine coastal getaway"
                className="h-full w-full object-cover"
                />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-4 z-10 max-w-xs border border-[#1b1c1a] bg-white p-4 md:-bottom-8 md:-left-8 md:p-6">
              <div className="mb-1 flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-[#bd442f]" />

                <span className="font-[var(--font-work-sans)] text-[11px] font-semibold uppercase tracking-[0.15em] text-[#bd442f]">
                  Atelier Select
                </span>
              </div>

              <p className="font-[var(--font-manrope)] text-base font-semibold uppercase leading-tight tracking-tight text-[#1b1c1a] md:text-2xl">
                50+ Destinations
              </p>

              <p className="mt-1 font-[var(--font-work-sans)] text-sm leading-5 text-[#605e5d]">
                Curated boutique experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
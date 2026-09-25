export default function PackagesHero() {
  return (
    <section className="w-full bg-[#fbf9f5]">
      <div className="mx-auto max-w-360 px-5 py-10 md:px-12 lg:px-16 md:py-16">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-[#bd442f]" />

            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#bd442f]">
              Holiday Packages
            </span>

            <span className="font-body text-[10px] text-[#e4e2de]">
              /
            </span>
          </div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl font-medium uppercase leading-tight tracking-[-0.03em] text-[#1b1c1a] md:text-5xl lg:text-6xl">
                All Destinations &amp; Curated Packages
              </h1>

              <p className="mt-5 max-w-2xl font-body text-base leading-7 text-[#58413d] md:text-lg">
                Browse our complete collection of seasonal escapes, alpine
                retreats, and coastal sanctuaries. Precision crafted with
                private hosts, heritage properties, and secluded itineraries.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-4 border-l-2 border-[#bd442f] bg-[#f5f3ef] px-5 py-3">
              <div className="flex flex-col">
                <span className="font-body text-[9px] font-semibold uppercase tracking-[0.16em] text-[#605e5d]">
                  Active Season
                </span>

                <span className="mt-1 font-display text-base font-medium text-[#1b1c1a]">
                  Spring / Summer 2026
                </span>
              </div>

              <span className="text-xl text-[#bd442f]" aria-hidden="true">
                ◷
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
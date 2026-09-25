export default function ContactHero() {
  return (
    <section className="w-full border-b border-[#e4e2de] bg-[#fbf9f5]">
      <div className="mx-auto max-w-360 px-5 pb-16 pt-10 md:px-12 lg:px-16 md:pb-20 md:pt-16">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-3 lg:col-span-8">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 bg-[#bd442f]" />

              <span className="font-body text-[9px] font-semibold uppercase tracking-[0.18em] text-[#bd442f]">
                Get In Touch
              </span>

              <span className="font-body text-sm text-[#dfd9d0]">/</span>
            </div>

            <h1 className="font-display text-4xl font-medium uppercase leading-[1.05] tracking-[-0.03em] text-[#1b1c1a] md:text-5xl lg:text-6xl">
              Let&apos;s Plan Your Next Unforgettable Journey
            </h1>

            <p className="mt-1 max-w-2xl font-body text-base leading-7 text-[#78736e] md:text-lg">
              Have questions about a holiday package or want custom dates? Our
              travel specialists are here to assist you every step of the way
              with precision and bespoke hospitality.
            </p>
          </div>

          <div className="flex items-center gap-4 border border-[#e4e2de] bg-[#f1f0ed] p-4 lg:col-span-4 lg:justify-self-end">
            <span className="text-xl text-[#bd442f]" aria-hidden="true">
              ◷
            </span>

            <div>
              <p className="font-body text-[9px] uppercase tracking-[0.15em] text-[#78736e]">
                Active Dispatch Hub
              </p>

              <p className="mt-1 font-display text-base font-medium leading-none text-[#1b1c1a]">
                Response time: &lt; 2h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
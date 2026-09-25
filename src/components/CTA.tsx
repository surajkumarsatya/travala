import Link from "next/link";

export default function CTA() {
  return (
    <section className="border-b border-[#7f2416] bg-[#9c2c1a]">
      <div className="mx-auto max-w-360 px-5 py-16 md:px-16 md:py-20">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-4xl">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 bg-white" />

              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Start Your Journey
              </span>
            </div>

            <h2 className="font-display text-3xl font-semibold uppercase leading-tight tracking-[-0.02em] text-white md:text-5xl">
              Your next adventure is waiting.
            </h2>

            <p className="mt-4 max-w-xl font-body text-base leading-7 text-white/80">
              Tell us where you want to go and we&apos;ll help you plan a
              memorable holiday.
            </p>
          </div>

          <Link
            href="#contact"
            className="shrink-0 border border-white bg-white px-8 py-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-[#9c2c1a] transition-colors hover:bg-transparent hover:text-white"
          >
            Plan Your Trip
          </Link>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="w-full bg-[#fbf9f5] py-10 md:py-16">
      <div className="mx-auto max-w-360 px-5 md:px-16">
        <div className="grid grid-cols-1 items-end gap-8 pb-10 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-2 lg:col-span-8">
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 bg-[#bd442f]" />

              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-[#bd442f]">
                Our Story &amp; Purpose
              </span>
            </div>

            <h1 className="max-w-4xl font-display text-4xl font-medium leading-tight tracking-[-0.02em] text-[#1b1c1a] md:text-5xl lg:text-6xl">
              Crafting Journeys That Leave Lasting Impressions
            </h1>
          </div>

          <div className="lg:col-span-4">
            <p className="border-l-2 border-[#bd442f] pl-4 font-body text-lg leading-7 text-[#605e5d]">
              Founded on the idea that travel should be effortless, immersive,
              and deeply personal. We eliminate the noise of trip planning so
              you can focus on pure discovery.
            </p>
          </div>
        </div>

        <div className="relative w-full overflow-hidden bg-[#efeeea]">
          <Image
            src="/images/kashmir.jpg"
            alt="Kashmir Dal Lake with shikara boat"
            width={1440}
            height={620}
            priority
            sizes="100vw"
            className="h-95 w-full object-cover sm:h-120 lg:h-155"
          />

          <div className="absolute bottom-0 left-0 flex items-center gap-4 border-r border-t border-[#e4e2de] bg-[#fbf9f5]/95 px-5 py-3 md:px-6">
            <div className="flex flex-col">
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-[#bd442f]">
                Sanctuary 01
              </span>

              <span className="font-body text-sm font-medium text-[#1b1c1a]">
                Dal Lake, Kashmir — Pure Stillness
              </span>
            </div>

            <div className="h-6 w-px bg-[#e4e2de]" />

            <span className="hidden font-body text-xs text-[#605e5d] sm:block">
              34.1257° N, 74.8724° E
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
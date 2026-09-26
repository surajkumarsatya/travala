import Image from "next/image";

export default function OurStory() {
  return (
    <section className="border-b border-[#e4e2de] bg-[#fbf9f5]">
      <div className="mx-auto max-w-360 px-5 py-20 md:px-12 lg:px-16 md:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 w-full overflow-hidden border border-[#e4e2de] bg-[#efeeea]">
              <Image
                src="/images/about.jpg"
                alt="Travala travel experience"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 bg-[#bd442f]" />

              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#bd442f]">
                Our Story
              </span>
            </div>

            <h2 className="max-w-lg font-display text-4xl font-semibold uppercase leading-tight tracking-[-0.02em] text-[#1b1c1a] md:text-5xl">
              We believe travel should feel effortless.
            </h2>

            <p className="mt-6 max-w-lg font-body text-base leading-7 text-[#58413d] md:text-lg">
              Travala was created to make discovering and planning your next
              getaway simpler. We bring together carefully selected
              destinations and thoughtfully designed holiday packages so you
              can spend less time planning and more time experiencing.
            </p>

            <p className="mt-5 max-w-lg font-body text-base leading-7 text-[#58413d]">
              From relaxing beaches to mountain escapes and vibrant cities,
              every journey is designed with comfort, simplicity, and memorable
              experiences in mind.
            </p>

            <div className="mt-8 grid grid-cols-2 border-t border-[#e4e2de] pt-6">
              <div>
                <p className="font-display text-2xl font-semibold text-[#1b1c1a]">
                  50+
                </p>
                <p className="mt-1 font-body text-[11px] uppercase tracking-[0.12em] text-[#78736e]">
                  Destinations
                </p>
              </div>

              <div className="border-l border-[#e4e2de] pl-6">
                <p className="font-display text-2xl font-semibold text-[#1b1c1a]">
                  100%
                </p>
                <p className="mt-1 font-body text-[11px] uppercase tracking-[0.12em] text-[#78736e]">
                  Tailored stays
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
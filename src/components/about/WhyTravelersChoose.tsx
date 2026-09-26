import Image from "next/image";

const metrics = [
  {
    value: "10,000+",
    title: "GLOBAL VOYAGERS",
    description:
      "Traversed across 25+ sovereign regions with bespoke itineraries.",
  },
  {
    value: "98%",
    title: "SATISFACTION RATE",
    description:
      "Reflecting genuine post-trip reviews and repeat voyage bookings.",
  },
  {
    value: "100%",
    title: "FLEXIBLE REBOOKING",
    description:
      "Zero-penalty date adjustments on all partner retreat properties.",
  },
  {
    value: "Local",
    title: "RESIDENT CURATORS",
    description:
      "Native storytellers, architectural historians, and resident chefs.",
  },
];

export default function WhyTravelersChoose() {
  return (
    <section className="bg-[#fbf9f5]">
      <div className="mx-auto max-w-360 px-5 py-20 md:px-12 lg:px-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <div className="relative h-full min-h-100 w-full overflow-hidden bg-[#efeeea]">
            <Image
                src="/images/bali.jpg"
                alt="Beautiful Bali landscape"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
            />
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-6 lg:pl-8">
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#bd442f]">
              The Measure of Excellence
            </span>

            <h2 className="mt-4 max-w-xl font-display text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-[#1b1c1a] md:text-5xl">
              Why Travelers Choose Travala
            </h2>

            <p className="mt-5 max-w-xl font-body text-sm leading-6 text-[#605e5d] md:text-base">
              We replace algorithmic tour packages with intimate human
              curation. Over years of ground exploration, our metric of success
              remains uncompromised hospitality.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {metrics.map((metric) => (
                <article
                  key={metric.title}
                  className="bg-[#f1f0ed] p-5 md:p-6"
                >
                  <p className="font-display text-2xl font-medium leading-none tracking-tight text-[#1b1c1a] md:text-3xl">
                    {metric.value}
                  </p>

                  <p className="mt-2 font-body text-[9px] font-semibold uppercase tracking-[0.14em] text-[#bd442f]">
                    {metric.title}
                  </p>

                  <p className="mt-2 max-w-57.5 font-body text-xs leading-5 text-[#605e5d]">
                    {metric.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
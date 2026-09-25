const inclusions = [
  {
    title: "Airport Transfers",
    description:
      "Seamless doorstep-to-doorstep private transit in chauffeured vehicles. Flight delay monitoring included on all legs.",
    label: "Included Standard",
    icon: "⌁",
  },
  {
    title: "Boutique Stays",
    description:
      "Hand-vetted architectural retreats, heritage estates, and eco-lodges chosen for character and privacy over chain hotel scale.",
    label: "Verified 4.8+ Star",
    icon: "⌂",
  },
  {
    title: "Curated Sightseeing",
    description:
      "Skip-the-line access, private certified local curators, and off-grid vantage points away from tourist overcrowding.",
    label: "Private Guides",
    icon: "◎",
  },
  {
    title: "Daily Breakfast",
    description:
      "Fresh artisanal spreads and farm-to-table morning meals prepared by property culinary teams, tailored to dietary preferences.",
    label: "Gourmet Sourcing",
    icon: "♜",
  },
];

export default function PackageInclusions() {
  return (
    <section className="bg-[#f1f0ed]">
      <div className="mx-auto max-w-360 px-5 py-16 md:px-12 lg:px-16 md:py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#bd442f]" />

              <span className="font-body text-[9px] font-semibold uppercase tracking-[0.18em] text-[#bd442f]">
                The Wanderly Assurance
              </span>
            </div>

            <h2 className="font-display text-3xl font-medium uppercase leading-tight tracking-[-0.03em] text-[#1b1c1a] md:text-4xl">
              What Every Package Includes
            </h2>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <p className="font-body text-sm leading-6 text-[#58413d]">
              Transparent, elevated hospitality standards built into each
              itinerary, with zero hidden surcharges or compromises.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {inclusions.map((item) => (
            <article
              key={item.title}
              className="flex min-h-58.75 flex-col bg-white p-5"
            >
              <div className="flex h-8 w-8 items-center justify-center bg-[#efeeea] text-lg text-[#bd442f]">
                {item.icon}
              </div>

              <h3 className="mt-4 max-w-45 font-display text-base font-medium uppercase leading-tight text-[#1b1c1a]">
                {item.title}
              </h3>

              <p className="mt-2 font-body text-[10px] leading-[1.55] text-[#605e5d]">
                {item.description}
              </p>

              <span className="mt-auto pt-5 font-body text-[12px] font-semibold uppercase tracking-[0.14em] text-[#78736e]">
                {item.label}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
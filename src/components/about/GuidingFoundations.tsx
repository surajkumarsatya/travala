const foundations = [
  {
    number: "I",
    title: "Handcrafted Itineraries",
    description:
      "Thoughtfully vetted accommodations, hidden architectural retreats, and local routes designed strictly around authenticity and cultural resonance.",
    tag: "Bespoke Design",
  },
  {
    number: "II",
    title: "Transparent & Fair Pricing",
    description:
      "Zero hidden fees or unexpected line charges. Direct-with-host relations ensure exceptional luxury remains balanced, honest, and accessible.",
    tag: "All-Inclusive Honesty",
  },
  {
    number: "III",
    title: "24/7 Dedicated Care",
    description:
      "Around-the-clock host concierge support from takeoff to touchdown. Instant problem solving via personal WhatsApp and dedicated flight desk.",
    tag: "Uninterrupted Concierge",
  },
];

export default function GuidingFoundations() {
  return (
    <section className="bg-[#f7f5f1]">
      <div className="mx-auto max-w-360 px-5 py-16 md:px-16 md:py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#bd442f]" />

              <span className="font-body text-[9px] font-semibold uppercase tracking-[0.18em] text-[#bd442f]">
                The Architecture of Care
              </span>
            </div>

            <h2 className="font-display text-3xl font-medium tracking-[-0.03em] text-[#1b1c1a] md:text-4xl">
              Our Guiding Foundations
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {foundations.map((foundation) => (
            <article
              key={foundation.number}
              className="flex min-h-60 flex-col bg-white p-5 md:min-h-67.5 md:p-6"
            >
              <div className="mb-5 flex h-7 w-7 items-center justify-center bg-[#efeeea]">
                <span className="font-body text-[9px] font-semibold text-[#bd442f]">
                  {foundation.number}
                </span>
              </div>

              <span className="mb-2 font-body text-[8px] font-semibold uppercase tracking-[0.14em] text-[#78736e]">
                Pillar {foundation.number}
              </span>

              <h3 className="max-w-xs font-display text-lg font-medium leading-tight text-[#1b1c1a] md:text-xl">
                {foundation.title}
              </h3>

              <p className="mt-3 max-w-sm font-body text-[11px] leading-[1.55] text-[#605e5d]">
                {foundation.description}
              </p>

              <div className="mt-auto flex items-center justify-between border-t border-[#e4e2de] pt-4">
                <span className="font-body text-[12px] font-semibold uppercase tracking-[0.14em] text-[#78736e]">
                  {foundation.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";

const features = [
  "Carefully selected destinations",
  "Simple and flexible packages",
  "Support when you need it",
];

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-[#e4e2de] bg-[#fbf9f5]"
    >
      <div className="mx-auto max-w-360 px-5 py-20 md:px-12 lg:px-16 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-0">
          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 w-full overflow-hidden border border-[#e4e2de] bg-[#efeeea]">
              <Image
                src="/images/about.jpg"
                alt="Beautiful travel destination"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 bg-[#bd442f]" />

              <span className="font-(--font-work-sans) text-xs uppercase tracking-[0.2em] text-[#bd442f]">
                About Us
              </span>
            </div>

            <h2 className="max-w-lg font-(--font-manrope) text-4xl uppercase leading-tight tracking-[-0.02em] text-[#1b1c1a] md:text-5xl">
              Travel made simple.
            </h2>

            <p className="mt-6 max-w-lg font-(--font-work-sans) text-base leading-7 text-[#58413d] md:text-lg">
              We help travelers discover beautiful destinations through
              thoughtfully planned holiday packages. From relaxing getaways to
              exciting adventures, we make planning your next trip easier.
            </p>

            <div className="mt-8 border-t border-[#e4e2de]">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-4 border-b border-[#e4e2de] py-4"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-[#bd442f] text-xs text-white">
                    ✓
                  </span>

                  <span className="font-(--font-work-sans) text-sm text-[#1b1c1a]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
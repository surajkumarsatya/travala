import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Contact from "@/components/Contact";
import { packageCatalog } from "@/data/packageCatalog";

type PackageDetailsPageProps = {
  params: Promise<{
    destination: string;
  }>;
};

export function generateStaticParams() {
  return packageCatalog.map((packageData) => ({
    destination: packageData.destination.toLowerCase(),
  }));
}

export default async function PackageDetailsPage({
  params,
}: PackageDetailsPageProps) {
  const { destination } = await params;

  const packageData = packageCatalog.find(
    (item) =>
      item.destination.toLowerCase() === destination.toLowerCase(),
  );

  if (!packageData) {
    notFound();
  }

  const inquiryMessage = `I'm interested in the ${packageData.destination} holiday package.`;

  return (
    <main className="bg-[#fbf9f5]">
      <section className="mx-auto max-w-360 px-5 py-10 md:px-12 lg:px-16 md:py-16">
        <Link
          href="/packages"
          className="font-body text-[9px] font-semibold uppercase tracking-[0.15em] text-[#78736e] transition-colors hover:text-[#bd442f]"
        >
          ← Back to Packages
        </Link>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="relative min-h-105 overflow-hidden bg-[#efeeea] md:min-h-140">
            <Image
              src={`/images/${packageData.destination.toLowerCase()}.jpg`}
              alt={packageData.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute left-5 top-5 bg-[#fbf9f5] px-3 py-2">
              <span className="font-body text-[8px] font-semibold uppercase tracking-[0.14em] text-[#bd442f]">
                {packageData.category}
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#bd442f]" />

              <span className="font-body text-[9px] font-semibold uppercase tracking-[0.16em] text-[#bd442f]">
                {packageData.reference}
              </span>
            </div>

            <h1 className="mt-4 max-w-xl font-display text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-[#1b1c1a] md:text-5xl lg:text-6xl">
              {packageData.title}
            </h1>

            <p className="mt-5 max-w-xl font-body text-sm leading-6 text-[#605e5d] md:text-base">
              {packageData.description}
            </p>

            <div className="mt-8 grid grid-cols-2 border-y border-[#dfd9d0]">
              <div className="border-r border-[#dfd9d0] py-5">
                <span className="font-body text-[8px] font-semibold uppercase tracking-[0.14em] text-[#78736e]">
                  Destination
                </span>

                <p className="mt-2 font-display text-lg text-[#1b1c1a]">
                  {packageData.destination}
                </p>
              </div>

              <div className="py-5 pl-5">
                <span className="font-body text-[8px] font-semibold uppercase tracking-[0.14em] text-[#78736e]">
                  Duration
                </span>

                <p className="mt-2 font-display text-lg text-[#1b1c1a]">
                  {packageData.duration}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <span className="font-body text-[9px] font-semibold uppercase tracking-[0.15em] text-[#bd442f]">
                Curated Inclusions
              </span>

              <div className="mt-4 space-y-3">
                {packageData.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-3 border-b border-[#e4e2de] pb-3"
                  >
                    <span className="text-sm text-[#bd442f]">+</span>

                    <span className="font-body text-sm text-[#605e5d]">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-[#dfd9d0] pt-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="font-body text-[8px] font-semibold uppercase tracking-[0.14em] text-[#78736e]">
                  Starting From
                </span>

                <p className="mt-1 font-display text-3xl font-medium text-[#1b1c1a]">
                  {packageData.price}
                </p>
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center bg-[#9c2c1a] px-6 py-3 font-body text-[9px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#7f2416]"
              >
                Book an Inquiry →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Contact defaultMessage={inquiryMessage} />
    </main>
  );
}
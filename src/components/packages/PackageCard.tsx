import Image from "next/image";
import Link from "next/link";

export type PackageCardData = {
  id: number;
  destination: string;
  category: string;
  duration: string;
  reference: string;
  region: string;
  style: string;
  title: string;
  description: string;
  highlights: string[];
  price: string;
};

type PackageCardProps = {
  packageData: PackageCardData;
};

export default function PackageCard({ packageData }: PackageCardProps) {
  return (
    <article className="group flex flex-col bg-white transition-colors">
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#efeeea]">
        <Image
          src={`/images/${packageData.destination.toLowerCase()}.jpg`}
          alt={packageData.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute left-0 top-0 bg-[#30312e] px-3 py-1">
          <span className="font-body text-[9px] uppercase tracking-[0.15em] text-white">
            {packageData.category}
          </span>
        </div>

        <div className="absolute right-0 top-0 bg-white px-3 py-1">
          <span className="font-body text-[9px] font-semibold uppercase tracking-[0.12em] text-[#1b1c1a]">
            {packageData.duration}
          </span>
        </div>

        <div className="absolute bottom-3 left-3 bg-white/90 px-2 py-0.5">
          <span className="font-body text-[9px] uppercase tracking-[0.12em] text-[#1b1c1a]">
            Ref: {packageData.reference}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-6 py-6">
        <div>
          <div className="mb-2 flex items-baseline justify-between gap-3">
            <span className="font-body text-[9px] font-semibold uppercase tracking-[0.14em] text-[#bd442f]">
              {packageData.region}
            </span>

            <span className="font-body text-[9px] text-[#78736e]">
              {packageData.style}
            </span>
          </div>

          <h2 className="font-display text-xl font-semibold uppercase leading-tight tracking-[-0.01em] text-[#1b1c1a] transition-colors group-hover:text-[#bd442f]">
            {packageData.title}
          </h2>

          <p className="mt-2 line-clamp-2 font-body text-sm leading-5 text-[#58413d]">
            {packageData.description}
          </p>

          <div className="mt-5 bg-[#f5f3ef] p-3">
            <span className="mb-2 block font-body text-[9px] font-semibold uppercase tracking-[0.14em] text-[#78736e]">
              Curated Inclusions:
            </span>

            <ul className="flex flex-col gap-1.5">
              {packageData.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 font-body text-xs leading-4 text-[#1b1c1a]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#bd442f]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#e4e2de] pt-4">
          <div className="mb-4 flex items-end justify-between gap-3">
            <div className="flex flex-col">
              <span className="font-body text-[9px] uppercase tracking-[0.14em] text-[#78736e]">
                Starting from
              </span>

              <span className="font-display text-2xl font-semibold text-[#bd442f]">
                {packageData.price}
              </span>
            </div>

            <span className="font-body text-[9px] uppercase text-[#78736e]">
              Per Traveler / Taxes Inc.
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1">
            <Link
                href={`/packages/${packageData.destination.toLowerCase()}`}
                className="inline-flex items-center justify-center border border-[#dfd9d0] px-2 py-2 font-body text-[8px] font-semibold uppercase tracking-[0.12em] text-[#1b1c1a] transition-colors hover:border-[#1b1c1a]"
            >
                View Details
            </Link>

            <Link
                href={`/packages/${packageData.destination.toLowerCase()}#contact`}
                className="inline-flex items-center justify-center bg-[#9c2c1a] px-2 py-2 font-body text-[9px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#7f2416]"
            >
                Book Inquiry
            </Link>
         </div>
        </div>
      </div>
    </article>
  );
}
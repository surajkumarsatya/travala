import type { PackageCardData } from "./PackageCard";
import PackageCard from "./PackageCard";

type PackageGridProps = {
  packages: PackageCardData[];
};

export default function PackageGrid({ packages }: PackageGridProps) {
  return (
    <section className="w-full bg-[#fbf9f5]">
      <div className="mx-auto max-w-360 px-5 py-5 pb-16 md:px-12 lg:px-16 md:py-20">
        <div className="mb-8 flex items-end justify-between border-b border-[#dfd9d0] pb-4">
          <div>
            <p className="font-body text-[9px] font-semibold uppercase tracking-[0.16em] text-[#bd442f]">
              Curated Collection
            </p>

            <h2 className="mt-2 font-display text-2xl font-medium text-[#1b1c1a] md:text-3xl">
              Explore Our Packages
            </h2>
          </div>

          <span className="hidden font-body text-[9px] uppercase tracking-[0.14em] text-[#78736e] sm:block">
            {packages.length} Experiences
          </span>
        </div>

        {packages.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((packageData) => (
              <PackageCard
                key={packageData.id}
                packageData={packageData}
              />
            ))}
          </div>
        ) : (
          <div className="border border-[#dfd9d0] bg-white py-16 text-center">
            <p className="font-display text-xl text-[#1b1c1a]">
              No packages found
            </p>

            <p className="mt-2 font-body text-sm text-[#78736e]">
              Try changing your search or category filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
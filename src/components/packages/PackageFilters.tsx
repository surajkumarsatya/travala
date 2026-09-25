"use client";

type PackageFiltersProps = {
  category: string;
  search: string;
  sort: string;
  onCategoryChange: (category: string) => void;
  onSearchChange: (search: string) => void;
  onSortChange: (sort: string) => void;
};

const categories = [
  { label: "All Packages", value: "All Packages", count: 6 },
  { label: "Beach & Coastal", value: "Beach & Coastal" },
  { label: "Mountains & Trekking", value: "Mountains & Trekking" },
  { label: "Cultural & City", value: "Cultural & City" },
  { label: "International", value: "International" },
];

export default function PackageFilters({
  category,
  search,
  sort,
  onCategoryChange,
  onSearchChange,
  onSortChange,
}: PackageFiltersProps) {
  return (
    <section className="w-full border-y border-[#dfd9d0] bg-[#fbf9f5]">
      <div className="mx-auto max-w-360 px-5 py-5 md:px-12 lg:px-16">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => onCategoryChange(item.value)}
                className={`px-4 py-2 font-body text-[4px] md:text-[9px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                  category === item.value
                    ? "bg-[#1b1c1a] text-white"
                    : "border border-[#dfd9d0] bg-white text-[#605e5d] hover:border-[#1b1c1a] hover:text-[#1b1c1a]"
                }`}
              >
                {item.label}
                {item.count && (
                  <span className="ml-1 opacity-60">({item.count})</span>
                )}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="search"
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search destinations..."
              className="h-10 w-full border border-[#dfd9d0] bg-white px-4 font-body text-xs text-[#1b1c1a] outline-none placeholder:text-[#78736e] focus:border-[#bd442f] sm:w-56"
            />

            <select
              value={sort}
              onChange={(event) => onSortChange(event.target.value)}
              className="h-10 border border-[#dfd9d0] bg-white px-4 font-body text-xs text-[#1b1c1a] outline-none focus:border-[#bd442f]"
            >
              <option value="default">Sort by</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Destination: A-Z</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
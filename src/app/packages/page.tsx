"use client";

import { useMemo, useState } from "react";
import PackageFilters from "@/components/packages/PackageFilters";
import PackageGrid from "@/components/packages/PackageGrid";
import PackagesHero from "@/components/packages/PackagesHero";
import { packageCatalog } from "@/data/packageCatalog";
import CTA from "@/components/CTA";
import PackageInclusions from "@/components/packages/PackageInclusions";

export default function PackagesPage() {
  const [category, setCategory] = useState("All Packages");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  const filteredPackages = useMemo(() => {
    let result = packageCatalog.filter((packageData) => {
      const matchesCategory =
        category === "All Packages" ||
        packageData.category === category;

      const searchTerm = search.trim().toLowerCase();

      const matchesSearch =
        !searchTerm ||
        packageData.destination.toLowerCase().includes(searchTerm) ||
        packageData.title.toLowerCase().includes(searchTerm) ||
        packageData.region.toLowerCase().includes(searchTerm);

      return matchesCategory && matchesSearch;
    });

    if (sort === "price-low") {
      result = [...result].sort(
        (a, b) =>
          Number(a.price.replace(/[₹,]/g, "")) -
          Number(b.price.replace(/[₹,]/g, ""))
      );
    }

    if (sort === "price-high") {
      result = [...result].sort(
        (a, b) =>
          Number(b.price.replace(/[₹,]/g, "")) -
          Number(a.price.replace(/[₹,]/g, ""))
      );
    }

    if (sort === "name") {
      result = [...result].sort((a, b) =>
        a.destination.localeCompare(b.destination)
      );
    }

    return result;
  }, [category, search, sort]);

  return (
    <main>
      <PackagesHero />
      <PackageFilters
        category={category}
        search={search}
        sort={sort}
        onCategoryChange={setCategory}
        onSearchChange={setSearch}
        onSortChange={setSort}
      />
      <PackageGrid packages={filteredPackages} />
      <PackageInclusions />
      <CTA />
    </main>
  );
}
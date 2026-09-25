import Image from "next/image";
import Link from "next/link";
import { packages } from "@/data/packages";

export default function Packages() {
  return (
    <section
      id="packages"
      className="border-b border-[#e4e2de] bg-[#fbf9f5]"
    >
      <div className="mx-auto max-w-360 px-5 py-20 md:px-16 md:py-28">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 bg-[#bd442f]" />

              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#bd442f]">
                Popular Packages
              </span>
            </div>

            <h2 className="max-w-2xl font-display text-4xl font-semibold uppercase leading-tight tracking-[-0.02em] text-[#1b1c1a] md:text-5xl">
              Explore our holiday packages
            </h2>
          </div>

          <p className="max-w-md font-body text-base leading-7 text-[#58413d]">
            Choose from some of our most popular destinations and start
            planning your next adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.id}
              className="group border border-[#e4e2de] bg-white"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-[#efeeea]">
                <Image
                  src={item.image}
                  alt={`${item.destination} holiday package`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold uppercase tracking-tight text-[#1b1c1a]">
                      {item.destination}
                    </h3>

                    <p className="mt-1 font-body text-sm text-[#78736e]">
                      {item.type}
                    </p>
                  </div>

                  <span className="whitespace-nowrap font-body text-xs font-semibold uppercase tracking-wider text-[#bd442f]">
                    {item.duration}
                  </span>
                </div>

                <div className="flex items-center justify-between border-t border-[#e4e2de] pt-5">
                  <div>
                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-[#78736e]">
                      Starting from
                    </p>

                    <p className="mt-1 font-display text-xl font-semibold text-[#1b1c1a]">
                      {item.price}
                    </p>
                  </div>

                  <Link
                    href="#contact"
                    className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-[#1b1c1a] transition-colors hover:text-[#bd442f]"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="#contact"
            className="border border-[#1b1c1a] px-8 py-3.5 font-body text-xs font-semibold uppercase tracking-[0.15em] text-[#1b1c1a] transition-colors hover:bg-[#1b1c1a] hover:text-white"
          >
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
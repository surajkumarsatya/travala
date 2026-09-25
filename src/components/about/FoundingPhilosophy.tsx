export default function FoundingPhilosophy() {
  return (
    <section className="border-t border-[#e4e2de] bg-white">
      <div className="mx-auto max-w-360 px-5 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="h-2 w-2 bg-[#bd442f]" />

            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#bd442f]">
              Founding Philosophy
            </span>
          </div>

          <blockquote className="font-display text-3xl font-medium leading-tight tracking-[-0.02em] text-[#1b1c1a] md:text-5xl md:leading-[1.15]">
            “We don’t just sell trips; we curate moments that expand your
            perspective.”
          </blockquote>

          <div className="mt-10 flex flex-col items-center">
            <div className="mb-5 flex h-12 w-12 items-center justify-center bg-[#9c2c1a]">
              <span className="font-display text-lg font-semibold text-white">
                T
              </span>
            </div>

            <p className="font-body text-sm font-semibold text-[#1b1c1a]">
              Aria &amp; Devlin Vance
            </p>

            <p className="mt-1 font-body text-xs text-[#78736e]">
              Founders &amp; Principal Curators, Travala
            </p>

            <div className="mt-6 border-t border-[#e4e2de] pt-4">
              <p className="font-body text-[9px] font-semibold uppercase tracking-[0.16em] text-[#78736e]">
                Signed • London &amp; New Delhi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
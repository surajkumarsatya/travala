const faqs = [
  {
    question: "How soon do you confirm bookings?",
    answer:
      "Upon receipt of your formal inquiry, an assigned destination manager responds within 2 business hours with verified room inventory and tailored itineraries. Once you approve the quote and remit the commitment deposit, hotel vouchers, aviation clearances, and ground concierge dossiers are officially issued within 12 to 24 hours.",
  },
  {
    question: "Can I customize inclusions or extend stays?",
    answer:
      "Every Travala journey is fully customizable. You can adjust the tempo of your days, request private aviation, replace dining venues with Michelin-starred reservations, or add seamless extensions across adjoining countries. Mention your intended scope in the message field above.",
  },
  {
    question: "What is your cancellation and refund policy?",
    answer:
      "We provide transparent cancellation frameworks aligned with our luxury boutique partners. Cancellations requested 30 days prior to departure receive up to a 100% credit or direct refund, excluding non-recoverable national aviation and heritage permits. We also issue optional comprehensive interruption protection covering unforeseen changes.",
  },
];

export default function ContactFAQ() {
  return (
    <section className="w-full bg-[#fbf9f5]">
      <div className="mx-auto max-w-360 border-t border-[#e4e2de] px-5 py-16 md:px-12 lg:px-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="font-body text-[9px] font-semibold uppercase tracking-[0.18em] text-[#bd442f]">
              Essential Clarifications
            </span>

            <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.03em] text-[#1b1c1a] md:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 max-w-md font-body text-sm leading-6 text-[#78736e]">
              Instant insights into our booking process, customization options,
              and cancellation policies.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-[#e4e2de]">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group border-b border-[#e4e2de]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                    <div className="flex items-start gap-4">
                      <span className="font-body text-[9px] font-semibold text-[#bd442f]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="font-display text-base font-medium text-[#1b1c1a] md:text-lg">
                        {faq.question}
                      </h3>
                    </div>

                    <span className="shrink-0 font-body text-xl font-light text-[#78736e] transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <div className="pb-5 pl-8">
                    <p className="max-w-2xl font-body text-sm leading-6 text-[#78736e]">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
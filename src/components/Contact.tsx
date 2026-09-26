"use client";

import { FormEvent, useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ContactProps = {
  defaultMessage?: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function Contact({
  defaultMessage = "",
}: ContactProps) {
  const [form, setForm] = useState<FormData>({
    ...initialForm,
    message: defaultMessage,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitted(false);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to send your message.",
        );
      }

      setSubmitted(true);

      setForm({
        ...initialForm,
        message: defaultMessage,
      });
    } catch (error) {
      console.error("Contact form submission error:", error);

      setError(
        "Unable to send your message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="border-b border-[#e4e2de] bg-[#fbf9f5]"
    >
      <div className="mx-auto max-w-360 px-5 py-20 md:px-12 md:py-28 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 bg-[#bd442f]" />

              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#bd442f]">
                Contact Us
              </span>
            </div>

            <h2 className="max-w-lg font-display text-4xl font-semibold uppercase leading-tight tracking-[-0.02em] text-[#1b1c1a] md:text-5xl">
              Let&apos;s plan your next trip.
            </h2>

            <p className="mt-6 max-w-md font-body text-base leading-7 text-[#58413d]">
              Have a question or need help choosing a package? Send us a
              message and our team will get back to you.
            </p>

            <div className="mt-10 space-y-6 border-t border-[#e4e2de] pt-6">
              <div>
                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-[#78736e]">
                  Email
                </p>

                <a
                  href="mailto:hello@travala.com"
                  className="mt-1 inline-block font-body text-sm text-[#1b1c1a] hover:text-[#bd442f]"
                >
                  hello@travala.com
                </a>
              </div>

              <div>
                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-[#78736e]">
                  Phone
                </p>

                <a
                  href="tel:+919876543210"
                  className="mt-1 inline-block font-body text-sm text-[#1b1c1a] hover:text-[#bd442f]"
                >
                  +91 98765 43210
                </a>
              </div>

              <div>
                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-[#78736e]">
                  Location
                </p>

                <p className="mt-1 font-body text-sm text-[#1b1c1a]">
                  New Delhi, India
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {submitted && (
              <div className="mb-6 border border-[#9c2c1a] bg-[#f8e9e5] px-5 py-4 font-body text-sm text-[#7f2416]">
                Thank you! Your inquiry has been received.
              </div>
            )}

            {error && (
              <div className="mb-6 border border-[#9c2c1a] bg-[#f8e9e5] px-5 py-4 font-body text-sm text-[#7f2416]">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-body text-xs font-semibold uppercase tracking-[0.12em] text-[#1b1c1a]"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full border border-[#d9d4ce] bg-white px-4 py-3.5 font-body text-sm text-[#1b1c1a] outline-none placeholder:text-[#9a9590] focus:border-[#9c2c1a]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-body text-xs font-semibold uppercase tracking-[0.12em] text-[#1b1c1a]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full border border-[#d9d4ce] bg-white px-4 py-3.5 font-body text-sm text-[#1b1c1a] outline-none placeholder:text-[#9a9590] focus:border-[#9c2c1a]"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block font-body text-xs font-semibold uppercase tracking-[0.12em] text-[#1b1c1a]"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full border border-[#d9d4ce] bg-white px-4 py-3.5 font-body text-sm text-[#1b1c1a] outline-none placeholder:text-[#9a9590] focus:border-[#9c2c1a]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-body text-xs font-semibold uppercase tracking-[0.12em] text-[#1b1c1a]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your travel plans..."
                  className="w-full resize-none border border-[#d9d4ce] bg-white px-4 py-3.5 font-body text-sm text-[#1b1c1a] outline-none placeholder:text-[#9a9590] focus:border-[#9c2c1a]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#bd442f] px-8 py-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#9c2c1a] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
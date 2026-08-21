import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { FAQS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "How Booking Works",
  description:
    "From choosing your ride to hitting the dunes — here's exactly how booking a rental or guided tour with ThrillOffroad works.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Hero
        badge="Our Process"
        title="Booking A Ride Is "
        titleAccent="Simple"
        subtitle="No confusing paperwork, no upsells at pickup. Choose your vehicle or tour, book online, and show up ready to ride."
        primaryCTA="Book Your Ride"
        primaryHref="/contact"
      />
      <HowItWorks />
      <WhyUs />
      <FAQ
        eyebrow="Questions"
        title="Booking FAQ"
        subtitle="What to expect before your visit."
        faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
      />
      <CTA
        title="Ready To Book?"
        description="Reserve your rental or guided tour today — we'll confirm within one business day."
        primaryCTA="Book Your Ride"
        primaryHref="/contact"
      />
    </>
  );
}

import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { RentalsGrid } from "@/components/sections/RentalsGrid";
import { ToursGrid } from "@/components/sections/ToursGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { FAQS } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <Hero
        badge="Glamis Sand Dunes Recreation Area"
        title="Conquer The "
        titleAccent="Glamis Dunes"
        subtitle="UTV and SXS rentals plus guided dune tours — safety gear included, GPS-equipped fleet, and a team that rides these dunes year-round."
        primaryCTA="Book Your Ride"
        primaryHref="/contact"
        secondaryCTA="View Rental Fleet"
        secondaryHref="/rentals"
        layout="split-right"
        heroImage="/images/hero-dune-run.jpg"
        heroImageAlt="A UTV kicking up sand while riding the Glamis dunes at golden hour"
      />
      <TrustBar />
      <RentalsGrid />
      <ToursGrid />
      <HowItWorks />
      <WhyUs />
      <FAQ
        eyebrow="Questions"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before booking a rental or tour."
        faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
      />
      <CTA
        title="Ready To Hit The Sand?"
        description="Book your rental or guided tour today — we'll confirm availability within one business day."
        primaryCTA="Book Your Ride"
        primaryHref="/contact"
        secondaryText="Browse rental fleet"
        secondaryHref="/rentals"
      />
    </>
  );
}

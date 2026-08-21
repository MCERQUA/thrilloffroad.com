import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { RentalsGrid } from "@/components/sections/RentalsGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "UTV & SXS Rental Fleet — Glamis Sand Dunes",
  description:
    "Self-guided UTV and SXS rentals at the Glamis Sand Dunes Recreation Area. Safety gear and GPS navigation included on every rental.",
};

export default function RentalsPage() {
  return (
    <>
      <Hero
        badge="Rental Fleet"
        title="Pick Your Ride, "
        titleAccent="Hit The Dunes"
        subtitle="Every rental includes DOT-approved safety gear, built-in GPS navigation, and a full tank of fuel. Choose the vehicle that fits your group and experience level."
        primaryCTA="Book Your Ride"
        primaryHref="/contact"
        secondaryCTA="See Guided Tours"
        secondaryHref="/tours"
      />
      <RentalsGrid />
      <HowItWorks />
      <CTA
        title="Not Sure Which Vehicle Fits?"
        description="Tell us your group size and experience level and we'll recommend the right rental."
        primaryCTA="Book Your Ride"
        primaryHref="/contact"
      />
    </>
  );
}

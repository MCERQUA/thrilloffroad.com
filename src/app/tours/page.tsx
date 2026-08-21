import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ToursGrid } from "@/components/sections/ToursGrid";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Guided Dune Tours — Glamis Sand Dunes",
  description:
    "Guided UTV tours of the Glamis Sand Dunes Recreation Area — Sunset Dune Tour, Full-Day Adventure Tour, and Private Group Tours.",
};

export default function ToursPage() {
  return (
    <>
      <Hero
        badge="Guided Tours"
        title="Ride With Someone Who "
        titleAccent="Knows The Dunes"
        subtitle="Don't know the Glamis dune system yet? Our guided tours put an experienced local rider at the front of your group."
        primaryCTA="Book Your Tour"
        primaryHref="/contact"
        secondaryCTA="See Rental Fleet"
        secondaryHref="/rentals"
      />
      <ToursGrid />
      <CTA
        title="Pick Your Adventure"
        description="Tell us your group size and preferred date and we'll confirm your tour."
        primaryCTA="Book Your Tour"
        primaryHref="/contact"
      />
    </>
  );
}

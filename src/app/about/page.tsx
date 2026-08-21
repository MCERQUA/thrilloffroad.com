import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { WhyUs } from "@/components/sections/WhyUs";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { FadeIn } from "@/components/animations/FadeIn";
import { CTA } from "@/components/sections/CTA";
import { STATS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About ThrillOffroad",
  description:
    "ThrillOffroad is a UTV and SXS rental and guided-tour outfitter based at the Glamis Sand Dunes Recreation Area — here's who we are and how we work.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        badge="About Us"
        title="Riders Who Know These "
        titleAccent="Dunes By Name"
        subtitle="ThrillOffroad exists because too many first-time visitors show up at Glamis with a rented vehicle and no idea where to go. We built a rental and tour operation around real local knowledge and gear that's actually maintained."
        layout="split-right"
        heroImage="/images/about-fleet-lineup.jpg"
        heroImageAlt="A lineup of ThrillOffroad rental UTVs staged in the desert at sunset"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <FadeIn>
            <p>
              The Glamis Sand Dunes Recreation Area is one of the largest off-road destinations
              in the country, and it can be overwhelming for a first-time visitor — hundreds of
              square miles of dune terrain, seasonal access rules, and a learning curve that
              catches a lot of new riders off guard. ThrillOffroad was built to close that gap:
              rentals with real safety briefings, GPS-equipped vehicles, and guided tours led by
              riders who know the dune system in every season.
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p>
              Our fleet covers everything from an easy-to-handle 2-seat RZR for first-timers up
              to a high-performance Can-Am Maverick X3 for experienced riders chasing bigger
              terrain — plus family-sized vehicles for groups who want to stick together. Every
              rental includes DOT-approved safety gear and a full tank of fuel, with no hidden
              fees added at pickup.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p>
              Whether you want to ride self-guided with built-in navigation or follow an
              experienced local guide on one of our tour packages, our goal is the same: get you
              on the dunes safely, with a vehicle that matches your experience level, and a real
              answer to every question before you head out.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 border-y border-border bg-card/60">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {STATS.map((stat) => (
              <StaggerItem key={stat.label}>
                <p className="text-3xl md:text-4xl font-heading font-bold">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <WhyUs />

      <CTA
        title="Come Ride With Us"
        description="Book your rental or guided tour and see the Glamis dunes the way locals do."
        primaryCTA="Book Your Ride"
        primaryHref="/contact"
      />
    </>
  );
}

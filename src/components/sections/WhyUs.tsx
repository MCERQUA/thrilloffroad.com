"use client";
import { ShieldCheck, MapPin, Award, Wallet } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Safety gear included, every ride",
    body: "DOT-approved helmets, goggles, and a hands-on safety briefing come standard on every rental and tour — no upsell.",
  },
  {
    icon: MapPin,
    title: "GPS-equipped fleet",
    body: "Every vehicle is fitted with dune-system GPS navigation so self-guided riders can explore with confidence.",
  },
  {
    icon: Award,
    title: "Experienced local guides",
    body: "Our guided tours are led by riders who know the Glamis dune system inside and out, in every season.",
  },
  {
    icon: Wallet,
    title: "No hidden fees",
    body: "Rate ranges shown up front include gear and a full tank of fuel — final pricing is confirmed before you book.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Why ThrillOffroad
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Built For A Real Day On The Dunes
          </h2>
          <p className="mt-4 text-lg text-background/70">
            Not a generic rental counter — a team that rides these dunes year-round.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {REASONS.map((reason) => (
            <StaggerItem key={reason.title}>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg">{reason.title}</h3>
                  <p className="mt-2 text-sm text-background/70 leading-relaxed">{reason.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

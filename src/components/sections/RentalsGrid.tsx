"use client";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { RENTALS } from "@/lib/site-data";

export function RentalsGrid() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Rental Fleet
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            A Vehicle For Every Rider
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From first-timers to experienced riders, every rental includes safety gear and GPS navigation.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RENTALS.map((v) => (
            <StaggerItem key={v.slug}>
              <Link
                href={`/rentals/${v.slug}`}
                className="group block h-full rounded-xl bg-card border border-border hover:border-primary/40 transition-colors cursor-pointer overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={v.image} alt={v.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                    <Users className="w-3.5 h-3.5" /> {v.seats}
                  </div>
                  <h3 className="text-lg font-heading font-semibold">{v.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.bestFor}</p>
                  <p className="mt-3 text-sm font-semibold">{v.rateRange}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    View details
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

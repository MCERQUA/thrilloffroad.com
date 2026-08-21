"use client";
import Link from "next/link";
import { ArrowRight, Clock, Check } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { TOURS } from "@/lib/site-data";

export function ToursGrid() {
  return (
    <section className="py-24 md:py-32 bg-card/40">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Guided Tours
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Let A Local Guide Lead The Way
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don&apos;t know the dune system yet? Ride with someone who does.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TOURS.map((t) => (
            <StaggerItem key={t.slug}>
              <Link
                href={`/tours/${t.slug}`}
                className="group block h-full p-8 rounded-xl bg-background border border-border hover:border-primary/40 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wide mb-3">
                  <Clock className="w-3.5 h-3.5" /> {t.duration}
                </div>
                <h3 className="text-xl font-heading font-semibold">{t.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.summary}</p>
                <ul className="mt-5 space-y-2">
                  {t.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {h}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 font-semibold">{t.priceRange}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  View tour details
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

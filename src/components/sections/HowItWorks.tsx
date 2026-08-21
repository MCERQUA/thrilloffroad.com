"use client";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { HOW_IT_WORKS } from "@/lib/site-data";

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-card/40">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            From Booking To The Dunes
          </h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {HOW_IT_WORKS.map((item) => (
            <StaggerItem key={item.step}>
              <div className="relative pl-14 md:pl-0">
                <div className="md:mb-5 flex items-center justify-center w-11 h-11 rounded-full bg-primary text-primary-foreground font-heading font-bold absolute left-0 top-0 md:relative">
                  {item.step}
                </div>
                <h3 className="font-heading font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

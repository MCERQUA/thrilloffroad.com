"use client";
import { FadeIn } from "@/components/animations/FadeIn";
import { Counter } from "@/components/animations/Counter";
import { STATS } from "@/lib/site-data";

export function TrustBar() {
  return (
    <section className="border-y border-border bg-card/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {STATS.map((stat) => {
              const numeric = parseInt(stat.value.replace(/\D/g, ""), 10);
              const suffix = stat.value.replace(/[0-9]/g, "");
              return (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                    {Number.isFinite(numeric) && numeric > 0 ? (
                      <Counter target={numeric} suffix={suffix} />
                    ) : (
                      stat.value
                    )}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

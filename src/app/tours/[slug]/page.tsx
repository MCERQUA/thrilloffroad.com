import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight, Clock } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { CTA } from "@/components/sections/CTA";
import { TOURS, BUSINESS } from "@/lib/site-data";

export function generateStaticParams() {
  return TOURS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = TOURS.find((x) => x.slug === slug);
  if (!t) return {};
  return { title: t.name, description: t.summary };
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = TOURS.find((x) => x.slug === slug);
  if (!t) notFound();

  const tourSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: t.name,
    description: t.summary,
    provider: { "@type": "LocalBusiness", name: BUSINESS.name },
    touristType: "Off-road recreation",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }} />
      <section className="relative bg-background py-20 md:py-28 overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wide mb-4 px-4 py-1.5 rounded-full border border-border bg-card">
              <Clock className="w-3.5 h-3.5" /> {t.duration}
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold leading-tight">{t.name}</h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{t.summary}</p>
            <p className="mt-4 text-xl font-heading font-semibold text-primary">{t.priceRange}</p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all cursor-pointer"
              >
                Book This Tour
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/40">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-2xl font-heading font-bold mb-6 text-center">What&apos;s Included</h2>
            <ul className="space-y-4">
              {t.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <CTA
        title="Ready To Book This Tour?"
        description="Tell us your group size and preferred date and we'll confirm availability."
        primaryCTA="Book This Tour"
        primaryHref="/contact"
        secondaryText="See all tours"
        secondaryHref="/tours"
      />
    </>
  );
}

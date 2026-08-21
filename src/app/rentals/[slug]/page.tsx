import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight, Users } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { RENTALS, BUSINESS } from "@/lib/site-data";

export function generateStaticParams() {
  return RENTALS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const v = RENTALS.find((r) => r.slug === slug);
  if (!v) return {};
  return { title: `${v.name} Rental`, description: v.summary };
}

export default async function RentalDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const v = RENTALS.find((r) => r.slug === slug);
  if (!v) notFound();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${v.name} Rental`,
    description: v.summary,
    brand: { "@type": "Brand", name: BUSINESS.name },
    offers: { "@type": "Offer", priceCurrency: "USD", description: v.rateRange },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <section className="relative bg-background py-20 md:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wide mb-4">
              <Users className="w-3.5 h-3.5" /> {v.seats} &middot; {v.bestFor}
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold leading-tight">{v.name}</h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{v.heroSubtitle}</p>
            <p className="mt-4 text-xl font-heading font-semibold text-primary">{v.rateRange}</p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all cursor-pointer"
              >
                Book This Vehicle
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.1} className="rounded-2xl overflow-hidden border border-border aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={v.image} alt={v.name} className="w-full h-full object-cover" />
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn direction="left">
            <h2 className="text-2xl font-heading font-bold mb-6">What&apos;s Included</h2>
            <ul className="space-y-4">
              {v.included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn direction="right">
            <h2 className="text-2xl font-heading font-bold mb-6">Who It&apos;s For</h2>
            <ul className="space-y-4 mb-8">
              {v.whoItsFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-xl bg-card border border-border p-6">
              <h3 className="font-heading font-semibold mb-4">Specs</h3>
              <dl className="space-y-2">
                {v.specs.map((s) => (
                  <div key={s.label} className="flex justify-between text-sm gap-4">
                    <dt className="text-muted-foreground">{s.label}</dt>
                    <dd className="font-medium text-right">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>
        </div>
      </section>

      <FAQ
        eyebrow="FAQ"
        title={`${v.shortName} Questions`}
        subtitle="Common questions about this rental."
        faqs={v.faqs.map((f) => ({ question: f.q, answer: f.a }))}
      />

      <CTA
        title="Ready To Book?"
        description={`Reserve the ${v.name} for your next trip to Glamis.`}
        primaryCTA="Book This Vehicle"
        primaryHref="/contact"
        secondaryText="See the full fleet"
        secondaryHref="/rentals"
      />
    </>
  );
}

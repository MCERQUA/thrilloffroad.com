import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { CTA } from "@/components/sections/CTA";

export function BlogPostLayout({
  title,
  date,
  children,
}: {
  title: string;
  date: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <article className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <FadeIn>
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <time className="block text-xs text-muted-foreground uppercase tracking-wide mb-3">{date}</time>
            <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-10">{title}</h1>
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed [&_h2]:text-foreground [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:pt-6 [&_h3]:text-foreground [&_h3]:font-heading [&_h3]:font-semibold [&_h3]:text-xl [&_h3]:pt-4 [&_strong]:text-foreground [&_li]:leading-relaxed">
              {children}
            </div>
          </FadeIn>
        </div>
      </article>
      <CTA
        title="Ready To Book Your Own Ride?"
        description="Reserve a rental or guided tour and see the Glamis dunes for yourself."
        primaryCTA="Book Your Ride"
        primaryHref="/contact"
      />
    </>
  );
}

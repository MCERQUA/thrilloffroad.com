import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { BLOG_POSTS_META } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Riding tips, gear guides, and season info for visiting the Glamis Sand Dunes.",
};

export default function BlogIndexPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Blog</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold">
            Dune Riding Guides
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Real tips from a team that rides the Glamis dunes year-round.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS_META.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors cursor-pointer"
              >
                <time className="text-xs text-muted-foreground uppercase tracking-wide">{post.date}</time>
                <h2 className="mt-3 text-lg font-heading font-semibold leading-snug">{post.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{post.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Read post
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

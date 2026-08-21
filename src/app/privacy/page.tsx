import type { Metadata } from "next";
import { BUSINESS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ThrillOffroad collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 md:px-6 prose prose-invert">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>Last updated: August 2026</p>
          <p>
            ThrillOffroad (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy
            explains what information we collect through {BUSINESS.url} and how we use it.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">Information We Collect</h2>
          <p>
            When you submit a booking or contact form on this site, we collect the name, email,
            preferred vehicle/tour, date, and message details you provide. We also automatically
            capture the referring source of your visit (traffic source and landing page) to
            understand how visitors find this site.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">How We Use Information</h2>
          <p>
            We use submitted information solely to respond to your booking request, confirm
            availability, and provide the rental or tour services you request. We do not sell
            your personal information to third parties.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">Form Processing</h2>
          <p>
            Form submissions on this site are processed by Netlify Forms. Netlify may store
            submission data as part of providing that service. See Netlify&apos;s own privacy
            policy for details on their data handling.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">Contact</h2>
          <p>Questions about this policy can be sent to {BUSINESS.email}.</p>
        </div>
      </div>
    </section>
  );
}

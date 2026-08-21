"use client";
import { useEffect, useRef, useState } from "react";
import { Send, CheckCircle, Mail, MapPin } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { BUSINESS } from "@/lib/site-data";

interface LeadFormProps {
  formName: "booking" | "contact";
  title: string;
  titleAccent?: string;
  subtitle: string;
  submitLabel?: string;
  showInfoColumn?: boolean;
  vehicleField?: boolean;
}

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export function LeadForm(props: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const srcRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const p = new URLSearchParams(window.location.search);
      let src = p.get("utm_source") || p.get("ref") || "";
      if (!src && document.referrer) {
        try {
          src = new URL(document.referrer).hostname;
        } catch {
          src = document.referrer;
        }
      }
      if (!src) src = "direct";
      if (srcRef.current) srcRef.current.value = src;
      if (urlRef.current) urlRef.current.value = window.location.href;
    } catch {
      // ignore
    }
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = String(value);
    });

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });
      if (!res.ok) throw new Error("Failed to send. Please try again or email us directly.");
      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-24 md:py-32">
        <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-bold">Request Received.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We&apos;ll follow up within one business day to confirm availability and next steps.
            </p>
          </FadeIn>
        </div>
      </section>
    );
  }

  const formBody = (
    <form
      name={props.formName}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value={props.formName} />
      <div className="hidden" aria-hidden="true">
        <label>
          Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {/* AEO traffic-source capture (hidden; never rendered) */}
      <input ref={srcRef} type="hidden" name="traffic_source" id={`__aeo_src_${props.formName}`} value="" />
      <input ref={urlRef} type="hidden" name="landing_url" id={`__aeo_url_${props.formName}`} value="" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`name_${props.formName}`} className="block text-sm font-medium mb-2">Name</label>
          <input
            id={`name_${props.formName}`}
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label htmlFor={`email_${props.formName}`} className="block text-sm font-medium mb-2">Email</label>
          <input
            id={`email_${props.formName}`}
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          />
        </div>
      </div>

      {props.vehicleField && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`vehicle_${props.formName}`} className="block text-sm font-medium mb-2">Vehicle or tour</label>
            <select
              id={`vehicle_${props.formName}`}
              name="vehicle_or_tour"
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              defaultValue=""
            >
              <option value="" disabled>Select one</option>
              <option value="2-Seat RZR">2-Seat RZR</option>
              <option value="4-Seat RZR">4-Seat RZR</option>
              <option value="Can-Am Maverick X3">Can-Am Maverick X3</option>
              <option value="Family 6-Seat UTV">Family 6-Seat UTV</option>
              <option value="Sunset Dune Tour">Sunset Dune Tour</option>
              <option value="Full-Day Adventure Tour">Full-Day Adventure Tour</option>
              <option value="Private Group Tour">Private Group Tour</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>
          <div>
            <label htmlFor={`date_${props.formName}`} className="block text-sm font-medium mb-2">Preferred date</label>
            <input
              id={`date_${props.formName}`}
              name="preferred_date"
              type="date"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            />
          </div>
        </div>
      )}

      <div>
        <label htmlFor={`message_${props.formName}`} className="block text-sm font-medium mb-2">
          {props.formName === "booking" ? "Group size and anything else we should know" : "Message"}
        </label>
        <textarea
          id={`message_${props.formName}`}
          name="message"
          required
          rows={5}
          placeholder="Tell us about your group..."
          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
        />
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            {props.submitLabel ?? "Send"}
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );

  if (!props.showInfoColumn) {
    return (
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 md:px-6">{formBody}</div>
      </section>
    );
  }

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <FadeIn direction="left">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Get In Touch</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              {props.title}
              {props.titleAccent && (
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {props.titleAccent}
                </span>
              )}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{props.subtitle}</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">{BUSINESS.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Where to find us</p>
                  <p className="text-sm text-muted-foreground">{BUSINESS.location}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>{formBody}</FadeIn>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { BUSINESS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the ThrillOffroad website and rental/tour booking requests.",
};

export default function TermsPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 md:px-6 prose prose-invert">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">Terms of Service</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>Last updated: August 2026</p>
          <p>
            These terms govern your use of {BUSINESS.url} and any booking request submitted
            through it. By using this site or submitting a booking request, you agree to these
            terms.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">Bookings</h2>
          <p>
            Submitting the booking form on this site is a request, not a confirmed reservation.
            All bookings are confirmed directly with you, including final pricing, availability,
            waivers, and any deposit required, before your rental or tour date.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">Safety &amp; Requirements</h2>
          <p>
            All riders must complete a safety briefing before operating a rental vehicle. Drivers
            must meet the minimum age and licensing requirements listed for each vehicle. A valid
            BLM Adventure Pass or equivalent access permit may be required to operate a vehicle
            within the Glamis Sand Dunes Recreation Area, per current land-management rules —
            confirm current requirements at time of booking.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">Pricing</h2>
          <p>
            Rate ranges shown on this site are estimates for planning purposes. Final pricing is
            confirmed at time of booking based on vehicle, duration, and season.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">No Guaranteed Availability</h2>
          <p>
            Vehicle and tour availability is limited and confirmed on a first-booked basis.
            Submitting a request does not guarantee a specific vehicle, tour, or time slot.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">Contact</h2>
          <p>Questions about these terms can be sent to {BUSINESS.email}.</p>
        </div>
      </div>
    </section>
  );
}

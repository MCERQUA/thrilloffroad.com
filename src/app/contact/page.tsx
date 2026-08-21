import type { Metadata } from "next";
import { LeadForm } from "@/components/sections/LeadForm";

export const metadata: Metadata = {
  title: "Book Your Ride",
  description:
    "Book a UTV or SXS rental or a guided dune tour with ThrillOffroad at the Glamis Sand Dunes Recreation Area. We'll confirm within one business day.",
};

export default function ContactPage() {
  return (
    <LeadForm
      formName="booking"
      title="Book Your "
      titleAccent="Glamis Adventure"
      subtitle="Tell us your group size, preferred vehicle or tour, and date. We'll follow up within one business day to confirm availability."
      submitLabel="Request My Booking"
      showInfoColumn
      vehicleField
    />
  );
}

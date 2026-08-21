import type { Metadata } from "next";
import { BlogPostLayout } from "@/components/sections/BlogPostLayout";

export const metadata: Metadata = {
  title: "First-Time Rider's Guide to the Glamis Sand Dunes",
  description:
    "Everything a first-time visitor needs to know before renting a UTV at Glamis — permits, gear, riding basics, and what to expect.",
};

export default function Post() {
  return (
    <BlogPostLayout title="First-Time Rider's Guide to the Glamis Sand Dunes" date="July 10, 2026">
      <p>
        The Glamis Sand Dunes Recreation Area — officially the Imperial Sand Dunes Recreation
        Area — is one of the largest off-road destinations in the country, and it can feel
        overwhelming the first time you show up. Here&apos;s what to actually know before your
        first ride.
      </p>

      <h2>You&apos;ll need a valid access permit</h2>
      <p>
        The Imperial Sand Dunes are managed by the Bureau of Land Management, and vehicle access
        during peak season requires a valid BLM Adventure Pass. Requirements and pass pricing can
        change season to season, so it&apos;s worth confirming current rules before you arrive.
        If you&apos;re booking a rental with us, we&apos;ll walk you through the current
        requirements when you book.
      </p>

      <h2>Pick the right vehicle for your experience level</h2>
      <p>
        First-time riders almost always do better starting with an easier-to-handle vehicle
        rather than the most powerful option available. A 2-seat or 4-seat RZR-class UTV gives
        you plenty of capability on the dunes without the steeper learning curve of a
        high-performance machine like a Maverick X3. You can always step up to more power on a
        return trip once you&apos;ve got seat time under your belt.
      </p>

      <h2>Safety gear isn&apos;t optional</h2>
      <p>
        A DOT-approved helmet and goggles should be non-negotiable, even for a short ride —
        blowing sand alone makes goggles essential, and dune terrain can throw unexpected drops
        and blind crests even on established trails. A proper safety briefing before you start
        riding matters just as much as the gear itself: dune riding has its own hazards (blind
        crests, soft sand pockets, other riders) that don&apos;t come up in regular off-roading.
      </p>

      <h2>Consider a guided tour for your first ride</h2>
      <p>
        If you&apos;ve never ridden the Glamis dune system before, a guided tour removes the
        biggest first-trip risk: getting disoriented in a landscape that looks very different
        from a distance than it does up close. A guide who rides the dunes regularly knows which
        areas suit beginners, where the more technical terrain starts, and how conditions change
        with wind and recent traffic.
      </p>

      <h2>Know the season</h2>
      <p>
        The main riding season runs roughly October through April, when daytime temperatures are
        manageable. Summer riding is possible but comes with serious desert heat that requires
        extra water, earlier start times, and real caution — many riders plan their first visit
        for the cooler months specifically to avoid that added risk.
      </p>

      <h2>What to pack</h2>
      <ul>
        <li>Closed-toe shoes or boots (never sandals)</li>
        <li>Layers — desert mornings and evenings run cold even in warm months</li>
        <li>Sun protection: sunscreen, sunglasses, a buff or bandana for blowing sand</li>
        <li>More water than you think you&apos;ll need</li>
        <li>A phone with a charged battery — cell service is limited in parts of the dune system</li>
      </ul>

      <h2>Book ahead, especially on weekends</h2>
      <p>
        Glamis gets busy on weekends and holiday periods during peak season. Booking your rental
        or tour ahead of time — rather than showing up hoping for availability — is the difference
        between riding the day you planned and waiting around.
      </p>
    </BlogPostLayout>
  );
}

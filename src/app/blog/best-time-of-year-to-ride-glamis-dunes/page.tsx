import type { Metadata } from "next";
import { BlogPostLayout } from "@/components/sections/BlogPostLayout";

export const metadata: Metadata = {
  title: "The Best Time of Year to Ride the Glamis Dunes (And What to Pack)",
  description:
    "A season-by-season breakdown of riding conditions at Glamis, plus a packing list for a comfortable day on the dunes.",
};

export default function Post() {
  return (
    <BlogPostLayout title="The Best Time of Year to Ride the Glamis Dunes (And What to Pack)" date="August 7, 2026">
      <p>
        Glamis is rideable most of the year, but conditions swing hard between seasons in the
        Imperial Valley desert. Here&apos;s what to expect depending on when you plan your trip.
      </p>

      <h2>October through April: peak season</h2>
      <p>
        This is when most visitors ride, and for good reason — daytime temperatures are
        manageable, mornings and evenings are crisp rather than dangerously hot, and the dunes
        see their heaviest (and most social) traffic. Weekends and holiday periods within this
        window get busy fast, especially around major holidays when the dunes host large
        gatherings. If you want a specific weekend, book well ahead.
      </p>

      <h2>November through February: cooler, quieter</h2>
      <p>
        Within peak season, the coolest stretch also tends to be a little quieter on weekdays.
        Mornings can drop close to freezing, so layers matter more here than any other time of
        year — you&apos;ll likely start bundled up and shed layers as the day warms.
      </p>

      <h2>May through September: possible, but demanding</h2>
      <p>
        Summer riding at Glamis is possible, but desert heat during these months is a real safety
        factor, not just a comfort issue. Daytime highs regularly climb well past what&apos;s
        comfortable for extended outdoor activity. If you&apos;re riding in this window: start
        early, bring significantly more water than you think you need, take the heat seriously,
        and consider a shorter ride window rather than a full day.
      </p>

      <h2>Packing list by season</h2>
      <h3>Peak season (Oct-Apr)</h3>
      <ul>
        <li>Layered clothing — warm morning layer you can shed by midday</li>
        <li>Closed-toe boots, gloves for wind/sand protection</li>
        <li>Sunscreen and sunglasses (desert sun is strong even when it&apos;s cool)</li>
        <li>A buff or bandana for blowing sand</li>
      </ul>
      <h3>Summer (May-Sep)</h3>
      <ul>
        <li>More water than feels necessary — hydration is the top priority</li>
        <li>Lightweight, breathable long sleeves for sun protection over bare skin</li>
        <li>Electrolyte packets or drink mix</li>
        <li>A plan to start early and avoid peak afternoon heat</li>
      </ul>

      <h2>Bottom line</h2>
      <p>
        If your schedule is flexible, October through April is the easiest window for a
        comfortable first visit. If summer is your only option, it&apos;s still doable — just
        plan around the heat rather than around it happening to you.
      </p>
    </BlogPostLayout>
  );
}

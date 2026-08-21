export const BUSINESS = {
  name: "ThrillOffroad",
  tagline: "Ride The Dunes. Feel The Thrill.",
  description:
    "ThrillOffroad is a UTV and SXS rental and guided dune-tour outfitter serving the Glamis Sand Dunes Recreation Area — self-guided rentals and guided tours for first-timers, families, and experienced riders.",
  email: "hello@thrilloffroad.com",
  location: "Glamis Sand Dunes Recreation Area, Imperial County, CA",
  url: "https://thrilloffroad.com",
};

export const NAV_ITEMS = [
  { label: "Rentals", href: "/rentals" },
  { label: "Tours", href: "/tours" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = [
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Rentals & Tours",
    items: [
      { label: "2-Seat RZR", href: "/rentals/2-seat-rzr" },
      { label: "4-Seat RZR", href: "/rentals/4-seat-rzr" },
      { label: "Can-Am Maverick X3", href: "/rentals/can-am-maverick-x3" },
      { label: "Family 6-Seat UTV", href: "/rentals/family-6-seat-utv" },
      { label: "Guided Tours", href: "/tours" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export interface RentalVehicle {
  slug: string;
  name: string;
  shortName: string;
  seats: string;
  bestFor: string;
  rateRange: string;
  summary: string;
  heroSubtitle: string;
  included: string[];
  whoItsFor: string[];
  specs: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
  image: string;
}

export const RENTALS: RentalVehicle[] = [
  {
    slug: "2-seat-rzr",
    name: "2-Seat RZR",
    shortName: "2-Seat RZR",
    seats: "2 riders",
    bestFor: "First-timers & couples",
    rateRange: "$225-$325 / half or full day",
    summary: "A nimble, easy-to-handle side-by-side — the go-to choice for first-time dune riders and couples who want an exciting but manageable ride.",
    heroSubtitle: "The most popular rental in the fleet. Easy to handle, quick to learn, and still plenty capable on the dunes for riders who are new to off-roading.",
    included: [
      "Full safety briefing before you ride",
      "DOT-approved helmets and goggles for both riders",
      "Built-in GPS navigation for the dune system",
      "Full tank of fuel at pickup",
      "Roadside/on-dune support during your rental window",
    ],
    whoItsFor: [
      "First-time UTV riders who want an easier learning curve",
      "Couples or pairs looking for a shared riding experience",
      "Riders who want dune access without committing to a full-day tour",
    ],
    specs: [
      { label: "Seats", value: "2" },
      { label: "Engine", value: "Turbo, ~100-120 HP class" },
      { label: "Minimum driver age", value: "25 (valid driver's license required)" },
      { label: "Passenger age", value: "Any age with adult supervision" },
    ],
    faqs: [
      { q: "Do I need off-road experience to rent this?", a: "No — this is the model we recommend most for first-timers. You'll get a full safety and handling briefing before heading out." },
      { q: "Is fuel included?", a: "Yes, you receive a full tank at pickup. You're responsible for returning it full or covering a refuel fee." },
      { q: "Can I extend my rental on the day?", a: "If availability allows, yes — ask the team on-site and we'll do what we can." },
    ],
    image: "/images/rental-2-seat-rzr.jpg",
  },
  {
    slug: "4-seat-rzr",
    name: "4-Seat RZR",
    shortName: "4-Seat RZR",
    seats: "4 riders",
    bestFor: "Groups of friends",
    rateRange: "$325-$450 / half or full day",
    summary: "More seats, more power, still easy to handle — built for groups of friends who want to ride the dunes together.",
    heroSubtitle: "Everything riders love about the 2-Seat, with room for the whole crew. A favorite for groups of friends spending the day at Glamis together.",
    included: [
      "Full safety briefing before you ride",
      "DOT-approved helmets and goggles for all 4 riders",
      "Built-in GPS navigation for the dune system",
      "Full tank of fuel at pickup",
      "Roadside/on-dune support during your rental window",
    ],
    whoItsFor: [
      "Groups of 3-4 friends riding together",
      "Riders who want more seating without stepping up to a high-performance model",
      "Families with older teens who meet the minimum passenger requirements",
    ],
    specs: [
      { label: "Seats", value: "4" },
      { label: "Engine", value: "Turbo, ~120-140 HP class" },
      { label: "Minimum driver age", value: "25 (valid driver's license required)" },
      { label: "Passenger age", value: "Any age with adult supervision" },
    ],
    faqs: [
      { q: "Can one person drive for the whole group?", a: "Yes — only the driver needs to meet the age and license requirement; passengers just need to follow the safety briefing." },
      { q: "Is this harder to handle than the 2-seat?", a: "It's a bit larger, but still built to be approachable for riders without extensive off-road experience." },
      { q: "Can we rent two of these for a bigger group?", a: "Yes, multi-vehicle bookings are common — just note the group size when you book." },
    ],
    image: "/images/rental-4-seat-rzr.jpg",
  },
  {
    slug: "can-am-maverick-x3",
    name: "Can-Am Maverick X3",
    shortName: "Maverick X3",
    seats: "2 riders",
    bestFor: "Experienced riders",
    rateRange: "$375-$525 / half or full day",
    summary: "High-performance suspension and serious power for experienced riders who want to push further into the dune system.",
    heroSubtitle: "The top of the fleet. Long-travel suspension and a bigger turbo mean this rig is built for riders who already know their way around a side-by-side and want more.",
    included: [
      "Mandatory experience check-in before rental",
      "DOT-approved helmets and goggles",
      "Built-in GPS navigation for the dune system",
      "Full tank of fuel at pickup",
      "Priority on-dune support during your rental window",
    ],
    whoItsFor: [
      "Riders with prior UTV/SXS or off-road vehicle experience",
      "Anyone chasing bigger dunes and more technical terrain",
      "Returning ThrillOffroad customers stepping up from the RZR line",
    ],
    specs: [
      { label: "Seats", value: "2" },
      { label: "Engine", value: "Turbo RR, 195+ HP class" },
      { label: "Minimum driver age", value: "25, prior off-road experience required" },
      { label: "Passenger age", value: "16+ recommended given performance level" },
    ],
    faqs: [
      { q: "What counts as 'experienced' for this rental?", a: "Prior seat time in a UTV, SXS, or similar off-road vehicle. We do a short check-in conversation at pickup — if you're unsure, ask when you book." },
      { q: "Is this too much for a first ride at Glamis?", a: "We generally steer first-timers toward the 2-Seat or 4-Seat RZR and save the X3 for riders who already have off-road seat time." },
      { q: "Can I rent this for a tour instead of self-guided riding?", a: "Yes — the X3 is available for our Private Group Tour package for experienced groups." },
    ],
    image: "/images/rental-maverick-x3.jpg",
  },
  {
    slug: "family-6-seat-utv",
    name: "Family 6-Seat UTV",
    shortName: "6-Seat UTV",
    seats: "6 riders",
    bestFor: "Families & larger groups",
    rateRange: "$425-$575 / half or full day",
    summary: "Room for the whole family — a stable, comfortable ride built for larger groups exploring the dunes together.",
    heroSubtitle: "Built for families and larger groups who want to experience Glamis together in one vehicle instead of splitting up across multiple rentals.",
    included: [
      "Full safety briefing before you ride",
      "DOT-approved helmets and goggles for all riders",
      "Built-in GPS navigation for the dune system",
      "Full tank of fuel at pickup",
      "Roadside/on-dune support during your rental window",
    ],
    whoItsFor: [
      "Families with kids riding along as passengers",
      "Larger groups who'd rather stay together than split across vehicles",
      "First-time visitors who want a guided-feeling but self-driven experience",
    ],
    specs: [
      { label: "Seats", value: "6" },
      { label: "Engine", value: "Turbo, ~120-140 HP class" },
      { label: "Minimum driver age", value: "25 (valid driver's license required)" },
      { label: "Passenger age", value: "Any age with adult supervision; child seating restrictions apply per manufacturer guidance" },
    ],
    faqs: [
      { q: "Is this safe for young kids as passengers?", a: "Yes, when properly secured per manufacturer guidance and seated appropriately — our team will walk you through it at pickup." },
      { q: "Is this harder to drive than the smaller models?", a: "It's larger, but built to be stable and manageable — most renters find it comfortable after the safety briefing." },
      { q: "Can we combine this with a guided tour?", a: "Yes — the 6-Seat is available for our Full-Day Adventure and Private Group Tour packages." },
    ],
    image: "/images/rental-6-seat-utv.jpg",
  },
];

export interface TourPackage {
  slug: string;
  name: string;
  duration: string;
  priceRange: string;
  summary: string;
  highlights: string[];
}

export const TOURS: TourPackage[] = [
  {
    slug: "sunset-dune-tour",
    name: "Sunset Dune Tour",
    duration: "2 hours",
    priceRange: "From $149 / rider",
    summary: "A guided golden-hour ride through the dune system, timed for the best light and cooler temperatures.",
    highlights: ["Guided by an experienced local rider", "Timed for golden-hour lighting", "Great for couples or small groups", "All safety gear included"],
  },
  {
    slug: "full-day-adventure-tour",
    name: "Full-Day Adventure Tour",
    duration: "6-8 hours",
    priceRange: "From $349 / rider",
    summary: "A full day exploring the Glamis dune system with an experienced guide, including a midday break and photo stops.",
    highlights: ["Covers a wider range of the dune system", "Midday break with water/snacks provided", "Photo stops at scenic overlooks", "Best for visitors staying multiple days"],
  },
  {
    slug: "private-group-tour",
    name: "Private Group Tour",
    duration: "Custom",
    priceRange: "Custom quote",
    summary: "A private guided experience for corporate outings, bachelor/bachelorette groups, or families wanting their own dedicated guide.",
    highlights: ["Dedicated guide for your group only", "Flexible timing and duration", "Multi-vehicle group coordination", "Custom route based on group skill level"],
  },
];

export const STATS = [
  { value: "6,000+", label: "Rides booked" },
  { value: "14", label: "Vehicles in the fleet" },
  { value: "8", label: "Years running at Glamis" },
];

export const TESTIMONIALS = [
  {
    quote:
      "First time on the dunes and the safety briefing made all the difference — felt confident within 10 minutes. The 2-seat RZR was the perfect call for beginners.",
    name: "First-time rider",
    handle: "2-Seat RZR rental",
  },
  {
    quote:
      "Booked the Sunset Dune Tour for our anniversary and it was the best golden-hour ride we've done. Our guide knew exactly where to go for the views.",
    name: "Couple, anniversary trip",
    handle: "Sunset Dune Tour",
  },
  {
    quote:
      "Rented the 6-seat for our whole family including my teenagers — everyone had a blast and the GPS nav made it easy to find our way back.",
    name: "Family of 6",
    handle: "Family 6-Seat UTV rental",
  },
];

export const HOW_IT_WORKS = [
  { step: "1", title: "Choose Your Ride", body: "Pick a rental vehicle or guided tour package that fits your group size and experience level." },
  { step: "2", title: "Book Online", body: "Reserve your date and time through our booking form — we'll confirm within one business day." },
  { step: "3", title: "Safety Briefing", body: "Every rental and tour starts with a hands-on safety briefing and gear fitting before you hit the dunes." },
  { step: "4", title: "Hit The Dunes", body: "Ride self-guided with built-in GPS, or follow your guide on a tour — either way, the dunes are yours for the day." },
];

export const FAQS = [
  { q: "Do I need a BLM Adventure Pass to ride at Glamis?", a: "Yes — the Imperial Sand Dunes Recreation Area requires a valid BLM Adventure Pass for vehicle access during peak season. We'll walk you through current pass requirements when you book." },
  { q: "What's the minimum age to drive a rental?", a: "Drivers must be at least 25 with a valid driver's license. Passenger age requirements vary by vehicle — see each rental page for details." },
  { q: "Is safety gear included?", a: "Yes — DOT-approved helmets and goggles are included with every rental and tour, along with a hands-on safety briefing before you ride." },
  { q: "What if I've never ridden a UTV before?", a: "Most of our renters are first-timers. We recommend the 2-Seat or 4-Seat RZR for new riders, and every rental starts with a full briefing." },
  { q: "What's the best time of year to ride the Glamis dunes?", a: "The main season runs roughly October through April when temperatures are manageable. Summer riding is possible but extreme desert heat requires extra precautions." },
  { q: "How do I book?", a: "Use the booking form on this site with your preferred date, group size, and vehicle or tour choice — we'll confirm availability within one business day." },
];

export const BLOG_POSTS_META = [
  {
    slug: "first-time-riders-guide-to-glamis-sand-dunes",
    title: "First-Time Rider's Guide to the Glamis Sand Dunes",
    description:
      "Everything a first-time visitor needs to know before renting a UTV at Glamis — permits, gear, riding basics, and what to expect.",
    date: "2026-07-10",
    keyword: "first time glamis sand dunes utv rental",
  },
  {
    slug: "utv-vs-rzr-vs-maverick-x3-which-rental-is-right-for-you",
    title: "UTV vs. RZR vs. Maverick X3: Which Rental Is Right for You?",
    description:
      "A breakdown of the ThrillOffroad rental fleet to help you pick the right vehicle for your experience level and group size.",
    date: "2026-07-24",
    keyword: "which utv rental should i choose",
  },
  {
    slug: "best-time-of-year-to-ride-glamis-dunes",
    title: "The Best Time of Year to Ride the Glamis Dunes (And What to Pack)",
    description:
      "A season-by-season breakdown of riding conditions at Glamis, plus a packing list for a comfortable day on the dunes.",
    date: "2026-08-07",
    keyword: "best time to visit glamis sand dunes",
  },
];

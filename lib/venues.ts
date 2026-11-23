// Taqreebgah currently operates only in Karachi, so every listing here is a Karachi listing.

export type Venue = {
  name: string;
  /** Karachi locality, e.g. "DHA Phase 8" or "Clifton" */
  area: string;
  capacity: { min: number; max: number };
  /** Indicative price in PKR, used for budget filtering. Not a final quote. */
  price: number;
  priceDisplay: string;
  image: string;
  /** Singular venue category, matching one of `categories[].type` where applicable */
  type: string;
  vibe: string[];
  eventTypes: string[];
  amenities: string[];
  description: string;
  rating: number;
  reviewCount: number;
};

export const venues: Venue[] = [
  {
    name: "Sahil Pavilion",
    area: "DHA Phase 8",
    capacity: { min: 300, max: 1500 },
    price: 1100000,
    priceDisplay: "PKR 1,100,000",
    image: "/venue-4.jpg",
    type: "Marquee",
    vibe: ["Grand", "Modern", "Spacious"],
    eventTypes: ["Wedding / Shaadi", "Mehndi / Mayun", "Engagement"],
    amenities: ["AC Marquee", "Full Catering", "Valet Parking", "Generator"],
    description:
      "Air-conditioned marquee in DHA Phase 8 for 300–1,500 guests, with full catering, valet parking and generator backup.",
    rating: 4.6,
    reviewCount: 112,
  },
  {
    name: "Royal Marquee Hall",
    area: "Clifton",
    capacity: { min: 400, max: 2000 },
    price: 1250000,
    priceDisplay: "PKR 1,250,000",
    image: "/hero/courtyard-lanterns.jpg",
    type: "Marquee",
    vibe: ["Grand", "Luxurious", "Spacious"],
    eventTypes: ["Wedding / Shaadi", "Mehndi / Mayun", "Engagement", "Birthday Party"],
    amenities: ["AC Marquee", "Full Service", "Valet", "Security"],
    description:
      "Air-conditioned marquee in Clifton for 400–2,000 guests, offering full-service arrangements, valet parking and security.",
    rating: 4.5,
    reviewCount: 203,
  },
  {
    name: "Emerald Banquet Palace",
    area: "Gulshan-e-Iqbal",
    capacity: { min: 250, max: 1000 },
    price: 920000,
    priceDisplay: "PKR 920,000",
    image: "/venue-1.jpg",
    type: "Banquet Hall",
    vibe: ["Grand", "Luxurious", "Modern"],
    eventTypes: ["Wedding / Shaadi", "Mehndi / Mayun", "Engagement"],
    amenities: ["Full AC", "In-house Catering", "Parking", "Bridal Room"],
    description:
      "Fully air-conditioned banquet hall in Gulshan-e-Iqbal for 250–1,000 guests, with in-house catering, parking and a bridal room.",
    rating: 4.6,
    reviewCount: 145,
  },
  {
    name: "Serenity Rooftop",
    area: "DHA",
    capacity: { min: 100, max: 450 },
    price: 620000,
    priceDisplay: "PKR 620,000",
    image: "/hero/courtyard-blossoms.jpg",
    type: "Rooftop Venue",
    vibe: ["Modern", "Intimate", "Elegant"],
    eventTypes: ["Engagement", "Birthday Party", "Mehndi / Mayun"],
    amenities: ["Rooftop Setting", "Sea View", "Catering", "DJ Setup"],
    description:
      "Rooftop venue in DHA with sea views for 100–450 guests, offering catering and a DJ setup.",
    rating: 4.9,
    reviewCount: 134,
  },
  {
    name: "Azure Garden Estate",
    area: "Malir",
    capacity: { min: 150, max: 650 },
    price: 670000,
    priceDisplay: "PKR 670,000",
    image: "/venue-3.jpg",
    type: "Garden Estate",
    vibe: ["Natural", "Spacious", "Elegant"],
    eventTypes: ["Wedding / Shaadi", "Mehndi / Mayun", "Birthday Party"],
    amenities: ["Lawn", "Indoor Hall", "Parking", "Generator"],
    description:
      "Garden venue in Malir for 150–650 guests, with an open lawn and an indoor hall, parking and generator backup.",
    rating: 4.6,
    reviewCount: 141,
  },
];

export type EventPlanner = {
  name: string;
  services: string[];
  /** Occasions the planner covers, using `occasionTypes` labels */
  specialties: string[];
  image: string;
  description: string;
  rating: number;
  reviewCount: number;
  /** Indicative starting price in PKR, used for budget filtering. Not a final quote. */
  price: number;
  priceDisplay: string;
  portfolioCount: number;
};

export const eventPlanners: EventPlanner[] = [
  {
    name: "Elegance Occasions",
    services: ["Event Design", "Theme Decor", "Stage Setup", "Catering Coordination"],
    specialties: ["Wedding / Shaadi", "Birthday Party", "Engagement"],
    image: "/venue-2.jpg",
    description:
      "Event planning team offering event design, theme décor, stage setup and catering coordination for weddings, engagements and birthdays.",
    rating: 4.8,
    reviewCount: 128,
    price: 200000,
    priceDisplay: "PKR 200,000",
    portfolioCount: 180,
  },
  {
    name: "Perfect Moments",
    services: ["Event Styling", "Decor Rental", "Setup & Breakdown", "Theme Development"],
    specialties: ["Birthday Party", "Engagement", "Mehndi / Mayun"],
    image: "/occasion-birthday.jpg",
    description:
      "Event styling service offering décor rental, theme development, and setup and breakdown for birthdays, engagements and mehndis.",
    rating: 4.6,
    reviewCount: 98,
    price: 150000,
    priceDisplay: "PKR 150,000",
    portfolioCount: 140,
  },
  {
    name: "Elite Wedding Planners",
    services: ["Luxury Wedding Planning", "Destination Weddings", "Designer Decor", "Complete Management"],
    specialties: ["Wedding / Shaadi", "Engagement"],
    image: "/occasion-wedding.jpg",
    description:
      "Wedding planning service covering luxury and destination weddings, designer décor and complete event management.",
    rating: 4.9,
    reviewCount: 203,
    price: 500000,
    priceDisplay: "PKR 500,000",
    portfolioCount: 180,
  },
];

/** The five customer-facing categories. `type` links a category to `Venue.type`; planners have none. */
export type Category = {
  label: string;
  type: string | null;
  tagline: string;
  description: string;
  /** Occasions this kind of venue or service is commonly chosen for */
  popularFor: string[];
  image: string;
};

export const categories: Category[] = [
  {
    label: "Banquet Halls",
    type: "Banquet Hall",
    tagline: "Celebrate in the perfect setting.",
    description:
      "Discover banquet halls across Karachi for weddings, engagements, birthdays, family gatherings, and corporate celebrations. Find a space that suits your guest count, preferred area, and budget.",
    popularFor: ["Weddings", "Engagements", "Birthdays", "Family gatherings", "Corporate celebrations"],
    image: "/venue-1.jpg",
  },
  {
    label: "Marquees",
    type: "Marquee",
    tagline: "For celebrations on a grand scale.",
    description:
      "Explore marquees for grand weddings, receptions, large gatherings, and special celebrations. Compare venues based on location, capacity, available facilities, and pricing information.",
    popularFor: ["Grand weddings", "Receptions", "Large gatherings", "Special celebrations"],
    image: "/venue-4.jpg",
  },
  {
    label: "Restaurants",
    type: "Restaurant",
    tagline: "Make every gathering memorable.",
    description:
      "Find restaurants in Karachi for birthdays, anniversaries, family dinners, private parties, and corporate gatherings. Explore suitable dining venues according to your occasion, group size, and budget.",
    popularFor: ["Birthdays", "Anniversaries", "Family dinners", "Private parties", "Corporate gatherings"],
    image: "/occasion-walima.jpg",
  },
  {
    label: "Farmhouses",
    type: "Farmhouse",
    tagline: "Celebrate under the open sky.",
    description:
      "Explore farmhouses for weddings, mehndi functions, birthday celebrations, private gatherings, and outdoor events. Discover spacious venues that match your event requirements.",
    popularFor: ["Weddings", "Mehndi functions", "Birthdays", "Private gatherings", "Outdoor events"],
    image: "/venue-3.jpg",
  },
  {
    label: "Event Planners",
    type: null,
    tagline: "Bring your celebration to life.",
    description:
      "Discover event planners across Karachi who can help organize weddings, mehndis, birthdays, corporate events, and other special occasions. Explore professionals according to their services, portfolios, and budget suitability.",
    popularFor: ["Weddings", "Mehndis", "Birthdays", "Corporate events", "Special occasions"],
    image: "/venue-2.jpg",
  },
];

export const EVENT_PLANNERS = "Event Planners";

export function findCategory(label: string | undefined) {
  return categories.find((c) => c.label === label);
}

/** "Your Occasion" filter options */
export const occasionTypes = [
  "Wedding / Shaadi",
  "Nikah",
  "Mehndi / Mayun",
  "Baraat",
  "Walima / Reception",
  "Engagement",
  "Birthday Party",
  "Anniversary",
  "Corporate Event",
  "Family Gathering",
  "Other Celebrations",
];

/**
 * Details for every "Your Occasion" option: a photo, a short summary (home page cards),
 * a fuller description (Explore page), and the categories people commonly consider for it.
 */
export type OccasionInfo = { image: string; summary: string; description: string; popularCategories: string[] };

export const occasionInfo: Record<string, OccasionInfo> = {
  "Wedding / Shaadi": {
    image: "/occasion-wedding.jpg",
    summary: "From the baraat to the rukhsati, find halls, marquees and planners sized for your shaadi.",
    description:
      "The shaadi is often the biggest gathering of the year, so guest capacity, parking and catering matter most. Compare halls, marquees and farmhouses by guest count and budget, or find a planner to manage décor and coordination.",
    popularCategories: ["Banquet Halls", "Marquees", "Farmhouses", "Event Planners"],
  },
  Nikah: {
    image: "/hero/lanterns-crimson.jpg",
    summary: "Graceful settings for the nikah, on its own or as part of a larger celebration.",
    description:
      "A nikah can be an intimate family ceremony or part of a larger wedding day. Look for a calm, well-arranged space with comfortable seating for elders and room for the ceremony itself.",
    popularCategories: ["Banquet Halls", "Restaurants", "Farmhouses"],
  },
  "Mehndi / Mayun": {
    image: "/occasion-mehndi.jpg",
    summary: "Colourful, music-filled evenings in lawns, farmhouses and decorated halls.",
    description:
      "Mehndi and mayun evenings are full of colour, music and dancing. Open lawns, farmhouses and decorated halls with space for a stage and a dance floor work especially well.",
    popularCategories: ["Farmhouses", "Marquees", "Banquet Halls", "Event Planners"],
  },
  Baraat: {
    image: "/occasion-barat.jpg",
    summary: "Grand spaces for the baraat's arrival and the main wedding celebration.",
    description:
      "For many families the baraat is the main wedding event, marked by the groom's family's arrival. Venues with generous capacity, ample parking and a grand entrance are usually preferred.",
    popularCategories: ["Banquet Halls", "Marquees", "Event Planners"],
  },
  "Walima / Reception": {
    image: "/hero-courtyard.jpg",
    summary: "Elegant spaces where both families come together to host their guests.",
    description:
      "The walima is usually a formal dinner reception hosted by the groom's family. When comparing venues, give extra weight to dining arrangements, seating and catering.",
    popularCategories: ["Banquet Halls", "Marquees", "Restaurants"],
  },
  Engagement: {
    image: "/occasion-engagement.jpg",
    summary: "Celebrate the mangni in a setting that suits your gathering, intimate or grand.",
    description:
      "Engagements (mangni) are often smaller than the wedding itself, which gives you more flexibility. Choose an intimate hall, restaurant or rooftop, or a larger space for a bigger celebration.",
    popularCategories: ["Banquet Halls", "Restaurants", "Event Planners"],
  },
  "Birthday Party": {
    image: "/occasion-birthday.jpg",
    summary: "From children's parties to milestone birthdays, for every age and group size.",
    description:
      "The right setting depends on the age group and guest count. Restaurants suit smaller gatherings, while halls and farmhouses work well for larger parties, and planners can take care of themes and décor.",
    popularCategories: ["Restaurants", "Banquet Halls", "Farmhouses", "Event Planners"],
  },
  Anniversary: {
    image: "/occasion-walima.jpg",
    summary: "From a quiet dinner to a celebration with the whole family.",
    description:
      "Anniversaries range from a quiet family dinner to a larger celebration with friends and relatives. Restaurants and smaller halls are popular choices.",
    popularCategories: ["Restaurants", "Banquet Halls"],
  },
  "Corporate Event": {
    image: "/venue-1.jpg",
    summary: "Venues for company dinners, launches, conferences and team celebrations.",
    description:
      "Company dinners, product launches, conferences and team celebrations need dependable facilities: seating, sound, parking and catering. Compare venues by capacity and available amenities.",
    popularCategories: ["Banquet Halls", "Restaurants", "Event Planners"],
  },
  "Family Gathering": {
    image: "/hero/courtyard-blossoms.jpg",
    summary: "Aqiqas, anniversaries, reunions and get-togethers with the whole family.",
    description:
      "Aqiqas, reunions, Eid get-togethers and other family occasions. Look for comfortable seating, room for children and catering that suits every age.",
    popularCategories: ["Restaurants", "Farmhouses", "Banquet Halls"],
  },
  "Other Celebrations": {
    image: "/hero/courtyard-lanterns.jpg",
    summary: "Planning something different? Explore every kind of venue and planner.",
    description:
      "Planning something different? Explore venues and event planners across Karachi and compare them by capacity, area and budget.",
    popularCategories: ["Banquet Halls", "Marquees", "Restaurants", "Farmhouses", "Event Planners"],
  },
};

/** Homepage "Browse by Occasion" entries, each mapped to an `occasionTypes` filter value */
export const featuredOccasions: { label: string; occasion: string; image: string; description: string }[] = [
  { label: "Weddings", occasion: "Wedding / Shaadi" },
  { label: "Mehndi & Mayun", occasion: "Mehndi / Mayun" },
  { label: "Nikah Ceremonies", occasion: "Nikah" },
  { label: "Walima & Receptions", occasion: "Walima / Reception" },
  { label: "Birthdays", occasion: "Birthday Party" },
  { label: "Engagements", occasion: "Engagement" },
  { label: "Corporate Events", occasion: "Corporate Event" },
  { label: "Family Celebrations", occasion: "Family Gathering" },
].map((o) => ({ ...o, image: occasionInfo[o.occasion].image, description: occasionInfo[o.occasion].summary }));

/** Karachi localities used for area-wise discovery */
export const karachiAreas = [
  "DHA",
  "Clifton",
  "Gulshan-e-Iqbal",
  "Gulistan-e-Johar",
  "North Nazimabad",
  "Nazimabad",
  "North Karachi",
  "Federal B Area",
  "PECHS",
  "Shahrah-e-Faisal",
  "Malir",
  "Scheme 33",
  "Korangi",
];

export const OTHER_AREAS = "Other Karachi Areas";

/** Maps a listing's locality (e.g. "DHA Phase 8") to its broader Karachi area (e.g. "DHA"). */
export function areaOf(venue: Venue) {
  return karachiAreas.find((a) => venue.area === a || venue.area.startsWith(`${a} `)) ?? OTHER_AREAS;
}

/** Only the areas that actually have listings, in the order above, with venue counts. */
export const availableAreas: { area: string; count: number }[] = [...karachiAreas, OTHER_AREAS]
  .map((area) => ({ area, count: venues.filter((v) => areaOf(v) === area).length }))
  .filter((a) => a.count > 0);

/** Short neighbourhood descriptions for area details. Areas without one get a generic line. */
const areaDescriptions: Record<string, string> = {
  DHA: "Defence (DHA) is a large residential area in southern Karachi, close to Clifton and the coast, with marquees, rooftop venues and other event spaces.",
  Clifton: "Clifton is a coastal neighbourhood in southern Karachi, next to DHA and home to Sea View, with venues suited to large and formal celebrations.",
  "Gulshan-e-Iqbal": "Gulshan-e-Iqbal is a central residential area of Karachi along University Road, convenient for guests travelling from across the city.",
  Malir: "Malir is in eastern Karachi, near Jinnah International Airport, where you'll find more room for gardens and open-air venues.",
};

/** Photo and description for an area; the photo comes from a venue listed there. */
export function areaInfo(area: string) {
  const listed = venues.filter((v) => areaOf(v) === area);
  return {
    image: listed[0]?.image ?? "/hero/courtyard-lanterns.jpg",
    description:
      areaDescriptions[area] ?? `Explore event venues and planners in ${area}, Karachi, and compare options closer to your preferred location.`,
  };
}

/** Ambiance options, limited to those that appear on current listings */
export const vibes = [...new Set(venues.flatMap((v) => v.vibe))];

/** URL-safe slug for a venue's details page, e.g. "Sahil Pavilion" -> "sahil-pavilion" */
export function venueSlug(venue: Venue) {
  return venue.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function findVenue(slug: string) {
  return venues.find((v) => venueSlug(v) === slug);
}

/** Formats a PKR amount, e.g. 1100000 -> "PKR 1,100,000" */
export function formatPKR(amount: number) {
  return `PKR ${amount.toLocaleString("en-US")}`;
}

/** Builds an /explore link with optional category, occasion and area preselected. */
export function exploreHref(params: { category?: string; occasion?: string; area?: string } = {}) {
  const qs = new URLSearchParams(Object.entries(params).filter(([, v]) => v) as [string, string][]).toString();
  return qs ? `/explore?${qs}` : "/explore";
}

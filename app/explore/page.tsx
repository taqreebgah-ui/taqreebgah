import { Suspense } from "react";
import { ExploreClient } from "./ExploreClient";
import { categories, occasionTypes, availableAreas } from "@/lib/venues";

export const metadata = {
  title: "Explore Venues & Event Planners in Karachi — Taqreebgah",
  description:
    "Browse banquet halls, marquees, restaurants, farmhouses and event planners across Karachi. Filter by area, occasion, guest count and budget.",
};

type Param = string | string[] | undefined;
type SearchParams = Promise<{ q?: Param; category?: Param; occasion?: Param; area?: Param }>;

const first = (v: Param) => (Array.isArray(v) ? v[0] : v)?.trim() ?? "";
/** Accept a URL value only if it's one of the known options. */
const oneOf = (v: Param, options: string[]) => {
  const value = first(v);
  return options.includes(value) ? value : undefined;
};

// Reading searchParams is request-time data, so it lives inside a Suspense boundary.
// The prerendered shell shows the unfiltered listing and streams in the filtered results.
async function ExploreWithParams({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const query = first(params.q);
  const category = oneOf(params.category, categories.map((c) => c.label));
  const occasion = oneOf(params.occasion, occasionTypes);
  const area = oneOf(params.area, availableAreas.map((a) => a.area));
  return (
    <ExploreClient
      // Remount when a link preselects different filters, so the new values apply.
      key={`${category}|${occasion}|${area}`}
      query={query}
      initialCategory={category}
      initialOccasion={occasion}
      initialArea={area}
    />
  );
}

export default function ExplorePage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <Suspense fallback={<ExploreClient />}>
      <ExploreWithParams searchParams={searchParams} />
    </Suspense>
  );
}

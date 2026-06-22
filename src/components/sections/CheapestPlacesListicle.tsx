import countyPaths from "@/data/florida-county-paths.json";

const FLORIDA_TYPICAL_VALUE = 377_578;

interface CountyPath {
  name: string;
  d: string;
  cx: number;
  cy: number;
}

const counties = countyPaths as CountyPath[];
const countyByName = new Map(counties.map((county) => [county.name, county]));
const valueCountyNames = new Set([
  "Calhoun",
  "Jackson",
  "Taylor",
  "Gadsden",
  "Putnam",
  "Highlands",
  "DeSoto",
  "Citrus",
  "Hendry",
  "Duval",
]);

const referenceCities = {
  Pensacola: { label: "Pensacola", x: 40.2, y: 134.9, dx: 12, dy: -10 },
  "Panama City": {
    label: "Panama City",
    x: 201.8,
    y: 182.2,
    dx: -10,
    dy: 18,
  },
  Tallahassee: {
    label: "Tallahassee",
    x: 328.3,
    y: 162.5,
    dx: 12,
    dy: -10,
  },
  Jacksonville: {
    label: "Jacksonville",
    x: 570.8,
    y: 175.1,
    dx: 12,
    dy: -8,
  },
  Gainesville: {
    label: "Gainesville",
    x: 507.1,
    y: 247.1,
    dx: 12,
    dy: -10,
  },
  Orlando: { label: "Orlando", x: 607.3, y: 371.8, dx: 12, dy: -10 },
  Tampa: { label: "Tampa", x: 513.6, y: 436.2, dx: -12, dy: 18 },
  "Fort Myers": {
    label: "Fort Myers",
    x: 561.1,
    y: 581.9,
    dx: -12,
    dy: 18,
  },
  "Daytona Beach": {
    label: "Daytona Beach",
    x: 619.3,
    y: 312.6,
    dx: 12,
    dy: -10,
  },
  "West Palm Beach": {
    label: "West Palm Beach",
    x: 693.4,
    y: 571.9,
    dx: 12,
    dy: -10,
  },
  Miami: { label: "Miami", x: 686.5, y: 683.8, dx: -12, dy: -10 },
} as const;

type ReferenceCityKey = keyof typeof referenceCities;

interface LocatorMapData {
  countyName: string;
  placeLabel: string;
  areaLabel: string;
  referenceCityKeys: ReferenceCityKey[];
  marker?: {
    x: number;
    y: number;
  };
  ariaLabel: string;
}

export interface CheapestFloridaPlace {
  rank: number;
  slug: string;
  county: string;
  place: string;
  region: string;
  map: LocatorMapData;
  typicalValue: number;
  yearOverYear: number;
  anchor: string;
  buyerFit: string;
  vibe: string;
  whyItWorks: string;
  watchOut: string;
  nearby: string;
  highlights: string[];
}

export const cheapestFloridaPlaces: CheapestFloridaPlace[] = [
  {
    rank: 1,
    slug: "calhoun-county-blountstown",
    county: "Calhoun County",
    place: "Blountstown",
    region: "Florida Panhandle",
    map: {
      countyName: "Calhoun",
      placeLabel: "Blountstown",
      areaLabel: "Northwest Florida",
      referenceCityKeys: ["Panama City", "Tallahassee", "Pensacola"],
      ariaLabel:
        "Map showing Blountstown in Calhoun County in northwest Florida, near Panama City and Tallahassee.",
    },
    typicalValue: 180_453,
    yearOverYear: -0.3,
    anchor: "Blountstown",
    buyerFit:
      "Buyers who want the lowest current entry point in Florida and can live with a rural, small-town pace.",
    vibe: "River roads, quiet blocks, local services, and quick access to the Apalachicola River.",
    whyItWorks:
      "Calhoun is the lowest-priced Florida county in the latest Zillow county data, and values are essentially flat year over year.",
    watchOut:
      "Inventory can be thin, and many older homes need roof, septic, insurance, or repair diligence before closing.",
    nearby: "About 1 hour from Panama City and Tallahassee by car.",
    highlights: ["Lowest home values", "River access", "Small-town pricing"],
  },
  {
    rank: 2,
    slug: "jackson-county-marianna",
    county: "Jackson County",
    place: "Marianna",
    region: "Inland Panhandle",
    map: {
      countyName: "Jackson",
      placeLabel: "Marianna",
      areaLabel: "I-10 Panhandle",
      referenceCityKeys: ["Panama City", "Tallahassee", "Pensacola"],
      ariaLabel:
        "Map showing Marianna in Jackson County in the Florida Panhandle, near Panama City and Tallahassee.",
    },
    typicalValue: 184_210,
    yearOverYear: 0.9,
    anchor: "Marianna",
    buyerFit:
      "First-time buyers who want very low pricing without feeling completely disconnected from shopping, schools, and I-10.",
    vibe: "Historic downtown, caverns, farms, and a more complete small-city center than many rural towns.",
    whyItWorks:
      "Jackson stays below $185K while offering more everyday services than many counties at this price tier.",
    watchOut:
      "The best-priced homes may be farther from Marianna or need updates, so inspections and insurance quotes matter.",
    nearby: "Roughly 1 hour from Tallahassee and 1 hour from Panama City.",
    highlights: ["More amenities", "I-10 access", "State park draw"],
  },
  {
    rank: 3,
    slug: "taylor-county-perry-steinhatchee",
    county: "Taylor County",
    place: "Perry and Steinhatchee",
    region: "Big Bend / Gulf Coast",
    map: {
      countyName: "Taylor",
      placeLabel: "Perry / Steinhatchee",
      areaLabel: "Big Bend coast",
      referenceCityKeys: ["Tallahassee", "Gainesville", "Tampa"],
      ariaLabel:
        "Map showing Perry and Steinhatchee in Taylor County on Florida's Big Bend coast, near Tallahassee and Gainesville.",
    },
    typicalValue: 197_489,
    yearOverYear: 3.1,
    anchor: "Perry",
    buyerFit:
      "Buyers who want the rare mix of low pricing, fishing-town character, and access to Florida's quieter Gulf side.",
    vibe: "Big Bend woods, scalloping trips, fishing docks, and old-Florida coastal roads.",
    whyItWorks:
      "Taylor gives buyers Gulf access while keeping the countywide typical value under $200K.",
    watchOut:
      "Coastal and low-lying properties can bring flood, wind, and insurance questions. Quote coverage before making an offer.",
    nearby: "Perry anchors inland services; Steinhatchee brings Gulf access.",
    highlights: ["Gulf access", "Fishing lifestyle", "Below $200K"],
  },
  {
    rank: 4,
    slug: "gadsden-county-quincy",
    county: "Gadsden County",
    place: "Quincy",
    region: "Tallahassee area",
    map: {
      countyName: "Gadsden",
      placeLabel: "Quincy",
      areaLabel: "Tallahassee area",
      referenceCityKeys: ["Tallahassee", "Panama City", "Jacksonville"],
      ariaLabel:
        "Map showing Quincy in Gadsden County, just west of Tallahassee in North Florida.",
    },
    typicalValue: 203_008,
    yearOverYear: -2.1,
    anchor: "Quincy",
    buyerFit:
      "Buyers priced out of Tallahassee who still want access to capital-city jobs, hospitals, and universities.",
    vibe: "Historic streets, small towns, rolling terrain, and a real metro-adjacent affordability angle.",
    whyItWorks:
      "Gadsden keeps buyers close to Tallahassee without pushing values near the statewide number, and prices are lower than last year.",
    watchOut:
      "Commute patterns vary a lot by exact town and work location. Price the drive before falling for the monthly payment.",
    nearby: "Quincy is roughly 25 miles from downtown Tallahassee.",
    highlights: ["Near Tallahassee", "Historic towns", "Values down YoY"],
  },
  {
    rank: 5,
    slug: "putnam-county-palatka",
    county: "Putnam County",
    place: "Palatka",
    region: "St. Johns River / Northeast Florida",
    map: {
      countyName: "Putnam",
      placeLabel: "Palatka",
      areaLabel: "Northeast Florida",
      referenceCityKeys: ["Jacksonville", "Gainesville", "Orlando"],
      ariaLabel:
        "Map showing Palatka in Putnam County in northeast Florida near Jacksonville, Gainesville, and Orlando.",
    },
    typicalValue: 220_798,
    yearOverYear: 1.2,
    anchor: "Palatka",
    buyerFit:
      "Buyers who want a lower-cost small city with river access and a practical drive to Northeast Florida job centers.",
    vibe: "Riverfront, historic neighborhoods, boat ramps, and a bigger town feel than many rural markets.",
    whyItWorks:
      "Putnam gives Northeast Florida buyers a cheaper path than St. Johns, Flagler, or the higher-priced beach markets.",
    watchOut:
      "River proximity can mean flood-zone complexity. Verify insurance, elevation, and any required repairs.",
    nearby: "About 1 hour to Gainesville or St. Augustine, traffic depending.",
    highlights: ["River town", "More services", "Northeast FL access"],
  },
  {
    rank: 6,
    slug: "highlands-county-sebring-avon-park",
    county: "Highlands County",
    place: "Sebring and Avon Park",
    region: "Central Florida",
    map: {
      countyName: "Highlands",
      placeLabel: "Sebring / Avon Park",
      areaLabel: "Central Florida",
      referenceCityKeys: ["Orlando", "Tampa", "Miami"],
      ariaLabel:
        "Map showing Sebring and Avon Park in Highlands County in Central Florida, between Orlando, Tampa, and Miami.",
    },
    typicalValue: 236_074,
    yearOverYear: -1.9,
    anchor: "Sebring",
    buyerFit:
      "Buyers who want Central Florida pricing without being pulled into Orlando, Tampa, or coastal-market numbers.",
    vibe: "Lakes, old Florida neighborhoods, golf, citrus country, and a more practical daily-life setup than many rural bargains.",
    whyItWorks:
      "Highlands keeps Central Florida buyers away from Orlando and Tampa pricing, and county values are slightly lower than last year.",
    watchOut:
      "It is central, not metro-adjacent. Check commute reality, medical access, and whether the exact town fits your day-to-day life.",
    nearby:
      "Sebring sits between the Orlando, Tampa, and South Florida corridors.",
    highlights: ["Central Florida", "Lake lifestyle", "Values down YoY"],
  },
  {
    rank: 7,
    slug: "desoto-county-arcadia",
    county: "DeSoto County",
    place: "Arcadia",
    region: "Southwest Florida interior",
    map: {
      countyName: "DeSoto",
      placeLabel: "Arcadia",
      areaLabel: "Southwest interior",
      referenceCityKeys: ["Tampa", "Fort Myers", "Orlando"],
      ariaLabel:
        "Map showing Arcadia in DeSoto County in inland Southwest Florida, near Fort Myers and Tampa.",
    },
    typicalValue: 252_156,
    yearOverYear: -1.4,
    anchor: "Arcadia",
    buyerFit:
      "Buyers who want a cheaper inland base within reach of Southwest Florida without paying Sarasota, Naples, or coastal prices.",
    vibe: "Historic downtown Arcadia, cattle country, antique shops, river access, and a quieter inland feel.",
    whyItWorks:
      "DeSoto gives Gulf-side buyers an inland price point far below Sarasota, Naples, or coastal Southwest Florida, with values below last year.",
    watchOut:
      "Inland does not mean risk-free. Check flood zones, property condition, insurance, and how often you need to drive to the coast.",
    nearby: "Roughly between Sarasota, Fort Myers, Lakeland, and Lake Placid.",
    highlights: ["Southwest value", "Historic downtown", "Below FL average"],
  },
  {
    rank: 8,
    slug: "citrus-county-inverness-crystal-river",
    county: "Citrus County",
    place: "Inverness and Crystal River",
    region: "Nature Coast / Tampa Bay fringe",
    map: {
      countyName: "Citrus",
      placeLabel: "Inverness / Crystal River",
      areaLabel: "Nature Coast",
      referenceCityKeys: ["Tampa", "Gainesville", "Orlando"],
      ariaLabel:
        "Map showing Inverness and Crystal River in Citrus County on Florida's Nature Coast, north of Tampa.",
    },
    typicalValue: 272_823,
    yearOverYear: -2.6,
    anchor: "Inverness",
    buyerFit:
      "Buyers who want Gulf-side access, springs, and a more relaxed lifestyle without Tampa Bay pricing.",
    vibe: "Manatees, springs, boat ramps, bike trails, small downtowns, and a coastal-adjacent lifestyle that still prices below Florida overall.",
    whyItWorks:
      "Citrus offers Nature Coast access at a countywide value below the Florida average, and values are down year over year.",
    watchOut:
      "Water access, flood zones, older roofs, and insurance quotes can change the real monthly cost quickly.",
    nearby:
      "North of Tampa Bay, west of Ocala, and close to Crystal River and Homosassa.",
    highlights: ["Nature Coast", "Gulf access", "Values down YoY"],
  },
  {
    rank: 9,
    slug: "hendry-county-labelle-clewiston",
    county: "Hendry County",
    place: "LaBelle and Clewiston",
    region: "South Florida inland",
    map: {
      countyName: "Hendry",
      placeLabel: "LaBelle / Clewiston",
      areaLabel: "South Florida value",
      referenceCityKeys: ["Fort Myers", "West Palm Beach", "Miami"],
      ariaLabel:
        "Map showing LaBelle and Clewiston in Hendry County in inland South Florida, between Fort Myers, West Palm Beach, and Miami.",
    },
    typicalValue: 278_929,
    yearOverYear: -3.4,
    anchor: "LaBelle",
    buyerFit:
      "Buyers who need South Florida and understand that the cheaper choices are inland, not on the coast.",
    vibe: "Caloosahatchee River towns, Lake Okeechobee access, agricultural land, and a very different price point than coastal South Florida.",
    whyItWorks:
      "Hendry gives South Florida buyers a countywide value far below Miami-Dade, Broward, Palm Beach, and most coastal Southwest Florida markets.",
    watchOut:
      "This is inland South Florida. Confirm commute times, flood zones, insurance, and access to the services you use most.",
    nearby: "LaBelle is east of Fort Myers; Clewiston sits on Lake Okeechobee.",
    highlights: ["South Florida", "Inland value", "Values down YoY"],
  },
  {
    rank: 10,
    slug: "duval-county-jacksonville",
    county: "Duval County",
    place: "Jacksonville",
    region: "Atlantic Coast / major city",
    map: {
      countyName: "Duval",
      placeLabel: "Jacksonville",
      areaLabel: "Atlantic Coast",
      referenceCityKeys: ["Jacksonville", "Gainesville", "Daytona Beach"],
      ariaLabel:
        "Map showing Jacksonville in Duval County on Florida's Atlantic Coast, near Gainesville and Daytona Beach.",
    },
    typicalValue: 296_782,
    yearOverYear: -2.1,
    anchor: "Jacksonville",
    buyerFit:
      "Buyers who want an actual Atlantic-side city with jobs, hospitals, neighborhoods, and prices below Florida's statewide typical value.",
    vibe: "A large metro with beaches, riverfront neighborhoods, suburban options, military employment, and more inventory than most cheap counties.",
    whyItWorks:
      "Duval gives Atlantic-side buyers a real job market, beaches, hospitals, and a countywide value below Florida overall.",
    watchOut:
      "The countywide number hides big neighborhood differences. Insurance, flood zones, commute patterns, and school zones vary widely.",
    nearby:
      "Jacksonville anchors Northeast Florida, with beaches and St. Johns River neighborhoods inside the metro.",
    highlights: ["Atlantic Coast", "Major city", "Below FL average"],
  },
];

const quickJumpRows = [
  {
    label: "Cheapest overall",
    slug: "calhoun-county-blountstown",
    note: "Lowest current value",
  },
  {
    label: "Cheapest Gulf access",
    slug: "taylor-county-perry-steinhatchee",
    note: "Big Bend Gulf access",
  },
  {
    label: "Cheapest in South Florida",
    slug: "hendry-county-labelle-clewiston",
    note: "Inland South Florida value",
  },
  {
    label: "Cheapest in Central Florida",
    slug: "highlands-county-sebring-avon-park",
    note: "Sebring / Avon Park",
  },
  {
    label: "Cheapest near Tampa Bay",
    slug: "citrus-county-inverness-crystal-river",
    note: "Nature Coast fringe",
  },
  {
    label: "Cheapest Atlantic-side city",
    slug: "duval-county-jacksonville",
    note: "Large city under FL value",
  },
] as const;

const placeBySlug = new Map(
  cheapestFloridaPlaces.map((place) => [place.slug, place]),
);

export function getCheapestPlacesItemList(canonicalUrl: string) {
  return cheapestFloridaPlaces.map((place) => ({
    "@type": "ListItem",
    position: place.rank,
    name: `${place.place}, ${place.county}`,
    url: `${canonicalUrl}#${place.slug}`,
  }));
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatPercent(value: number) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
}

function getSavingsPercent(value: number) {
  return Math.round((1 - value / FLORIDA_TYPICAL_VALUE) * 100);
}

function getMapPoint(map: LocatorMapData) {
  const county = countyByName.get(map.countyName);

  return {
    x: map.marker?.x ?? county?.cx ?? 380,
    y: map.marker?.y ?? county?.cy ?? 310,
  };
}

function PlaceMetric({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: string;
  tone?: "default" | "good" | "warn";
}) {
  const toneClass =
    tone === "good"
      ? "text-brand-green"
      : tone === "warn"
        ? "text-[#9a5a00]"
        : "text-dark-green";

  return (
    <div className="rounded-2xl border border-border-gray/70 bg-white px-4 py-3 shadow-[0_1px_0_rgba(0,0,0,0.03)]">
      <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-dark-green/42">
        {label}
      </div>
      <div
        className={`mt-1 text-[22px] font-extrabold leading-tight ${toneClass}`}
      >
        {value}
      </div>
    </div>
  );
}

function QuickJumpTable() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-border-gray bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
      <div className="border-b border-border-gray/70 bg-green-tint px-4 py-3 sm:px-5">
        <div className="text-[11px] font-black uppercase tracking-[0.16em] text-brand-green">
          Quick jump
        </div>
      </div>
      <div className="divide-y divide-border-gray/65 sm:hidden">
        {quickJumpRows.map((row) => {
          const place = placeBySlug.get(row.slug);

          if (!place) {
            return null;
          }

          return (
            <a
              key={row.slug}
              href={`#${place.slug}`}
              className="grid grid-cols-[1fr_auto] gap-3 px-4 py-3 transition-colors hover:bg-green-tint/45"
            >
              <span>
                <span className="block text-[13px] font-black text-dark-green">
                  {row.label}
                </span>
                <span className="mt-0.5 block text-[12px] font-bold text-brand-green">
                  {place.place}
                </span>
                <span className="mt-0.5 block text-[11px] font-semibold text-dark-green/45">
                  {row.note}
                </span>
              </span>
              <span className="whitespace-nowrap text-[13px] font-black text-dark-green">
                {formatCurrency(place.typicalValue)}
              </span>
            </a>
          );
        })}
      </div>

      <div className="hidden overflow-x-auto sm:block">
        <table className="w-full min-w-[620px] text-left">
          <thead>
            <tr className="border-b border-border-gray/70 text-[11px] font-black uppercase tracking-[0.13em] text-dark-green/45">
              <th className="px-4 py-3 sm:px-5">Search</th>
              <th className="px-4 py-3">Best match</th>
              <th className="px-4 py-3">Typical value</th>
              <th className="px-4 py-3">Why</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-gray/65">
            {quickJumpRows.map((row) => {
              const place = placeBySlug.get(row.slug);

              if (!place) {
                return null;
              }

              return (
                <tr
                  key={row.slug}
                  className="text-[14px] text-dark-green/72 transition-colors hover:bg-green-tint/45"
                >
                  <td className="px-4 py-3 font-extrabold text-dark-green sm:px-5">
                    {row.label}
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={`#${place.slug}`}
                      className="font-extrabold text-brand-green underline decoration-brand-green/25 underline-offset-4 hover:decoration-brand-green"
                    >
                      {place.place}
                    </a>
                    <span className="mt-0.5 block text-[12px] font-bold text-dark-green/45">
                      {place.county}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 font-black text-dark-green">
                    {formatCurrency(place.typicalValue)}
                  </td>
                  <td className="px-4 py-3 font-semibold text-dark-green/56">
                    {row.note}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FloridaLocatorMap({ place }: { place: CheapestFloridaPlace }) {
  const targetPoint = getMapPoint(place.map);
  const glowId = `locator-glow-${place.slug}`;
  const gradientId = `locator-gradient-${place.slug}`;
  const pinGradientId = `locator-pin-gradient-${place.slug}`;
  const referenceCityList = place.map.referenceCityKeys
    .map((cityKey) => referenceCities[cityKey])
    .filter(Boolean);

  return (
    <figure className="relative h-[260px] overflow-hidden bg-[#eef7f1] sm:h-[380px]">
      <div
        role="img"
        aria-label={place.map.ariaLabel}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.92),rgba(232,246,238,0.72)_34%,rgba(210,231,220,0.92)_100%)]" />

        <svg
          viewBox="0 45 760 715"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id={gradientId} x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#006948" />
              <stop offset="100%" stopColor="#014734" />
            </linearGradient>
            <linearGradient
              id={pinGradientId}
              x1="20%"
              x2="82%"
              y1="4%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ff5a67" />
              <stop offset="52%" stopColor="#ee263d" />
              <stop offset="100%" stopColor="#b90f24" />
            </linearGradient>
          </defs>

          <g opacity="0.98">
            {counties.map(({ name, d }) => {
              const isTarget = name === place.map.countyName;
              const isValueCounty = valueCountyNames.has(name);

              return (
                <path
                  key={name}
                  d={d}
                  fill={
                    isTarget
                      ? `url(#${gradientId})`
                      : isValueCounty
                        ? "#c7e8d9"
                        : "#f8fbf8"
                  }
                  fillOpacity={isTarget ? 1 : isValueCounty ? 0.82 : 0.96}
                  stroke={isTarget ? "#ffffff" : "#cfddd5"}
                  strokeWidth={isTarget ? 2.8 : 0.65}
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
          </g>

          <g opacity="0.62">
            {referenceCityList.map((city) => (
              <line
                key={`line-${city.label}`}
                x1={targetPoint.x}
                y1={targetPoint.y}
                x2={city.x}
                y2={city.y}
                stroke="#006948"
                strokeWidth="1.25"
                strokeDasharray="6 7"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </g>

          <g>
            {referenceCityList.map((city) => (
              <g key={city.label}>
                <circle
                  cx={city.x}
                  cy={city.y}
                  r="5"
                  fill="#ffffff"
                  stroke="#006948"
                  strokeWidth="1.8"
                  vectorEffect="non-scaling-stroke"
                />
                <text
                  className="hidden xl:block"
                  x={city.x + city.dx}
                  y={city.y + city.dy}
                  textAnchor={city.dx < 0 ? "end" : "start"}
                  dominantBaseline="middle"
                  fill="#24443a"
                  fontSize="16"
                  fontWeight="800"
                  letterSpacing="0"
                  paintOrder="stroke"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="5"
                >
                  {city.label}
                </text>
              </g>
            ))}
          </g>

          <g transform={`translate(${targetPoint.x} ${targetPoint.y})`}>
            <ellipse cx="0" cy="6" rx="16" ry="5" fill="#062f25" opacity="0.18">
              <animate
                attributeName="rx"
                values="13;19;13"
                dur="1.55s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.12;0.24;0.12"
                dur="1.55s"
                repeatCount="indefinite"
              />
            </ellipse>
            <g filter={`url(#${glowId})`}>
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 -8; 0 0; 0 -8"
                keyTimes="0;0.52;1"
                keySplines="0.2 0 0.2 1;0.4 0 0.2 1"
                calcMode="spline"
                dur="1.55s"
                repeatCount="indefinite"
              />
              <path
                d="M0 0C-12-16-20-26-20-38c0-13 9-22 20-22s20 9 20 22c0 12-8 22-20 38Z"
                fill={`url(#${pinGradientId})`}
                stroke="#7f0c1c"
                strokeWidth="2"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
              <circle
                cx="0"
                cy="-38"
                r="8"
                fill="#ffffff"
                stroke="#9c1224"
                strokeWidth="1.8"
                vectorEffect="non-scaling-stroke"
              />
              <circle cx="-7" cy="-48" r="4" fill="#ffffff" opacity="0.58" />
            </g>
          </g>
        </svg>
      </div>
      <figcaption className="sr-only">{place.map.ariaLabel}</figcaption>
    </figure>
  );
}

export function CheapestPlacesListicle() {
  return (
    <section className="cheap-listicle my-10">
      <div className="mb-6">
        <QuickJumpTable />
      </div>

      <div className="grid gap-6">
        {cheapestFloridaPlaces.map((place) => (
          <article
            key={place.slug}
            id={place.slug}
            className="affordable-place-card scroll-mt-28 overflow-hidden rounded-[24px] border border-border-gray bg-white shadow-[0_12px_40px_rgba(0,0,0,0.07)]"
          >
            <FloridaLocatorMap place={place} />

            <div className="p-5 sm:p-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-brand-green px-3 py-1 text-[12px] font-black text-white">
                  #{place.rank}
                </span>
                <span className="rounded-full bg-green-tint px-3 py-1 text-[12px] font-bold text-brand-green">
                  {place.region}
                </span>
                <span className="rounded-full bg-[#f7f3ec] px-3 py-1 text-[12px] font-bold text-[#7b520b]">
                  {getSavingsPercent(place.typicalValue)}% below Florida
                </span>
              </div>

              <div
                role="heading"
                aria-level={2}
                className="mt-4 text-[28px] font-extrabold leading-tight text-dark-green sm:text-[36px]"
              >
                {place.place}
                <span className="block text-[15px] font-bold text-dark-green/45 sm:text-[16px]">
                  {place.county}
                </span>
              </div>

              <p className="mt-3 text-[16px] leading-relaxed text-dark-green/68">
                {place.vibe}
              </p>

              <div className="mt-5 space-y-2">
                <PlaceMetric
                  label="Typical value"
                  value={formatCurrency(place.typicalValue)}
                  tone="good"
                />
                <PlaceMetric
                  label="Year over year"
                  value={formatPercent(place.yearOverYear)}
                  tone={place.yearOverYear <= 0 ? "good" : "warn"}
                />
                <PlaceMetric
                  label="Below Florida typical value"
                  value={`${getSavingsPercent(place.typicalValue)}%`}
                  tone="good"
                />
                <PlaceMetric label="Main local hub" value={place.anchor} />
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl bg-green-tint p-4">
                  <div className="text-[12px] font-black uppercase tracking-[0.12em] text-brand-green">
                    Best for
                  </div>
                  <p className="mt-2 text-[14px] leading-relaxed text-dark-green/72">
                    {place.buyerFit}
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7f3ec] p-4">
                  <div className="text-[12px] font-black uppercase tracking-[0.12em] text-[#7b520b]">
                    Watch out
                  </div>
                  <p className="mt-2 text-[14px] leading-relaxed text-dark-green/72">
                    {place.watchOut}
                  </p>
                </div>
                <div className="rounded-2xl border border-border-gray/80 p-4">
                  <div className="text-[12px] font-black uppercase tracking-[0.12em] text-dark-green/42">
                    Why it works
                  </div>
                  <p className="mt-2 text-[14px] leading-relaxed text-dark-green/72">
                    {place.whyItWorks}
                  </p>
                  <p className="mt-3 text-[13px] font-semibold leading-relaxed text-dark-green/52">
                    Nearby: {place.nearby}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {place.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-brand-green/15 px-3 py-1 text-[12px] font-bold text-brand-green"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

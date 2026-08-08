import * as React from "react";
import {
  FloridaCountyMap,
  FLORIDA_COUNTIES,
  FLORIDA_DPA_PROGRAMS,
  getDpaProgramCountsByCounty,
  toDpaCalculatorProgramSummaries,
} from "makefloridayourhome";

// Build the Map<string, number> the same way InteractiveMap.tsx does:
// per-county program counts, keeping only counties with at least one program.
const programs = toDpaCalculatorProgramSummaries(FLORIDA_DPA_PROGRAMS);
const countyProgramMap = new Map<string, number>(
  getDpaProgramCountsByCounty(FLORIDA_COUNTIES, programs)
    .filter((entry) => entry.count > 0)
    .map((entry) => [entry.county, entry.count]),
);

const noop = () => {};

// Mirrors the card the interactive map page wraps the SVG in.
function MapCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl bg-white p-6">
      <div className="overflow-hidden rounded-2xl border border-border-gray/60 bg-white p-4 shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-dark-green/60">
          <span className="font-semibold uppercase tracking-wider">
            Legend:
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded-sm bg-brand-green/30" />
            Fewer programs
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded-sm bg-brand-green" />
            More programs
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded-sm border border-border-gray bg-green-tint" />
            No local programs
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

export const Choropleth = () => (
  <MapCard>
    <FloridaCountyMap
      countiesWithPrograms={countyProgramMap}
      selectedCounty={null}
      onCountyClick={noop}
      onCountyHover={noop}
    />
  </MapCard>
);

export const CountySelected = () => (
  <MapCard>
    <FloridaCountyMap
      countiesWithPrograms={countyProgramMap}
      selectedCounty="Broward"
      onCountyClick={noop}
      onCountyHover={noop}
    />
  </MapCard>
);

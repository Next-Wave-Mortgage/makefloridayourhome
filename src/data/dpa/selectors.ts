import { FLORIDA_COUNTIES, FLORIDA_DPA_PROGRAMS } from "./programs";
import type { FloridaDpaProgram } from "./types";

export function isFloridaCounty(county: string): boolean {
  return FLORIDA_COUNTIES.includes(county);
}

export function getStatewidePrograms(): FloridaDpaProgram[] {
  return FLORIDA_DPA_PROGRAMS.filter(
    (program) => program.geography.scope === "statewide",
  );
}

export function getProgramsForCounty(county: string): FloridaDpaProgram[] {
  return FLORIDA_DPA_PROGRAMS.filter(
    (program) =>
      program.geography.scope === "statewide" ||
      program.geography.counties.includes(county),
  );
}

export function getProgramCountsByCounty(): Map<string, number> {
  const counts = new Map<string, number>();

  for (const county of FLORIDA_COUNTIES) {
    counts.set(county, getProgramsForCounty(county).length);
  }

  return counts;
}

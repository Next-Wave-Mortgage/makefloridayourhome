import {
  FLORIDA_COUNTIES,
  FLORIDA_DPA_PROGRAMS,
  getProgramsForCounty,
  type FloridaDpaProgram,
} from "@/data/dpa";

export { FLORIDA_COUNTIES };

export interface DPAProgram {
  id: string;
  name: string;
  counties: string[];
  amount: string;
  type: string;
  region: string;
  description: string;
  eligibilityUrl: string;
  programUrl: string | null;
}

function toLegacyProgram(program: FloridaDpaProgram): DPAProgram {
  return {
    id: program.id,
    name: program.name,
    counties:
      program.geography.scope === "statewide"
        ? ["Statewide"]
        : program.geography.counties,
    amount: program.assistance.display,
    type: program.typeDisplay,
    region: program.region,
    description: program.description,
    eligibilityUrl: program.eligibility.eligibilityUrl,
    programUrl: program.source.url,
  };
}

export const DPA_PROGRAMS: DPAProgram[] =
  FLORIDA_DPA_PROGRAMS.map(toLegacyProgram);

/**
 * Returns all DPA programs available in a given county,
 * including statewide programs.
 */
export function getCountyPrograms(county: string): DPAProgram[] {
  return getProgramsForCounty(county).map(toLegacyProgram);
}

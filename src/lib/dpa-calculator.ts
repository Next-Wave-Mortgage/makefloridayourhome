import type {
  DpaAvailabilityStatus,
  DpaCalculatorConfidence,
  DpaLoanType,
  DpaProgramStatus,
  DpaRepaymentType,
  DpaRequirementValue,
  DpaSourceQuality,
  FloridaDpaProgram,
} from "@/data/dpa";

export type DpaCreditScoreRange =
  | "below-580"
  | "580-619"
  | "620-639"
  | "640-679"
  | "680-plus"
  | "unknown";

export type DpaFirstTimeBuyerAnswer = "yes" | "no" | "unsure";

export type DpaBuyerStatus =
  | "healthcare"
  | "education"
  | "first-responder"
  | "military"
  | "public-service"
  | "disabled"
  | "senior"
  | "single-parent";

export type DpaCalculatorLoanType = DpaLoanType | "not-sure";

export type DpaMatchTier = "strong" | "possible" | "manual-review";

export interface DpaCalculatorInput {
  county: string;
  city?: string;
  firstTimeBuyer: DpaFirstTimeBuyerAnswer;
  buyerStatuses: DpaBuyerStatus[];
  householdIncome?: number;
  householdSize?: number;
  purchasePrice?: number;
  creditScoreRange: DpaCreditScoreRange;
  loanType: DpaCalculatorLoanType;
}

export interface DpaCalculatorProgramSummary {
  id: string;
  name: string;
  description: string;
  assistanceDisplay: string;
  assistanceMaxAmount?: number;
  typeDisplay: string;
  repaymentType: DpaRepaymentType;
  compatibleLoanTypes: DpaLoanType[];
  geography: {
    scope: FloridaDpaProgram["geography"]["scope"];
    display: string;
    counties: string[];
    cities?: string[];
    region: string;
  };
  eligibility: {
    firstTimeBuyerRequired: DpaRequirementValue;
    incomeLimitRequired: DpaRequirementValue;
    purchasePriceLimitRequired: DpaRequirementValue;
    primaryResidenceRequired: DpaRequirementValue;
    homebuyerEducationRequired: DpaRequirementValue;
    minimumCreditScore?: number;
    householdSizeRequired: DpaRequirementValue;
    approvedLenderRequired: DpaRequirementValue;
    allowedOccupations?: string[];
    militaryEligible: DpaRequirementValue;
    propertyTypes?: string[];
  };
  limits: {
    incomeLimitRequired: DpaRequirementValue;
    purchasePriceLimitRequired: DpaRequirementValue;
    effectiveDate?: string;
  };
  availability: {
    status: DpaAvailabilityStatus;
    statusLastChecked: string;
  };
  calculator: {
    confidence: DpaCalculatorConfidence;
    canEstimateAmount: boolean;
    canDetermineBasicEligibility: boolean;
    missingData: string[];
  };
  maintenance: {
    status: DpaProgramStatus;
    lastVerified: string;
    needsReviewReasons: string[];
  };
  source: {
    label: string;
    url: string | null;
    quality: DpaSourceQuality;
    accessedDate?: string;
  };
}

export interface DpaMatchResult {
  program: DpaCalculatorProgramSummary;
  tier: DpaMatchTier;
  score: number;
  whyMatched: string[];
  needsVerification: string[];
}

export type DpaFitLabel = "city" | "county" | "statewide" | "regional" | "area";

const tierRank: Record<DpaMatchTier, number> = {
  strong: 0,
  possible: 1,
  "manual-review": 2,
};

const statusKeywords: Record<DpaBuyerStatus, string[]> = {
  healthcare: ["health", "nurse", "medical", "hospital"],
  education: ["school", "teacher", "educator", "childcare"],
  "first-responder": [
    "law enforcement",
    "fire",
    "firefighter",
    "first responder",
    "correctional",
  ],
  military: ["military", "veteran", "active-duty", "service member"],
  "public-service": [
    "public",
    "government",
    "community",
    "state",
    "municipal",
    "county",
  ],
  disabled: ["disability", "disabled", "special needs"],
  senior: ["senior", "elderly"],
  "single-parent": ["single parent"],
};

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

function hasCountyMatch(
  program: DpaCalculatorProgramSummary,
  county: string,
): boolean {
  return (
    program.geography.scope === "statewide" ||
    program.geography.counties.some(
      (programCounty) => normalize(programCounty) === normalize(county),
    )
  );
}

function hasCityMatch(
  program: DpaCalculatorProgramSummary,
  city?: string,
): boolean | "missing-city" {
  const cities = program.geography.cities;
  if (!cities || cities.length === 0) return true;
  if (!city || city.trim().length === 0) return "missing-city";

  return cities.some(
    (programCity) => normalize(programCity) === normalize(city),
  );
}

function selectedStatusMatchesOccupation(
  selectedStatuses: DpaBuyerStatus[],
  occupations: string[],
): boolean {
  const normalizedOccupations = occupations.map(normalize);

  return selectedStatuses.some((status) =>
    statusKeywords[status].some((keyword) =>
      normalizedOccupations.some((occupation) => occupation.includes(keyword)),
    ),
  );
}

function minCreditForRange(range: DpaCreditScoreRange): number | null {
  switch (range) {
    case "below-580":
      return 0;
    case "580-619":
      return 580;
    case "620-639":
      return 620;
    case "640-679":
      return 640;
    case "680-plus":
      return 680;
    case "unknown":
      return null;
  }
}

function isUnavailableStatus(status: DpaAvailabilityStatus): boolean {
  return status === "paused" || status === "exhausted" || status === "waitlist";
}

function isUnknownOrLowConfidence(
  program: DpaCalculatorProgramSummary,
): boolean {
  return (
    program.calculator.confidence === "low" ||
    program.availability.status === "unknown" ||
    program.maintenance.status === "unknown" ||
    !program.calculator.canDetermineBasicEligibility
  );
}

function hasLoanTypeConcern(
  program: DpaCalculatorProgramSummary,
  loanType: DpaCalculatorLoanType,
): boolean {
  return (
    loanType !== "not-sure" &&
    loanType !== "unknown" &&
    !program.compatibleLoanTypes.includes(loanType) &&
    !program.compatibleLoanTypes.includes("unknown")
  );
}

function textIncludes(value: string, search: string): boolean {
  return normalize(value).includes(normalize(search));
}

function hasExactCityMatch(
  program: DpaCalculatorProgramSummary,
  input: DpaCalculatorInput,
): boolean {
  if (program.geography.scope !== "city" || !input.city) return false;
  return hasCityMatch(program, input.city) === true;
}

function hasExactCountyMatch(
  program: DpaCalculatorProgramSummary,
  county: string,
): boolean {
  if (program.geography.scope !== "county") return false;
  if (!hasCountyMatch(program, county)) return false;

  return (
    program.geography.counties.length === 1 ||
    textIncludes(program.name, county) ||
    textIncludes(program.geography.display, county)
  );
}

function isStatewideHighConfidence(program: DpaCalculatorProgramSummary) {
  return (
    program.geography.scope === "statewide" &&
    program.calculator.confidence === "high"
  );
}

function isRegionalMatch(
  program: DpaCalculatorProgramSummary,
  county: string,
): boolean {
  return (
    program.geography.scope === "regional" && hasCountyMatch(program, county)
  );
}

function preferNonManual(matches: DpaMatchResult[]): DpaMatchResult[] {
  const nonManual = matches.filter((match) => match.tier !== "manual-review");
  return nonManual.length > 0 ? nonManual : matches;
}

export function getDpaMatchFitLabel(
  result: DpaMatchResult,
  input: DpaCalculatorInput,
): string {
  const county = input.county || "your county";

  if (hasExactCityMatch(result.program, input)) {
    return `${input.city?.trim()} program`;
  }

  if (hasExactCountyMatch(result.program, county)) {
    return `${county} County program`;
  }

  if (result.program.geography.scope === "statewide") {
    return "Florida statewide program";
  }

  if (isRegionalMatch(result.program, county)) {
    return `Regional program that includes ${county}`;
  }

  return `Program that may serve ${county}`;
}

export function getFeaturedDpaMatch(
  matches: DpaMatchResult[],
  input: DpaCalculatorInput | null,
): DpaMatchResult | undefined {
  if (matches.length === 0) return undefined;
  if (!input?.county) return matches[0];

  const candidateMatches = preferNonManual(matches);

  return (
    candidateMatches.find((match) => hasExactCityMatch(match.program, input)) ??
    candidateMatches.find((match) =>
      hasExactCountyMatch(match.program, input.county),
    ) ??
    candidateMatches.find((match) =>
      isStatewideHighConfidence(match.program),
    ) ??
    candidateMatches.find((match) =>
      isRegionalMatch(match.program, input.county),
    ) ??
    candidateMatches[0]
  );
}

export function toDpaCalculatorProgramSummary(
  program: FloridaDpaProgram,
): DpaCalculatorProgramSummary {
  return {
    id: program.id,
    name: program.name,
    description: program.description,
    assistanceDisplay: program.assistance.display,
    assistanceMaxAmount: program.assistance.maxAmount,
    typeDisplay: program.typeDisplay,
    repaymentType: program.repaymentType,
    compatibleLoanTypes: program.compatibleLoanTypes,
    geography: {
      scope: program.geography.scope,
      display: program.geography.display,
      counties: program.geography.counties,
      cities: program.geography.cities,
      region: program.geography.region,
    },
    eligibility: {
      firstTimeBuyerRequired: program.eligibility.firstTimeBuyerRequired,
      incomeLimitRequired: program.eligibility.incomeLimitRequired,
      purchasePriceLimitRequired:
        program.eligibility.purchasePriceLimitRequired,
      primaryResidenceRequired: program.eligibility.primaryResidenceRequired,
      homebuyerEducationRequired:
        program.eligibility.homebuyerEducationRequired,
      minimumCreditScore: program.eligibility.minimumCreditScore,
      householdSizeRequired: program.eligibility.householdSizeRequired,
      approvedLenderRequired: program.eligibility.approvedLenderRequired,
      allowedOccupations: program.eligibility.allowedOccupations,
      militaryEligible: program.eligibility.militaryEligible,
      propertyTypes: program.eligibility.propertyTypes,
    },
    limits: {
      incomeLimitRequired: program.limits.incomeLimitRequired,
      purchasePriceLimitRequired: program.limits.purchasePriceLimitRequired,
      effectiveDate: program.limits.effectiveDate,
    },
    availability: {
      status: program.availability.status,
      statusLastChecked: program.availability.statusLastChecked,
    },
    calculator: {
      confidence: program.calculator.confidence,
      canEstimateAmount: program.calculator.canEstimateAmount,
      canDetermineBasicEligibility:
        program.calculator.canDetermineBasicEligibility,
      missingData: program.calculator.missingData,
    },
    maintenance: {
      status: program.maintenance.status,
      lastVerified: program.maintenance.lastVerified,
      needsReviewReasons: program.maintenance.needsReviewReasons,
    },
    source: {
      label: program.source.label,
      url: program.source.url,
      quality: program.source.quality,
      accessedDate: program.source.accessedDate,
    },
  };
}

export function toDpaCalculatorProgramSummaries(
  programs: FloridaDpaProgram[],
): DpaCalculatorProgramSummary[] {
  return programs.map(toDpaCalculatorProgramSummary);
}

export function matchDpaPrograms(
  input: DpaCalculatorInput,
  programs: DpaCalculatorProgramSummary[],
): DpaMatchResult[] {
  if (!input.county) return [];

  const selectedStatuses = new Set(input.buyerStatuses);
  const creditFloor = minCreditForRange(input.creditScoreRange);

  return programs
    .flatMap((program): DpaMatchResult[] => {
      if (!hasCountyMatch(program, input.county)) return [];

      const cityMatch = hasCityMatch(program, input.city);
      if (cityMatch === false) return [];

      if (
        input.firstTimeBuyer === "no" &&
        program.eligibility.firstTimeBuyerRequired === true
      ) {
        return [];
      }

      const whyMatched: string[] = [];
      const needsVerification: string[] = [];
      let score = 0;
      let hasConcern = false;
      let requiresManualReview = false;

      if (program.geography.scope === "statewide") {
        score += 20;
        whyMatched.push("Available statewide, including your county.");
      } else {
        score += 35;
        whyMatched.push(`Serves ${input.county} County.`);
      }

      if (cityMatch === true && program.geography.cities?.length) {
        score += 15;
        whyMatched.push(
          `Includes ${input.city?.trim()} in the listed service area.`,
        );
      }

      if (cityMatch === "missing-city") {
        hasConcern = true;
        needsVerification.push(
          "This is city-specific, so the property address or city must be verified.",
        );
      }

      if (program.availability.status === "available") {
        score += 15;
      } else if (program.availability.status === "limited") {
        score += 8;
        needsVerification.push("Funding or intake is marked limited.");
      } else if (isUnavailableStatus(program.availability.status)) {
        hasConcern = true;
        requiresManualReview = true;
        needsVerification.push(
          "Current intake or funding availability must be confirmed before applying.",
        );
      } else {
        hasConcern = true;
        requiresManualReview = true;
        needsVerification.push("Current program availability is unknown.");
      }

      if (
        input.firstTimeBuyer === "yes" &&
        program.eligibility.firstTimeBuyerRequired === true
      ) {
        score += 12;
        whyMatched.push("Matches a first-time buyer requirement.");
      } else if (
        input.firstTimeBuyer === "unsure" &&
        program.eligibility.firstTimeBuyerRequired === true
      ) {
        hasConcern = true;
        needsVerification.push(
          "First-time buyer status needs to be confirmed.",
        );
      } else if (program.eligibility.firstTimeBuyerRequired !== true) {
        score += 4;
      }

      if (program.eligibility.allowedOccupations?.length) {
        if (
          selectedStatusMatchesOccupation(
            input.buyerStatuses,
            program.eligibility.allowedOccupations,
          )
        ) {
          score += 18;
          whyMatched.push("Matches an occupation or public-service category.");
        } else if (
          selectedStatuses.has("military") &&
          program.eligibility.militaryEligible === true
        ) {
          score += 18;
          whyMatched.push("Matches military or veteran eligibility.");
        } else {
          hasConcern = true;
          needsVerification.push(
            "This program has occupation or employment requirements.",
          );
        }
      } else if (
        selectedStatuses.has("military") &&
        program.eligibility.militaryEligible === true
      ) {
        score += 14;
        whyMatched.push("May fit military or veteran buyer status.");
      }

      if (program.eligibility.minimumCreditScore && creditFloor !== null) {
        if (creditFloor >= program.eligibility.minimumCreditScore) {
          score += 8;
          whyMatched.push(
            `Your credit range starts at or above the listed ${program.eligibility.minimumCreditScore} score guideline.`,
          );
        } else {
          hasConcern = true;
          needsVerification.push(
            `Listed credit guideline starts around ${program.eligibility.minimumCreditScore}; credit may need review.`,
          );
        }
      } else if (
        program.eligibility.minimumCreditScore &&
        creditFloor === null
      ) {
        hasConcern = true;
        needsVerification.push("Credit score guideline should be checked.");
      }

      if (hasLoanTypeConcern(program, input.loanType)) {
        hasConcern = true;
        needsVerification.push(
          "Loan type compatibility should be reviewed with a participating lender.",
        );
      } else if (input.loanType !== "not-sure") {
        score += 6;
      }

      if (
        input.householdIncome &&
        program.limits.incomeLimitRequired === true
      ) {
        hasConcern = true;
        needsVerification.push(
          "Income limits apply and must be checked against household size.",
        );
      }

      if (
        input.purchasePrice &&
        program.limits.purchasePriceLimitRequired === true
      ) {
        hasConcern = true;
        needsVerification.push(
          "Purchase price limits apply and must be checked for the county.",
        );
      }

      if (program.calculator.canEstimateAmount) score += 8;
      if (program.calculator.confidence === "high") score += 12;
      if (program.calculator.confidence === "medium") score += 7;

      if (isUnknownOrLowConfidence(program)) {
        requiresManualReview = true;
        needsVerification.push(
          "Program details are marked for manual review in the database.",
        );
      }

      if (program.calculator.missingData.length > 0) {
        needsVerification.push(
          `Missing data to verify: ${program.calculator.missingData.slice(0, 2).join(", ")}.`,
        );
      }

      const tier: DpaMatchTier = requiresManualReview
        ? "manual-review"
        : hasConcern
          ? "possible"
          : "strong";

      return [
        {
          program,
          tier,
          score,
          whyMatched: whyMatched.slice(0, 3),
          needsVerification: Array.from(new Set(needsVerification)).slice(0, 4),
        },
      ];
    })
    .sort((a, b) => {
      const tierDiff = tierRank[a.tier] - tierRank[b.tier];
      if (tierDiff !== 0) return tierDiff;
      if (b.score !== a.score) return b.score - a.score;
      return (
        (b.program.assistanceMaxAmount ?? 0) -
        (a.program.assistanceMaxAmount ?? 0)
      );
    });
}

export function getDpaProgramCountsByCounty(
  counties: string[],
  programs: DpaCalculatorProgramSummary[],
): { county: string; count: number }[] {
  return counties.map((county) => ({
    county,
    count: programs.filter((program) => hasCountyMatch(program, county)).length,
  }));
}

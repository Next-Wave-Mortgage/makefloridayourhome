export type DpaProgramStatus = "active" | "limited" | "paused" | "unknown";

export type DpaAvailabilityStatus =
  | "available"
  | "limited"
  | "waitlist"
  | "paused"
  | "exhausted"
  | "unknown";

export type DpaSourceQuality =
  | "official"
  | "partner"
  | "current-site"
  | "missing";

export type DpaGeographyScope = "statewide" | "county" | "city" | "regional";

export type DpaJurisdictionLevel =
  | "florida_statewide"
  | "county"
  | "city"
  | "regional"
  | "nonprofit"
  | "unknown";

export type DpaRepaymentType =
  | "grant"
  | "forgivable"
  | "deferred"
  | "repayable_second"
  | "first_mortgage"
  | "counseling"
  | "subsidy"
  | "unknown";

export type DpaRequirementValue = boolean | "varies" | "unknown";

export type DpaLoanType =
  | "fha"
  | "va"
  | "usda"
  | "conventional"
  | "hfa"
  | "portfolio"
  | "unknown";

export type DpaIncomeBasis =
  | "ami"
  | "florida_housing"
  | "ship"
  | "hud"
  | "program_specific"
  | "unknown";

export type DpaCalculatorConfidence = "high" | "medium" | "low";

export type DpaStackingValue =
  | "allowed"
  | "not_allowed"
  | "conditional"
  | "unknown";

export interface DpaForgivenessYears {
  min?: number;
  max?: number;
  display: string;
}

export interface DpaPercentAmount {
  min?: number;
  max?: number;
}

export interface DpaAssistanceAmount {
  display: string;
  minAmount?: number;
  maxAmount?: number;
  percentOfLoan?: DpaPercentAmount;
  percentOfPurchasePrice?: DpaPercentAmount;
  maxAmountSourceUrl?: string;
  calculationNotes?: string;
}

export interface DpaGeography {
  scope: DpaGeographyScope;
  jurisdictionLevel: DpaJurisdictionLevel;
  display: string;
  counties: string[];
  cities?: string[];
  eligibleAreas?: string[];
  excludedAreas?: string[];
  region: string;
  notes?: string[];
}

export interface DpaEligibility {
  eligibilityUrl: string;
  firstTimeBuyerRequired: DpaRequirementValue;
  incomeLimitRequired: DpaRequirementValue;
  purchasePriceLimitRequired: DpaRequirementValue;
  primaryResidenceRequired: DpaRequirementValue;
  homebuyerEducationRequired: DpaRequirementValue;
  minimumCreditScore?: number;
  householdSizeRequired: DpaRequirementValue;
  borrowerContributionRequired: DpaRequirementValue;
  approvedLenderRequired: DpaRequirementValue;
  allowedOccupations?: string[];
  militaryEligible: DpaRequirementValue;
  propertyTypes?: string[];
  notes?: string[];
}

export interface DpaSource {
  label: string;
  url: string | null;
  quality: DpaSourceQuality;
  accessedDate?: string;
  notes?: string[];
}

export interface DpaLimits {
  incomeLimitRequired: DpaRequirementValue;
  purchasePriceLimitRequired: DpaRequirementValue;
  incomeBasis: DpaIncomeBasis;
  usesFloridaHousingLimits: boolean | "unknown";
  limitsSourceUrl?: string;
  effectiveDate?: string;
  notes?: string[];
}

export interface DpaAvailability {
  status: DpaAvailabilityStatus;
  statusLastChecked: string;
  sourceUrl?: string;
  notes?: string[];
}

export interface DpaStacking {
  withFloridaHousingFirstMortgage: DpaStackingValue;
  withHometownHeroes: DpaStackingValue;
  withLocalPrograms: DpaStackingValue;
  notes?: string[];
}

export interface DpaCalculatorReadiness {
  confidence: DpaCalculatorConfidence;
  canEstimateAmount: boolean;
  canDetermineBasicEligibility: boolean;
  missingData: string[];
}

export interface DpaMaintenance {
  status: DpaProgramStatus;
  lastVerified: string;
  needsReviewReasons: string[];
}

export interface FloridaDpaProgram {
  id: string;
  name: string;
  typeDisplay: string;
  description: string;
  region: string;
  assistance: DpaAssistanceAmount;
  repaymentType: DpaRepaymentType;
  forgivenessYears?: DpaForgivenessYears;
  compatibleLoanTypes: DpaLoanType[];
  geography: DpaGeography;
  eligibility: DpaEligibility;
  limits: DpaLimits;
  availability: DpaAvailability;
  stacking: DpaStacking;
  calculator: DpaCalculatorReadiness;
  source: DpaSource;
  sources: DpaSource[];
  maintenance: DpaMaintenance;
}

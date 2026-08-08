import * as React from "react";
import {
  DpaCalculatorSeoSections,
  FLORIDA_COUNTIES,
  FLORIDA_DPA_PROGRAMS,
  getDpaProgramCountsByCounty,
  toDpaCalculatorProgramSummaries,
} from "makefloridayourhome";

// Same prop construction as the calculator page.
const calculatorPrograms = toDpaCalculatorProgramSummaries(FLORIDA_DPA_PROGRAMS);
const countyCounts = getDpaProgramCountsByCounty(
  FLORIDA_COUNTIES,
  calculatorPrograms,
);
const commonPrograms = [
  "florida-hometown-heroes",
  "florida-assist",
  "florida-hlp",
  "florida-hfa-preferred-plus",
]
  .map((id) => calculatorPrograms.find((program) => program.id === id))
  .filter((program): program is NonNullable<typeof program> =>
    Boolean(program),
  );

export const Default = () => (
  <DpaCalculatorSeoSections
    countyCounts={countyCounts}
    commonPrograms={commonPrograms}
  />
);

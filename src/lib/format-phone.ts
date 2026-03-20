/**
 * Auto-format a US phone number as the user types.
 * Input: raw onChange value. Output: formatted string like (555) 123-4567.
 * Strips non-digits, then applies formatting based on length.
 */
export function formatPhoneNumber(value: string): string {
  const digits = value.replace(/\D/g, "");

  // Limit to 10 digits (US numbers)
  const d = digits.slice(0, 10);

  if (d.length === 0) return "";
  if (d.length <= 3) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

/** Strip formatting to get raw digits for API submission */
export function unformatPhone(value: string): string {
  return value.replace(/\D/g, "");
}

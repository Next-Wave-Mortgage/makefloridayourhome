import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Florida Mortgage Blog — Tips, Programs & Market Updates",
  description:
    "Expert articles on Florida home loans, down payment assistance, first-time buyer programs, and housing market trends. Updated weekly.",
  robots: { index: false, follow: true },
};

export default function BlogIndexPage() {
  redirect("/learn");
}

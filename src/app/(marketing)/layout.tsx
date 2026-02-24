import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GA } from "@/components/analytics/GA";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GA />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

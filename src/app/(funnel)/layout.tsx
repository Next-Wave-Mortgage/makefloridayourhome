import { FunnelHeader } from "./FunnelHeader";

export default function FunnelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <FunnelHeader />
      <main className="flex flex-1 flex-col">{children}</main>
      <footer
        className="px-5 pb-6 text-center text-[11px] leading-5 text-dark-green/35"
        role="contentinfo"
      >
        Next Wave Mortgage, LLC &middot; NMLS ID 2536820 &middot; 256-bit
        encryption
      </footer>
    </div>
  );
}

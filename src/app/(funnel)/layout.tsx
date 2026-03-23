import Link from "next/link";
import Image from "next/image";

export default function FunnelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="flex h-16 shrink-0 items-center border-b border-border-gray/40 px-6 sm:px-10">
        <Link href="/">
          <Image
            src="/images/logo.webp"
            alt="Make Florida Your Home"
            width={148}
            height={42}
            priority
          />
        </Link>
      </header>
      <main className="flex flex-1 flex-col">{children}</main>
    </div>
  );
}

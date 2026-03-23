import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/first-time-home-buyer", label: "First-Time Homebuyer" },
  { href: "/down-payment-assistance", label: "Down Payment Assistance" },
  { href: "/home-purchase-eligibility", label: "Check Eligibility" },
];

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-green-tint px-6 text-center">
      <h1 className="text-6xl font-bold text-brand-green">404</h1>
      <p className="mt-4 text-xl font-semibold text-dark-green">
        Page not found
      </p>
      <p className="mt-2 max-w-md text-dark-green/60">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
        have been moved or no longer exists.
      </p>

      <nav className="mt-8 flex flex-wrap justify-center gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-lg border border-border-gray bg-white px-5 py-2.5 text-sm font-semibold text-brand-green transition-colors hover:border-brand-green/30 hover:bg-brand-green hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

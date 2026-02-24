import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          {siteConfig.name}
        </Link>
        <ul className="flex gap-6 text-sm">
          <li>
            <Link href="/programs">Programs</Link>
          </li>
          <li>
            <Link href="/calculators">Calculators</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

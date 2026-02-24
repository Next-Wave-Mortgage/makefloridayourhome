import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.company}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

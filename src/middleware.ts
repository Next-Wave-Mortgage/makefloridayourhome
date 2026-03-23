import { NextRequest, NextResponse } from "next/server";
import redirects from "./lib/redirects";

// Build a lookup map at module load time for O(1) matching.
// Keys are stored lowercase so matching is case-insensitive
// (old HubSpot site was case-insensitive).
const redirectMap = new Map<string, string>();
for (const r of redirects) {
  redirectMap.set(r.source.toLowerCase(), r.destination);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Strip trailing slash for consistent matching (except root "/")
  const normalised =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  // If the URL had a trailing slash, 301 to the clean version first
  if (normalised !== pathname) {
    const url = request.nextUrl.clone();
    url.pathname = normalised;
    return NextResponse.redirect(url, 301);
  }

  // Case-insensitive redirect lookup
  const destination = redirectMap.get(normalised.toLowerCase());

  if (destination) {
    if (destination.startsWith("http")) {
      // External redirect — use destination URL directly
      return NextResponse.redirect(destination, 301);
    }
    const url = request.nextUrl.clone();
    url.pathname = destination;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Run on all paths except static files, images, and API routes
  matcher: ["/((?!api|_next|images|favicon\\.ico|robots\\.txt|sitemap\\.xml|manifest\\.webmanifest).*)"],
};

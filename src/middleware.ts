import { NextRequest, NextResponse } from "next/server";
import hubspotRedirects from "./lib/hubspot-redirects";

// Build a lookup map at module load time for O(1) matching
const redirectMap = new Map<string, string>();
for (const r of hubspotRedirects) {
  redirectMap.set(r.source, r.destination);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const destination = redirectMap.get(pathname);

  if (destination) {
    const url = request.nextUrl.clone();
    url.pathname = destination;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Run on all paths except static files, images, and API routes
  matcher: ["/((?!api|_next/static|_next/image|images|favicon\\.ico|robots\\.txt|sitemap\\.xml).*)"],
};

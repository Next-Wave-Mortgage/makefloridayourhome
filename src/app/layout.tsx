import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/app/globals.css";
import { siteConfig } from "@/lib/site";
import { TrackPageView } from "@/components/TrackPageView";

const GA4_ID = (process.env.GA4_ID || "G-E7KYFVSJLG").trim();
// NextWave's shared cross-site property. MFYH reports to both so its own
// history continues while leads also roll up with every other site. The shared
// property keeps only campaign tags from URLs and origin-only referrers,
// matching the other sites.
const SHARED_GA4_ID = "G-FN23QPRS19";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: "%s",
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Make Florida Your Home — Florida Mortgage Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className="font-sans text-dark-green antialiased">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID || SHARED_GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());${
            GA4_ID ? `gtag('config','${GA4_ID}');` : ""
          }gtag('config','${SHARED_GA4_ID}',{page_location:(function(u,q){['utm_source','utm_medium','utm_campaign','utm_content','utm_term','utm_id','gclid','gbraid','wbraid'].forEach(function(k){if(u.searchParams.get(k))q.set(k,u.searchParams.get(k))});q=q.toString();return u.origin+u.pathname+(q?'?'+q:'')})(new URL(location.href),new URLSearchParams()),page_referrer:document.referrer?new URL(document.referrer).origin:'',allow_google_signals:false,allow_ad_personalization_signals:false});`}
        </Script>
        <TrackPageView ga4Id={GA4_ID} sharedGa4Id={SHARED_GA4_ID} />
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}

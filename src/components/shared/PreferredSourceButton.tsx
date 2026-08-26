import Script from "next/script";

/**
 * Google "Add as Preferred Source" button.
 * Google's publisher.js scans the page for the `google-add-preferred-source-btn`
 * attribute and renders its official button into the div.
 * Docs: https://developers.google.com/search/docs/appearance/preferred-sources
 */
export function PreferredSourceButton() {
  return (
    <div className="mt-10 flex flex-col items-center gap-5 border-t border-border-gray pt-8 text-center sm:flex-row sm:justify-between sm:gap-8 sm:text-left">
      <div>
        <p className="text-[16px] font-bold text-dark-green">
          Get our Florida updates in your{" "}
          <span className="text-brand-green">Google feed</span>
        </p>
        <p className="mt-1 text-[14px] leading-relaxed text-dark-green/60">
          Add Make Florida Your Home as a preferred source to see our rate,
          grant, and program updates more often in Google Search.
        </p>
      </div>
      {/* Google's script forces width:100% and min-height:60px on the host div, so
          size it via this wrapper — wide enough that the label stays on one line,
          with min-height matching Google's so the pill never clips */}
      <div className="w-[250px] shrink-0">
        <div className="min-h-[60px]" google-add-preferred-source-btn="" />
      </div>
      <Script
        src="https://news.google.com/swg/js/v1/publisher.js"
        strategy="lazyOnload"
      />
    </div>
  );
}

"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "1.5rem",
            textAlign: "center",
            backgroundColor: "#F2FAF6",
          }}
        >
          <h1 style={{ fontSize: "3.75rem", fontWeight: 700, color: "#006948" }}>
            500
          </h1>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2E4136",
            }}
          >
            Something went wrong
          </p>
          <p
            style={{
              marginTop: "0.5rem",
              maxWidth: "28rem",
              color: "rgba(46,65,54,0.6)",
            }}
          >
            We hit an unexpected error. Please try again, or head back to the
            homepage.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", gap: "0.75rem" }}>
            <button
              onClick={reset}
              style={{
                padding: "0.625rem 1.25rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#fff",
                backgroundColor: "#006948",
                border: "1px solid #006948",
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            >
              Try Again
            </button>
            <a
              href="/"
              style={{
                padding: "0.625rem 1.25rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#006948",
                backgroundColor: "#fff",
                border: "1px solid #DCDFDD",
                borderRadius: "0.5rem",
                textDecoration: "none",
              }}
            >
              Go Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}

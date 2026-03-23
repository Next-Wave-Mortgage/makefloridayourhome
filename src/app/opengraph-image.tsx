import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Make Florida Your Home — Florida First-Time Homebuyer Programs & Grants";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #006948 0%, #2e4136 100%)",
          padding: "60px 80px",
        }}
      >
        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 24px",
            borderRadius: "100px",
            background: "rgba(255,255,255,0.15)",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "1px",
            }}
          >
            FLORIDA MORTGAGE EXPERTS
          </span>
        </div>

        {/* Main heading */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: "56px",
              fontWeight: 800,
              textAlign: "center",
              lineHeight: 1.15,
              maxWidth: "900px",
            }}
          >
            See Every Program You Qualify For
          </span>
          <span
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "26px",
              textAlign: "center",
              maxWidth: "700px",
              lineHeight: 1.4,
            }}
          >
            Hometown Heroes &bull; FHA &bull; VA &bull; USDA &bull; Down Payment
            Assistance up to $35,000+
          </span>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            marginTop: "48px",
          }}
        >
          <span
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "18px",
            }}
          >
            makefloridayourhome.com
          </span>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "18px" }}>
            |
          </span>
          <span
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "18px",
            }}
          >
            NMLS #2536820
          </span>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "18px" }}>
            |
          </span>
          <span
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "18px",
            }}
          >
            No Credit Pull &bull; 100% Free
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}

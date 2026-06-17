import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Launch Labs — private Trackman golf simulator studio in Garland, TX";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #071018 0%, #0A0E14 45%, #0E8DA8 100%)",
          color: "#FFFFFF",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            color: "#BDEDE8",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Launch Labs
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              maxWidth: "920px",
            }}
          >
            Private Trackman Golf Simulator
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.3,
              color: "#D6DCE5",
              maxWidth: "860px",
            }}
          >
            Garland, TX · 24/7 self-service bays · Book online · Digital access
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#4FB9DB",
          }}
        >
          <span>launchlabstx.com</span>
          <span>Open 24/7</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

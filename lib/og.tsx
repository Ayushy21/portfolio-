import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const ogSize = { width: 1200, height: 630 };

export function renderOgCard() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f6f5ef",
        padding: "52px 68px",
        color: "#242720",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: -1,
          }}
        >
          <span style={{ color: "#c34725", fontSize: 49 }}>✳</span>ayush.
        </div>
        <span style={{ fontSize: 15, letterSpacing: 2, color: "#666a60" }}>
          SOFTWARE ENGINEER / AI & FULL STACK
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div style={{ fontSize: 85, letterSpacing: -5, lineHeight: 1.1 }}>
          Engineering
        </div>
        <div
          style={{
            fontSize: 99,
            letterSpacing: -5,
            color: "#c34725",
            lineHeight: 1.1,
            fontStyle: "italic",
          }}
        >
          what’s next.
        </div>
        <div style={{ fontSize: 22, color: "#666a60", marginTop: 24 }}>
          Curious ideas. Thoughtful software. Built by Ayush Yadav.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #d9dbd1",
          paddingTop: 24,
          fontSize: 15,
          letterSpacing: 1,
          color: "#666a60",
        }}
      >
        <span>{site.location.toUpperCase()}</span>
        <span>CODESENSE / SENTINEL / REAL-TIME CHAT</span>
      </div>
    </div>,
    ogSize,
  );
}

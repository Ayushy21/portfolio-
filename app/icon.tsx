import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f6f5ef",
        color: "#c34725",
        borderRadius: 12,
      }}
    >
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path
          d="M22 4v36M6.4 13l31.2 18M6.4 31l31.2-18"
          stroke="#c34725"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </div>,
    size,
  );
}

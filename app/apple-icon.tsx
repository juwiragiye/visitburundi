import { readFileSync } from "node:fs";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  const flag = readFileSync(
    new URL("../public/images/burundi-flag.png", import.meta.url),
  ).toString("base64");
  const src = `data:image/png;base64,${flag}`;
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
      }}
    >
      <img src={src} alt="" width={180} height={108} />
    </div>,
    size,
  );
}

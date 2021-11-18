import { imageBaseUrl } from "@config";

export type ImageQuality = "normal" | "high" | "low" | "original";

export class ImageHelper {
  static getImage = (hash, quality: ImageQuality = "original") =>
    hash
      ? hash.includes("http")
        ? hash
        : `${imageBaseUrl}${hash}` +
          (quality === "normal"
            ? "?pt=m500"
            : quality === "high"
            ? "?pt=m1000"
            : quality === "low"
            ? "?pt=b1000"
            : "")
      : null;

  static getHash = (src = "") => {
    if (typeof src !== "string") return null;
    const srcWithoutBase = src.split("/m/")[1] || "";
    return srcWithoutBase.split("?pt=")[0];
  };
}

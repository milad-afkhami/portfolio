type ShimmerSize = number | string;

export default class ImageHelper {
  static #toBase64(str: string) {
    return typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);
  }

  static #getShimmerHTML(w: ShimmerSize, h: ShimmerSize) {
    return ` 
      <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <linearGradient id="g">
            <stop stop-color="#333" offset="20%" />
            <stop stop-color="#222" offset="50%" />
            <stop stop-color="#333" offset="70%" />
          </linearGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="#333" />
        <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
        <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
      </svg>
    `;
  }

  static getShimmerURL() {
    return `data:image/svg+xml;base64,${this.#toBase64(
      this.#getShimmerHTML(700, 475)
    )}`;
  }
}

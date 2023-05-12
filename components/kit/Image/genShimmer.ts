import CSSVariables from "@utils/CSSVariables";

function getShimmer(w, h) {
  const _h = h || "100%";
  const _w = w || "100%";
  const color = {
    from: CSSVariables.get("border-light"),
    to: CSSVariables.get("border-dark"),
  };

  return `
    <svg width="${_w}" height="${_h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="${color.from}" offset="20%" />
          <stop stop-color="${color.to}" offset="50%" />
          <stop stop-color="${color.from}" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${_w}" height="${_h}" fill="${color.from}" />
      <rect id="r" width="${_w}" height="${_h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${_w}" to="${_w}" dur="2s" repeatCount="indefinite"  />
    </svg>
  `;
}

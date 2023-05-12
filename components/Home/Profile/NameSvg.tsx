import { useEffect, useRef } from "@hooks";
import Div from "@kits/Div";

// const anime = dynamic(() => import("animejs/lib/anime.es.js"), { ssr: false });
const ProfileNameSvg = () => {
  const animeRef = useRef();

  useEffect(() => {
    const anime = require("animejs/lib/anime.js");

    // #todo reverse it so in first paint the name is shown
    animeRef.current = anime({
      targets: "#name-animation path",
      strokeDashoffset: [anime.setDashoffset, 0],
      // easing: "easeInOutQuad",
      easing: "easeInOutSine",
      duration: 10000,
      delay: 0,
      direction: "reverse",
      autoplay: false,
      loop: true,
    });

    setTimeout(() => {
      animeRef.current?.play?.();
      animeRef.current?.reverse?.();
    }, 1000);
  }, []);

  return (
    <Div
      id="name-animation"
      mb="3"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        animeRef.current?.restart?.();
      }}
      cursor="pointer"
      width="fit-content"
    >
      <svg
        width="500"
        style={{ maxWidth: "100%" }}
        height="100"
        viewBox="0 0 670.9 76.401"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="svgGroup"
          strokeLinecap="round"
          fillRule="evenodd"
          fontSize="9pt"
          stroke="var(--color-brand)"
          strokeWidth="0.75mm"
          fill="none"
          style={{
            stroke: "var(--color-brand)",
            strokeWidth: "0.75mm",
            fill: "none",
          }}
        >
          <path
            d="M 55.9 75.2 L 55.9 17.3 L 37.2 59.4 L 27.8 59.4 L 9 17.3 L 9 75.2 L 0 75.2 L 0 5.2 L 13.3 5.2 L 32.7 49.5 L 51.8 5.2 L 65.4 5.2 L 65.4 75.2 L 55.9 75.2 Z M 577.3 23.2 L 577.3 31.9 Q 580.1 27.7 584.35 24.85 A 16.871 16.871 0 0 1 592.652 22.056 A 20.954 20.954 0 0 1 594.2 22 Q 599.734 22 603.436 24.35 A 12.847 12.847 0 0 1 604.3 24.95 A 15.79 15.79 0 0 1 609.315 31.459 A 19.746 19.746 0 0 1 609.9 33 Q 613 28.4 617.25 25.2 A 15.669 15.669 0 0 1 624.041 22.317 A 21.446 21.446 0 0 1 627.8 22 A 21.325 21.325 0 0 1 631.449 22.298 A 15.685 15.685 0 0 1 635.15 23.4 Q 638.3 24.8 640.4 27.35 A 16.329 16.329 0 0 1 642.939 31.686 A 19.878 19.878 0 0 1 643.55 33.45 A 25.375 25.375 0 0 1 644.452 38.181 A 31.994 31.994 0 0 1 644.6 41.3 L 644.6 75.2 L 635.6 75.2 L 635.6 42 A 19.042 19.042 0 0 0 635.263 38.311 Q 634.827 36.105 633.828 34.361 A 10.982 10.982 0 0 0 633.1 33.25 A 7.974 7.974 0 0 0 627.287 29.954 A 10.678 10.678 0 0 0 626.2 29.9 Q 623.9 29.9 621.8 30.8 A 16.543 16.543 0 0 0 618.278 32.873 A 18.722 18.722 0 0 0 617.8 33.25 A 25.622 25.622 0 0 0 614.845 36.099 A 29.189 29.189 0 0 0 614.2 36.85 Q 612.5 38.9 611.1 41.1 L 611.1 75.2 L 602.1 75.2 L 602.1 42 A 19.042 19.042 0 0 0 601.763 38.311 Q 601.327 36.105 600.328 34.361 A 10.982 10.982 0 0 0 599.6 33.25 A 7.974 7.974 0 0 0 593.787 29.954 A 10.678 10.678 0 0 0 592.7 29.9 Q 590.5 29.9 588.4 30.75 A 16.859 16.859 0 0 0 585.087 32.56 A 19.345 19.345 0 0 0 584.35 33.1 Q 582.4 34.6 580.7 36.6 Q 579 38.6 577.6 40.8 L 577.6 75.2 L 568.6 75.2 L 568.6 23.2 L 577.3 23.2 Z M 456.7 1.2 L 456.7 31.5 Q 459.5 27.4 463.75 24.7 A 17.126 17.126 0 0 1 470.29 22.277 A 22.699 22.699 0 0 1 473.9 22 A 23.225 23.225 0 0 1 478.965 22.518 Q 484.059 23.656 487.05 27.3 Q 491.175 32.326 491.388 40.409 A 33.764 33.764 0 0 1 491.4 41.3 L 491.4 75.2 L 482.4 75.2 L 482.4 42.3 Q 482.4 38.003 480.951 35.041 A 10.747 10.747 0 0 0 479.85 33.25 Q 477.3 29.9 472.5 29.9 Q 470.2 29.9 467.95 30.75 Q 465.7 31.6 463.7 33.1 A 26.152 26.152 0 0 0 460.41 36.048 A 29.423 29.423 0 0 0 459.9 36.6 Q 458.1 38.6 456.7 40.8 L 456.7 75.2 L 447.7 75.2 L 447.7 1.2 L 456.7 1.2 Z M 396.6 75.2 L 396.6 1.2 L 405.6 1.2 L 405.6 43.5 L 429.1 22.2 L 434.3 27.9 L 414.2 45.7 L 438.7 70.2 L 432.5 76.2 L 405.6 48.5 L 405.6 75.2 L 396.6 75.2 Z M 296.1 76 L 288 72.7 L 315.4 5.2 L 325.8 5.2 L 352.8 72.7 L 344.1 76.2 L 336.3 56.2 L 303.9 56.2 L 296.1 76 Z M 393.6 3.3 L 390.9 10.9 Q 388.8 9.8 386.4 8.9 A 14.172 14.172 0 0 0 382.778 8.079 A 17.356 17.356 0 0 0 381.1 8 A 10.802 10.802 0 0 0 378.071 8.404 A 8.291 8.291 0 0 0 374.35 10.65 A 8.462 8.462 0 0 0 372.403 14.019 Q 371.8 15.92 371.8 18.4 L 371.8 25.1 L 387.2 25.1 L 387.2 32.9 L 371.8 32.9 L 371.8 75.2 L 362.8 75.2 L 362.8 32.9 L 354.8 32.9 L 354.8 25.1 L 362.8 25.1 L 362.8 19 A 25.593 25.593 0 0 1 363.146 14.702 A 19.933 19.933 0 0 1 364.1 11.1 A 18.949 18.949 0 0 1 366.237 6.937 A 16.627 16.627 0 0 1 367.7 5.1 Q 370 2.6 373.3 1.3 A 18.888 18.888 0 0 1 378.94 0.054 A 22.365 22.365 0 0 1 380.5 0 A 31.386 31.386 0 0 1 383.723 0.157 Q 385.939 0.386 387.75 0.95 Q 390.8 1.9 393.6 3.3 Z M 238.1 28.4 L 238.1 1.2 L 247.1 1.2 L 247.1 62.6 A 12.15 12.15 0 0 0 247.202 64.236 Q 247.534 66.67 248.95 67.55 Q 250.8 68.7 253 68.7 L 251.1 75.7 Q 241.6 75.7 239.5 68.1 A 20.774 20.774 0 0 1 236.205 71.671 A 27.009 27.009 0 0 1 233.3 73.85 A 14.878 14.878 0 0 1 228.564 75.84 Q 226.58 76.313 224.268 76.386 A 27.174 27.174 0 0 1 223.4 76.4 Q 218.6 76.4 214.35 74.5 Q 210.1 72.6 206.95 69.1 A 24.368 24.368 0 0 1 203.018 63.106 A 29.512 29.512 0 0 1 202 60.65 Q 200.2 55.7 200.2 49.5 A 33.082 33.082 0 0 1 201.055 41.872 A 29.101 29.101 0 0 1 202.05 38.55 A 29.65 29.65 0 0 1 204.87 32.784 A 25.323 25.323 0 0 1 207.05 29.85 Q 210.2 26.2 214.4 24.1 Q 218.6 22 223.3 22 A 21.642 21.642 0 0 1 227.572 22.402 A 15.942 15.942 0 0 1 232.25 24.1 A 34.343 34.343 0 0 1 234.83 25.689 Q 236.054 26.524 237.025 27.374 A 16.59 16.59 0 0 1 238.1 28.4 Z M 177.6 27.4 L 177.6 23.2 L 185.8 23.2 L 185.8 62.6 A 12.15 12.15 0 0 0 185.902 64.236 Q 186.234 66.67 187.65 67.55 Q 189.5 68.7 191.7 68.7 L 189.8 75.7 A 17.722 17.722 0 0 1 185.535 75.228 Q 179.898 73.828 178.303 68.28 A 13.59 13.59 0 0 1 178.2 67.9 Q 177 69.5 175.45 71.05 A 18.204 18.204 0 0 1 172.156 73.644 A 20.291 20.291 0 0 1 171.9 73.8 A 17.462 17.462 0 0 1 168.767 75.267 A 20.704 20.704 0 0 1 167.4 75.7 A 18.765 18.765 0 0 1 164.08 76.302 A 23.457 23.457 0 0 1 161.9 76.4 Q 157 76.4 152.75 74.5 Q 148.5 72.6 145.35 69.1 A 24.891 24.891 0 0 1 141.493 63.32 A 30.206 30.206 0 0 1 140.35 60.65 Q 138.5 55.7 138.5 49.5 Q 138.5 43.7 140.3 38.65 A 27.784 27.784 0 0 1 143.46 32.344 A 24.797 24.797 0 0 1 145.35 29.9 Q 148.6 26.2 153.15 24.1 A 23.124 23.124 0 0 1 161.929 22.025 A 27.082 27.082 0 0 1 163.1 22 A 22.584 22.584 0 0 1 167.894 22.491 A 18.703 18.703 0 0 1 171.25 23.55 A 26.002 26.002 0 0 1 175.537 25.844 A 22.103 22.103 0 0 1 177.6 27.4 Z M 542.5 27.4 L 542.5 23.2 L 550.7 23.2 L 550.7 62.6 A 12.15 12.15 0 0 0 550.802 64.236 Q 551.134 66.67 552.55 67.55 Q 554.4 68.7 556.6 68.7 L 554.7 75.7 A 17.722 17.722 0 0 1 550.435 75.228 Q 544.798 73.828 543.203 68.28 A 13.59 13.59 0 0 1 543.1 67.9 Q 541.9 69.5 540.35 71.05 A 18.204 18.204 0 0 1 537.056 73.644 A 20.291 20.291 0 0 1 536.8 73.8 A 17.462 17.462 0 0 1 533.667 75.267 A 20.704 20.704 0 0 1 532.3 75.7 A 18.765 18.765 0 0 1 528.98 76.302 A 23.457 23.457 0 0 1 526.8 76.4 Q 521.9 76.4 517.65 74.5 Q 513.4 72.6 510.25 69.1 A 24.891 24.891 0 0 1 506.393 63.32 A 30.206 30.206 0 0 1 505.25 60.65 Q 503.4 55.7 503.4 49.5 Q 503.4 43.7 505.2 38.65 A 27.784 27.784 0 0 1 508.36 32.344 A 24.797 24.797 0 0 1 510.25 29.9 Q 513.5 26.2 518.05 24.1 A 23.124 23.124 0 0 1 526.829 22.025 A 27.082 27.082 0 0 1 528 22 A 22.584 22.584 0 0 1 532.794 22.491 A 18.703 18.703 0 0 1 536.15 23.55 A 26.002 26.002 0 0 1 540.437 25.844 A 22.103 22.103 0 0 1 542.5 27.4 Z M 115.9 1.2 L 115.9 58 A 20.644 20.644 0 0 0 116.088 60.888 Q 116.55 64.152 118.15 66 A 7.363 7.363 0 0 0 122.734 68.476 A 10.724 10.724 0 0 0 124.4 68.6 Q 126.3 68.6 128.1 68.15 Q 129.9 67.7 131.3 67.1 L 133.5 74.4 Q 132.101 75.022 130.188 75.523 A 34.978 34.978 0 0 1 129.05 75.8 A 23.816 23.816 0 0 1 125.895 76.285 A 30.514 30.514 0 0 1 123.2 76.4 A 21.419 21.419 0 0 1 119.089 76.019 A 18.058 18.058 0 0 1 116.75 75.4 Q 113.8 74.4 111.6 72.3 A 13.281 13.281 0 0 1 109.122 69.027 A 16.994 16.994 0 0 1 108.15 66.9 Q 106.9 63.6 106.9 58.9 L 106.9 1.2 L 115.9 1.2 Z M 91.4 23.2 L 91.4 75.2 L 82.4 75.2 L 82.4 23.2 L 91.4 23.2 Z M 669.1 23.2 L 669.1 75.2 L 660.1 75.2 L 660.1 23.2 L 669.1 23.2 Z M 176.8 61.9 L 176.8 34 Q 174.1 32.1 170.85 30.95 Q 167.6 29.8 164 29.8 A 16.142 16.142 0 0 0 159.533 30.403 A 14.448 14.448 0 0 0 157.4 31.2 Q 154.4 32.6 152.25 35.15 A 17.393 17.393 0 0 0 149.743 39.153 A 21.502 21.502 0 0 0 148.9 41.3 A 23.426 23.426 0 0 0 147.817 46.581 A 28.621 28.621 0 0 0 147.7 49.2 A 25.723 25.723 0 0 0 148.169 54.196 A 21.781 21.781 0 0 0 148.9 56.95 A 19.283 19.283 0 0 0 150.776 60.974 A 16.545 16.545 0 0 0 152.3 63.05 Q 154.5 65.6 157.45 67 A 14.679 14.679 0 0 0 163.249 68.388 A 17.126 17.126 0 0 0 163.9 68.4 Q 167.7 68.4 171.1 66.6 Q 174.5 64.8 176.8 61.9 Z M 541.7 61.9 L 541.7 34 Q 539 32.1 535.75 30.95 Q 532.5 29.8 528.9 29.8 A 16.142 16.142 0 0 0 524.433 30.403 A 14.448 14.448 0 0 0 522.3 31.2 Q 519.3 32.6 517.15 35.15 A 17.393 17.393 0 0 0 514.643 39.153 A 21.502 21.502 0 0 0 513.8 41.3 A 23.426 23.426 0 0 0 512.717 46.581 A 28.621 28.621 0 0 0 512.6 49.2 A 25.723 25.723 0 0 0 513.069 54.196 A 21.781 21.781 0 0 0 513.8 56.95 A 19.283 19.283 0 0 0 515.676 60.974 A 16.545 16.545 0 0 0 517.2 63.05 Q 519.4 65.6 522.35 67 A 14.679 14.679 0 0 0 528.149 68.388 A 17.126 17.126 0 0 0 528.8 68.4 Q 532.6 68.4 536 66.6 Q 539.4 64.8 541.7 61.9 Z M 238.1 62.1 L 238.1 36.3 A 16.273 16.273 0 0 0 235.919 34.057 Q 234.787 33.087 233.38 32.183 A 28.298 28.298 0 0 0 232.85 31.85 A 14.048 14.048 0 0 0 225.854 29.809 A 16.873 16.873 0 0 0 225.3 29.8 A 14.964 14.964 0 0 0 220.954 30.416 A 13.39 13.39 0 0 0 218.75 31.3 Q 215.8 32.8 213.7 35.4 Q 211.6 38 210.5 41.55 Q 209.4 45.1 209.4 49.2 A 25.594 25.594 0 0 0 209.823 53.941 A 21.215 21.215 0 0 0 210.6 56.9 A 19.851 19.851 0 0 0 212.471 60.904 A 17.107 17.107 0 0 0 213.95 62.95 Q 216.1 65.5 219.05 66.95 Q 222 68.4 225.4 68.4 Q 229.1 68.4 232.45 66.65 Q 235.8 64.9 238.1 62.1 Z M 320.1 14.6 L 306.9 48.2 L 333.2 48.2 L 320.1 14.6 Z M 82.508 12.507 A 6.059 6.059 0 0 0 86.9 14.3 A 8.264 8.264 0 0 0 88.556 14.142 A 5.661 5.661 0 0 0 91.5 12.6 A 5.588 5.588 0 0 0 92.971 9.968 A 7.987 7.987 0 0 0 93.2 8 A 7.26 7.26 0 0 0 93.2 7.919 A 6.06 6.06 0 0 0 91.35 3.55 A 7.395 7.395 0 0 0 91.292 3.493 A 6.059 6.059 0 0 0 86.9 1.7 A 8.264 8.264 0 0 0 85.244 1.858 A 5.661 5.661 0 0 0 82.3 3.4 A 5.588 5.588 0 0 0 80.829 6.032 A 7.987 7.987 0 0 0 80.6 8 A 7.26 7.26 0 0 0 80.6 8.081 A 6.06 6.06 0 0 0 82.45 12.45 A 7.395 7.395 0 0 0 82.508 12.507 Z M 660.208 12.507 A 6.059 6.059 0 0 0 664.6 14.3 A 8.264 8.264 0 0 0 666.256 14.142 A 5.661 5.661 0 0 0 669.2 12.6 A 5.588 5.588 0 0 0 670.671 9.968 A 7.987 7.987 0 0 0 670.9 8 A 7.26 7.26 0 0 0 670.9 7.919 A 6.06 6.06 0 0 0 669.05 3.55 A 7.395 7.395 0 0 0 668.992 3.493 A 6.059 6.059 0 0 0 664.6 1.7 A 8.264 8.264 0 0 0 662.944 1.858 A 5.661 5.661 0 0 0 660 3.4 A 5.588 5.588 0 0 0 658.529 6.032 A 7.987 7.987 0 0 0 658.3 8 A 7.26 7.26 0 0 0 658.3 8.081 A 6.06 6.06 0 0 0 660.15 12.45 A 7.395 7.395 0 0 0 660.208 12.507 Z"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      </svg>
    </Div>
  );
};

export default ProfileNameSvg;

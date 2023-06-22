const apiBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const appBaseURL = process.env.NEXT_PUBLIC_BASE_URL;
const imageBaseURL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

// `/documents/${encodeURIComponent(`Milad Afkhami's Resume.pdf`)}`
const resumeURL =
  "https://drive.google.com/file/d/1ah3eWYiHiZyLX8vDGJpZRtZQP2ZeTjVU/view?usp=drive_link";

export { apiBaseURL, appBaseURL, imageBaseURL, resumeURL };

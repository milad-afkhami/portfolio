namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    PORT: string;
    NEXT_PUBLIC_API_BASE_URL: string;
    NEXT_PUBLIC_BASE_URL: string;
    NEXT_PUBLIC_IMAGE_BASE_URL?: string;
  }
}

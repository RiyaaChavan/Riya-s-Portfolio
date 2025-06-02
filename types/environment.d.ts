declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    BASE_URL: string;
    NEXT_PUBLIC_BASE_URL: string;
  }
}

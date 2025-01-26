export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            DATABASE_HOST: string;
            DATABASE_PORT: string;
            DATABASE_USER: string;
            DATABASE_PASSWORD: string;
            DATABASE_NAME: string;
        }
    }
}
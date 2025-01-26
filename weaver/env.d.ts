export {}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            WEAVER_HOME: string;
            WEAVER_TARGET: string;
            WEAVER_VERSION: string;
        }
    }
}
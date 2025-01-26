
export interface AppConfig {
    database: DatabaseConfig;
}

interface DatabaseConfig {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
}

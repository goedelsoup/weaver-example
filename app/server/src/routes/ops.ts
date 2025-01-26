import type { Hono } from "hono";

export function attachRoutes(app: Hono): void {
    /* Health check route */
    app.get('/', (c) => c.text('OK'));
}

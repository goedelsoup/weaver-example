import type { Hono } from "hono";

export function attachRoutes(app: Hono): void {
    /**
     * PUT /user/cart/:id
     */
    app.put('/user/cart/:id', (c) => {
        const { id } = c.req.param();
        return c.text(`OK: ${id}`);
    });
}
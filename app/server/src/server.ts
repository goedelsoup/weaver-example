
import { Hono } from "hono";
import { instrumentHono } from "./instrumentation/hono";

import { cart, ops } from "./routes";
import * as OpenTelmetry from "./opentelemetry";

const app = new Hono();

// Attach custom instrumentation and build routes
app.use(instrumentHono(OpenTelmetry.PROVIDERS));
[
    ops,
    cart,
].map(route => route(app));

export default app;

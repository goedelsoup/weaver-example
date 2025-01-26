
import type { Context, Env, Next } from 'hono';
import { createMiddleware } from 'hono/factory';

import type { AppTelemetryProviders } from "../opentelemetry";

export function instrumentHono(providers: AppTelemetryProviders) {
    const { log, trace } = providers;

    const logger = log.getLogger('@hono/enrich');
    const tracer = trace.getTracer('@hono/enrich');

    return createMiddleware(async function instrument<E extends Env, P extends string>(
        c: Context<E, P>,
        next: Next,
    ): Promise<void> {
        // todo: this shouldn't use bridge directly -- for demo purposes only
        logger.emit({
            body: "Request started",
            attributes: {},
            severityNumber: 0,
            severityText: "INFO",
        })
    });
}
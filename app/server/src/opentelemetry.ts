
import { OTLPLogExporter } from '@opentelemetry/exporter-logs-otlp-http';
import { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-http';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { BatchLogRecordProcessor, LoggerProvider } from "@opentelemetry/sdk-logs";
import { MeterProvider, PeriodicExportingMetricReader } from "@opentelemetry/sdk-metrics";
import {
    BatchSpanProcessor,
    NodeTracerProvider,
} from '@opentelemetry/sdk-trace-node';

import opentelemetry from "@opentelemetry/api";
const { diag, metrics, trace } = opentelemetry;

export type AppTelemetryProviders = {
    log: LoggerProvider;
    meter: MeterProvider;
    trace: NodeTracerProvider;
}

const loggerProvider = new LoggerProvider({});
loggerProvider.addLogRecordProcessor(new BatchLogRecordProcessor(new OTLPLogExporter(), {}));

const meterProvider = new MeterProvider({
    readers: [
        new PeriodicExportingMetricReader({
            exporter: new OTLPMetricExporter(),
            exportIntervalMillis: 10000,
        })
    ],
});

const traceProvider = new NodeTracerProvider({
    spanProcessors: [
        new BatchSpanProcessor(new OTLPTraceExporter(), {}),
    ],
});

metrics.setGlobalMeterProvider(meterProvider);
trace.setGlobalTracerProvider(traceProvider);

registerInstrumentations({
    instrumentations: [
        new HttpInstrumentation(),
    ],
});

export const PROVIDERS: AppTelemetryProviders = {
    log: loggerProvider,
    meter: meterProvider,
    trace: traceProvider,
};

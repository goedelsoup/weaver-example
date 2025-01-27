/** DO NOT EDIT -- THIS FILE HAS BEEN GENERATED BY WEAVER */


/**
 * Number of connections that are currently active on the server.
 *
 * Instrument: updowncounter
 * Unit: {connection}
 *
 * 
 *
 * * @remarks Meter name: `Microsoft.AspNetCore.Server.Kestrel`; Added in: ASP.NET Core 8.0

 *
 */
export const KESTREL_ACTIVE_CONNECTIONS = /** @type {const} */ 'kestrel.active_connections';

/**
 * Number of TLS handshakes that are currently in progress on the server.
 *
 * Instrument: updowncounter
 * Unit: {handshake}
 *
 * 
 *
 * * @remarks Meter name: `Microsoft.AspNetCore.Server.Kestrel`; Added in: ASP.NET Core 8.0

 *
 */
export const KESTREL_ACTIVE_TLS_HANDSHAKES = /** @type {const} */ 'kestrel.active_tls_handshakes';

/**
 * The duration of connections on the server.
 *
 * Instrument: histogram
 * Unit: s
 *
 * 
 *
 * * @remarks Meter name: `Microsoft.AspNetCore.Server.Kestrel`; Added in: ASP.NET Core 8.0

 *
 */
export const KESTREL_CONNECTION_DURATION = /** @type {const} */ 'kestrel.connection.duration';

/**
 * Number of connections that are currently queued and are waiting to start.
 *
 * Instrument: updowncounter
 * Unit: {connection}
 *
 * 
 *
 * * @remarks Meter name: `Microsoft.AspNetCore.Server.Kestrel`; Added in: ASP.NET Core 8.0

 *
 */
export const KESTREL_QUEUED_CONNECTIONS = /** @type {const} */ 'kestrel.queued_connections';

/**
 * Number of HTTP requests on multiplexed connections (HTTP/2 and HTTP/3) that are currently queued and are waiting to start.
 *
 * Instrument: updowncounter
 * Unit: {request}
 *
 * 
 *
 * * @remarks Meter name: `Microsoft.AspNetCore.Server.Kestrel`; Added in: ASP.NET Core 8.0

 *
 */
export const KESTREL_QUEUED_REQUESTS = /** @type {const} */ 'kestrel.queued_requests';

/**
 * Number of connections rejected by the server.
 *
 * Instrument: counter
 * Unit: {connection}
 *
 * 
 *
 * * @remarks Connections are rejected when the currently active count exceeds the value configured with `MaxConcurrentConnections`.
Meter name: `Microsoft.AspNetCore.Server.Kestrel`; Added in: ASP.NET Core 8.0

 *
 */
export const KESTREL_REJECTED_CONNECTIONS = /** @type {const} */ 'kestrel.rejected_connections';

/**
 * The duration of TLS handshakes on the server.
 *
 * Instrument: histogram
 * Unit: s
 *
 * 
 *
 * * @remarks Meter name: `Microsoft.AspNetCore.Server.Kestrel`; Added in: ASP.NET Core 8.0

 *
 */
export const KESTREL_TLS_HANDSHAKE_DURATION = /** @type {const} */ 'kestrel.tls_handshake.duration';

/**
 * Number of connections that are currently upgraded (WebSockets). .
 *
 * Instrument: updowncounter
 * Unit: {connection}
 *
 * 
 *
 * * @remarks The counter only tracks HTTP/1.1 connections.

Meter name: `Microsoft.AspNetCore.Server.Kestrel`; Added in: ASP.NET Core 8.0

 *
 */
export const KESTREL_UPGRADED_CONNECTIONS = /** @type {const} */ 'kestrel.upgraded_connections';

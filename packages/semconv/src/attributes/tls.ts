/** DO NOT EDIT -- THIS FILE HAS BEEN GENERATED BY WEAVER */


/**
 * String indicating the [cipher](https://datatracker.ietf.org/doc/html/rfc5246#appendix-A.5) used during the current connection.

 *
 * 
 *
 * * @example ["TLS_RSA_WITH_3DES_EDE_CBC_SHA", "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256"]
 *
 */
export const TLS_CIPHER = /** @type {const} */ 'tls.cipher';

/**
 * PEM-encoded stand-alone certificate offered by the client. This is usually mutually-exclusive of `client.certificate_chain` since this value also exists in that list.

 *
 * 
 *
 * * @example ["MII..."]
 *
 */
export const TLS_CLIENT_CERTIFICATE = /** @type {const} */ 'tls.client.certificate';

/**
 * Array of PEM-encoded certificates that make up the certificate chain offered by the client. This is usually mutually-exclusive of `client.certificate` since that value should be the first certificate in the chain.

 *
 * 
 *
 * * @example [["MII...", "MI..."]]
 *
 */
export const TLS_CLIENT_CERTIFICATE_CHAIN = /** @type {const} */ 'tls.client.certificate_chain';

/**
 * Certificate fingerprint using the MD5 digest of DER-encoded version of certificate offered by the client. For consistency with other hash values, this value should be formatted as an uppercase hash.

 *
 * 
 *
 * * @example ["0F76C7F2C55BFD7D8E8B8F4BFBF0C9EC"]
 *
 */
export const TLS_CLIENT_HASH_MD5 = /** @type {const} */ 'tls.client.hash.md5';

/**
 * Certificate fingerprint using the SHA1 digest of DER-encoded version of certificate offered by the client. For consistency with other hash values, this value should be formatted as an uppercase hash.

 *
 * 
 *
 * * @example ["9E393D93138888D288266C2D915214D1D1CCEB2A"]
 *
 */
export const TLS_CLIENT_HASH_SHA1 = /** @type {const} */ 'tls.client.hash.sha1';

/**
 * Certificate fingerprint using the SHA256 digest of DER-encoded version of certificate offered by the client. For consistency with other hash values, this value should be formatted as an uppercase hash.

 *
 * 
 *
 * * @example ["0687F666A054EF17A08E2F2162EAB4CBC0D265E1D7875BE74BF3C712CA92DAF0"]
 *
 */
export const TLS_CLIENT_HASH_SHA256 = /** @type {const} */ 'tls.client.hash.sha256';

/**
 * Distinguished name of [subject](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.6) of the issuer of the x.509 certificate presented by the client.
 *
 * 
 *
 * * @example ["CN=Example Root CA, OU=Infrastructure Team, DC=example, DC=com"]
 *
 */
export const TLS_CLIENT_ISSUER = /** @type {const} */ 'tls.client.issuer';

/**
 * A hash that identifies clients based on how they perform an SSL/TLS handshake.
 *
 * 
 *
 * * @example ["d4e5b18d6b55c71272893221c96ba240"]
 *
 */
export const TLS_CLIENT_JA3 = /** @type {const} */ 'tls.client.ja3';

/**
 * Date/Time indicating when client certificate is no longer considered valid.
 *
 * 
 *
 * * @example ["2021-01-01T00:00:00.000Z"]
 *
 */
export const TLS_CLIENT_NOT_AFTER = /** @type {const} */ 'tls.client.not_after';

/**
 * Date/Time indicating when client certificate is first considered valid.
 *
 * 
 *
 * * @example ["1970-01-01T00:00:00.000Z"]
 *
 */
export const TLS_CLIENT_NOT_BEFORE = /** @type {const} */ 'tls.client.not_before';

/**
 * Distinguished name of subject of the x.509 certificate presented by the client.
 *
 * 
 *
 * * @example ["CN=myclient, OU=Documentation Team, DC=example, DC=com"]
 *
 */
export const TLS_CLIENT_SUBJECT = /** @type {const} */ 'tls.client.subject';

/**
 * Array of ciphers offered by the client during the client hello.
 *
 * 
 *
 * * @example [["TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384", "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384"]]
 *
 */
export const TLS_CLIENT_SUPPORTED_CIPHERS = /** @type {const} */ 'tls.client.supported_ciphers';

/**
 * String indicating the curve used for the given cipher, when applicable
 *
 * 
 *
 * * @example ["secp256r1"]
 *
 */
export const TLS_CURVE = /** @type {const} */ 'tls.curve';

/**
 * Boolean flag indicating if the TLS negotiation was successful and transitioned to an encrypted tunnel.
 *
 * 
 *
 * * @example [true]
 *
 */
export const TLS_ESTABLISHED = /** @type {const} */ 'tls.established';

/**
 * String indicating the protocol being tunneled. Per the values in the [IANA registry](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids), this string should be lower case.

 *
 * 
 *
 * * @example ["http/1.1"]
 *
 */
export const TLS_NEXT_PROTOCOL = /** @type {const} */ 'tls.next_protocol';

/**
 * Normalized lowercase protocol name parsed from original string of the negotiated [SSL/TLS protocol version](https://www.openssl.org/docs/man1.1.1/man3/SSL_get_version.html#RETURN-VALUES)

 *
 * 
 *
 * 
 */
export const TLS_PROTOCOL_NAME = /** @type {const} */ 'tls.protocol.name';

/**
 * Numeric part of the version parsed from the original string of the negotiated [SSL/TLS protocol version](https://www.openssl.org/docs/man1.1.1/man3/SSL_get_version.html#RETURN-VALUES)

 *
 * 
 *
 * * @example ["1.2", "3"]
 *
 */
export const TLS_PROTOCOL_VERSION = /** @type {const} */ 'tls.protocol.version';

/**
 * Boolean flag indicating if this TLS connection was resumed from an existing TLS negotiation.
 *
 * 
 *
 * * @example [true]
 *
 */
export const TLS_RESUMED = /** @type {const} */ 'tls.resumed';

/**
 * PEM-encoded stand-alone certificate offered by the server. This is usually mutually-exclusive of `server.certificate_chain` since this value also exists in that list.

 *
 * 
 *
 * * @example ["MII..."]
 *
 */
export const TLS_SERVER_CERTIFICATE = /** @type {const} */ 'tls.server.certificate';

/**
 * Array of PEM-encoded certificates that make up the certificate chain offered by the server. This is usually mutually-exclusive of `server.certificate` since that value should be the first certificate in the chain.

 *
 * 
 *
 * * @example [["MII...", "MI..."]]
 *
 */
export const TLS_SERVER_CERTIFICATE_CHAIN = /** @type {const} */ 'tls.server.certificate_chain';

/**
 * Certificate fingerprint using the MD5 digest of DER-encoded version of certificate offered by the server. For consistency with other hash values, this value should be formatted as an uppercase hash.

 *
 * 
 *
 * * @example ["0F76C7F2C55BFD7D8E8B8F4BFBF0C9EC"]
 *
 */
export const TLS_SERVER_HASH_MD5 = /** @type {const} */ 'tls.server.hash.md5';

/**
 * Certificate fingerprint using the SHA1 digest of DER-encoded version of certificate offered by the server. For consistency with other hash values, this value should be formatted as an uppercase hash.

 *
 * 
 *
 * * @example ["9E393D93138888D288266C2D915214D1D1CCEB2A"]
 *
 */
export const TLS_SERVER_HASH_SHA1 = /** @type {const} */ 'tls.server.hash.sha1';

/**
 * Certificate fingerprint using the SHA256 digest of DER-encoded version of certificate offered by the server. For consistency with other hash values, this value should be formatted as an uppercase hash.

 *
 * 
 *
 * * @example ["0687F666A054EF17A08E2F2162EAB4CBC0D265E1D7875BE74BF3C712CA92DAF0"]
 *
 */
export const TLS_SERVER_HASH_SHA256 = /** @type {const} */ 'tls.server.hash.sha256';

/**
 * Distinguished name of [subject](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.6) of the issuer of the x.509 certificate presented by the client.
 *
 * 
 *
 * * @example ["CN=Example Root CA, OU=Infrastructure Team, DC=example, DC=com"]
 *
 */
export const TLS_SERVER_ISSUER = /** @type {const} */ 'tls.server.issuer';

/**
 * A hash that identifies servers based on how they perform an SSL/TLS handshake.
 *
 * 
 *
 * * @example ["d4e5b18d6b55c71272893221c96ba240"]
 *
 */
export const TLS_SERVER_JA3S = /** @type {const} */ 'tls.server.ja3s';

/**
 * Date/Time indicating when server certificate is no longer considered valid.
 *
 * 
 *
 * * @example ["2021-01-01T00:00:00.000Z"]
 *
 */
export const TLS_SERVER_NOT_AFTER = /** @type {const} */ 'tls.server.not_after';

/**
 * Date/Time indicating when server certificate is first considered valid.
 *
 * 
 *
 * * @example ["1970-01-01T00:00:00.000Z"]
 *
 */
export const TLS_SERVER_NOT_BEFORE = /** @type {const} */ 'tls.server.not_before';

/**
 * Distinguished name of subject of the x.509 certificate presented by the server.
 *
 * 
 *
 * * @example ["CN=myserver, OU=Documentation Team, DC=example, DC=com"]
 *
 */
export const TLS_SERVER_SUBJECT = /** @type {const} */ 'tls.server.subject';

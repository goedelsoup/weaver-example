/** DO NOT EDIT -- THIS FILE HAS BEEN GENERATED BY WEAVER */


/**
 * GenAI operation duration
 *
 * Instrument: histogram
 * Unit: s
 *
 * 
 *
 * 
 */
export const GEN_AI_CLIENT_OPERATION_DURATION = /** @type {const} */ 'gen_ai.client.operation.duration';

/**
 * Measures number of input and output tokens used
 *
 * Instrument: histogram
 * Unit: {token}
 *
 * 
 *
 * 
 */
export const GEN_AI_CLIENT_TOKEN_USAGE = /** @type {const} */ 'gen_ai.client.token.usage';

/**
 * Generative AI server request duration such as time-to-last byte or last output token
 *
 * Instrument: histogram
 * Unit: s
 *
 * 
 *
 * 
 */
export const GEN_AI_SERVER_REQUEST_DURATION = /** @type {const} */ 'gen_ai.server.request.duration';

/**
 * Time per output token generated after the first token for successful responses
 *
 * Instrument: histogram
 * Unit: s
 *
 * 
 *
 * 
 */
export const GEN_AI_SERVER_TIME_PER_OUTPUT_TOKEN = /** @type {const} */ 'gen_ai.server.time_per_output_token';

/**
 * Time to generate first token for successful responses
 *
 * Instrument: histogram
 * Unit: s
 *
 * 
 *
 * 
 */
export const GEN_AI_SERVER_TIME_TO_FIRST_TOKEN = /** @type {const} */ 'gen_ai.server.time_to_first_token';

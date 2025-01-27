/** DO NOT EDIT -- THIS FILE HAS BEEN GENERATED BY WEAVER */


/**
 * The unique identifier for the flag evaluation context. For example, the targeting key.

 *
 * 
 *
 * * @example ["5157782b-2203-4c80-a857-dbbd5e7761db"]
 *
 */
export const FEATURE_FLAG_CONTEXT_ID = /** @type {const} */ 'feature_flag.context.id';

/**
 * A message explaining the nature of an error occurring during flag evaluation.
 *
 * 
 *
 * * @example ["Flag `header-color` expected type `string` but found type `number`"]
 *
 */
export const FEATURE_FLAG_EVALUATION_ERROR_MESSAGE = /** @type {const} */ 'feature_flag.evaluation.error.message';

/**
 * The reason code which shows how a feature flag value was determined.

 *
 * 
 *
 * * @example ["static", "targeting_match", "error", "default"]
 *
 */
export const FEATURE_FLAG_EVALUATION_REASON = /** @type {const} */ 'feature_flag.evaluation.reason';

/**
 * The lookup key of the feature flag.
 *
 * 
 *
 * * @example ["logo-color"]
 *
 */
export const FEATURE_FLAG_KEY = /** @type {const} */ 'feature_flag.key';

/**
 * Identifies the feature flag provider.
 *
 * 
 *
 * * @example ["Flag Manager"]
 *
 */
export const FEATURE_FLAG_PROVIDER_NAME = /** @type {const} */ 'feature_flag.provider_name';

/**
 * The identifier of the [flag set](https://openfeature.dev/specification/glossary/#flag-set) to which the feature flag belongs.

 *
 * 
 *
 * * @example ["proj-1", "ab98sgs", "service1/dev"]
 *
 */
export const FEATURE_FLAG_SET_ID = /** @type {const} */ 'feature_flag.set.id';

/**
 * A semantic identifier for an evaluated flag value.

 *
 * 
 *
 * * @example ["red", "true", "on"]
 *
 */
export const FEATURE_FLAG_VARIANT = /** @type {const} */ 'feature_flag.variant';

/**
 * The version of the ruleset used during the evaluation. This may be any stable value which uniquely identifies the ruleset.

 *
 * 
 *
 * * @example ["1", "01ABCDEF"]
 *
 */
export const FEATURE_FLAG_VERSION = /** @type {const} */ 'feature_flag.version';

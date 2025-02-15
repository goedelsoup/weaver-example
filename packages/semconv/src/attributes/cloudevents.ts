/** DO NOT EDIT -- THIS FILE HAS BEEN GENERATED BY WEAVER */


/**
 * The [event_id](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md#id) uniquely identifies the event.

 *
 * 
 *
 * * @example ["123e4567-e89b-12d3-a456-426614174000", "0001"]
 *
 */
export const CLOUDEVENTS_EVENT_ID = /** @type {const} */ 'cloudevents.event_id';

/**
 * The [source](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md#source-1) identifies the context in which an event happened.

 *
 * 
 *
 * * @example ["https://github.com/cloudevents", "/cloudevents/spec/pull/123", "my-service"]
 *
 */
export const CLOUDEVENTS_EVENT_SOURCE = /** @type {const} */ 'cloudevents.event_source';

/**
 * The [version of the CloudEvents specification](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md#specversion) which the event uses.

 *
 * 
 *
 * * @example 1.0
 *
 */
export const CLOUDEVENTS_EVENT_SPEC_VERSION = /** @type {const} */ 'cloudevents.event_spec_version';

/**
 * The [subject](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md#subject) of the event in the context of the event producer (identified by source).

 *
 * 
 *
 * * @example mynewfile.jpg
 *
 */
export const CLOUDEVENTS_EVENT_SUBJECT = /** @type {const} */ 'cloudevents.event_subject';

/**
 * The [event_type](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md#type) contains a value describing the type of event related to the originating occurrence.

 *
 * 
 *
 * * @example ["com.github.pull_request.opened", "com.example.object.deleted.v2"]
 *
 */
export const CLOUDEVENTS_EVENT_TYPE = /** @type {const} */ 'cloudevents.event_type';

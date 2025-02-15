/** DO NOT EDIT -- THIS FILE HAS BEEN GENERATED BY WEAVER */


/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).

 *
 * 
 *
 * 
 */
export const CASSANDRA_CONSISTENCY_LEVEL = /** @type {const} */ 'cassandra.consistency.level';

/**
 * The data center of the coordinating node for a query.

 *
 * 
 *
 * * @example us-west-2
 *
 */
export const CASSANDRA_COORDINATOR_DC = /** @type {const} */ 'cassandra.coordinator.dc';

/**
 * The ID of the coordinating node for a query.

 *
 * 
 *
 * * @example be13faa2-8574-4d71-926d-27f16cf8a7af
 *
 */
export const CASSANDRA_COORDINATOR_ID = /** @type {const} */ 'cassandra.coordinator.id';

/**
 * The fetch size used for paging, i.e. how many rows will be returned at once.

 *
 * 
 *
 * * @example [5000]
 *
 */
export const CASSANDRA_PAGE_SIZE = /** @type {const} */ 'cassandra.page.size';

/**
 * Whether or not the query is idempotent.

 *
 * 
 *
 * 
 */
export const CASSANDRA_QUERY_IDEMPOTENT = /** @type {const} */ 'cassandra.query.idempotent';

/**
 * The number of times a query was speculatively executed. Not set or `0` if the query was not executed speculatively.

 *
 * 
 *
 * * @example [0, 2]
 *
 */
export const CASSANDRA_SPECULATIVE_EXECUTION_COUNT = /** @type {const} */ 'cassandra.speculative_execution.count';

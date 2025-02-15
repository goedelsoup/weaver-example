/** DO NOT EDIT -- THIS FILE HAS BEEN GENERATED BY WEAVER */


/**
 * Garbage collection duration.
 *
 * Instrument: histogram
 * Unit: s
 *
 * 
 *
 * * @remarks The values can be retrieve from [`perf_hooks.PerformanceObserver(...).observe({ entryTypes: ['gc'] })`](https://nodejs.org/api/perf_hooks.html#performanceobserverobserveoptions)

 *
 */
export const V8JS_GC_DURATION = /** @type {const} */ 'v8js.gc.duration';

/**
 * Heap space available size.
 *
 * Instrument: updowncounter
 * Unit: By
 *
 * 
 *
 * * @remarks Value can be retrieved from value `space_available_size` of [`v8.getHeapSpaceStatistics()`](https://nodejs.org/api/v8.html#v8getheapspacestatistics)

 *
 */
export const V8JS_HEAP_SPACE_AVAILABLE_SIZE = /** @type {const} */ 'v8js.heap.space.available_size';

/**
 * Committed size of a heap space.
 *
 * Instrument: updowncounter
 * Unit: By
 *
 * 
 *
 * * @remarks Value can be retrieved from value `physical_space_size` of [`v8.getHeapSpaceStatistics()`](https://nodejs.org/api/v8.html#v8getheapspacestatistics)

 *
 */
export const V8JS_HEAP_SPACE_PHYSICAL_SIZE = /** @type {const} */ 'v8js.heap.space.physical_size';

/**
 * Total heap memory size pre-allocated.
 *
 * Instrument: updowncounter
 * Unit: By
 *
 * 
 *
 * * @remarks The value can be retrieved from value `space_size` of [`v8.getHeapSpaceStatistics()`](https://nodejs.org/api/v8.html#v8getheapspacestatistics)

 *
 */
export const V8JS_MEMORY_HEAP_LIMIT = /** @type {const} */ 'v8js.memory.heap.limit';

/**
 * Heap Memory size allocated.
 *
 * Instrument: updowncounter
 * Unit: By
 *
 * 
 *
 * * @remarks The value can be retrieved from value `space_used_size` of [`v8.getHeapSpaceStatistics()`](https://nodejs.org/api/v8.html#v8getheapspacestatistics)

 *
 */
export const V8JS_MEMORY_HEAP_USED = /** @type {const} */ 'v8js.memory.heap.used';

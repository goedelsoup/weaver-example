/** DO NOT EDIT -- THIS FILE HAS BEEN GENERATED BY WEAVER */


/**
 * Total CPU time consumed
 *
 * Instrument: counter
 * Unit: s
 *
 * 
 *
 * * @remarks Total CPU time consumed by the specific container on all available CPU cores

 *
 */
export const CONTAINER_CPU_TIME = /** @type {const} */ 'container.cpu.time';

/**
 * Container's CPU usage, measured in cpus. Range from 0 to the number of allocatable CPUs
 *
 * Instrument: gauge
 * Unit: {cpu}
 *
 * 
 *
 * * @remarks CPU usage of the specific container on all available CPU cores, averaged over the sample window

 *
 */
export const CONTAINER_CPU_USAGE = /** @type {const} */ 'container.cpu.usage';

/**
 * Disk bytes for the container.
 *
 * Instrument: counter
 * Unit: By
 *
 * 
 *
 * * @remarks The total number of bytes read/written successfully (aggregated from all disks).

 *
 */
export const CONTAINER_DISK_IO = /** @type {const} */ 'container.disk.io';

/**
 * Memory usage of the container.
 *
 * Instrument: counter
 * Unit: By
 *
 * 
 *
 * * @remarks Memory usage of the container.

 *
 */
export const CONTAINER_MEMORY_USAGE = /** @type {const} */ 'container.memory.usage';

/**
 * Network bytes for the container.
 *
 * Instrument: counter
 * Unit: By
 *
 * 
 *
 * * @remarks The number of bytes sent/received on all network interfaces by the container.

 *
 */
export const CONTAINER_NETWORK_IO = /** @type {const} */ 'container.network.io';

/**
 * The time the container has been running
 *
 * Instrument: gauge
 * Unit: s
 *
 * 
 *
 * * @remarks Instrumentations SHOULD use a gauge with type `double` and measure uptime in seconds as a floating point number with the highest precision available.
The actual accuracy would depend on the instrumentation and operating system.

 *
 */
export const CONTAINER_UPTIME = /** @type {const} */ 'container.uptime';

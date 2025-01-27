/** DO NOT EDIT -- THIS FILE HAS BEEN GENERATED BY WEAVER */


/**
 * Reports the current frequency of the CPU in Hz
 *
 * Instrument: gauge
 * Unit: {Hz}
 *
 * 
 *
 * 
 */
export const SYSTEM_CPU_FREQUENCY = /** @type {const} */ 'system.cpu.frequency';

/**
 * Reports the number of logical (virtual) processor cores created by the operating system to manage multitasking
 *
 * Instrument: updowncounter
 * Unit: {cpu}
 *
 * 
 *
 * * @remarks Calculated by multiplying the number of sockets by the number of cores per socket, and then by the number of threads per core
 *
 */
export const SYSTEM_CPU_LOGICAL_COUNT = /** @type {const} */ 'system.cpu.logical.count';

/**
 * Reports the number of actual physical processor cores on the hardware
 *
 * Instrument: updowncounter
 * Unit: {cpu}
 *
 * 
 *
 * * @remarks Calculated by multiplying the number of sockets by the number of cores per socket
 *
 */
export const SYSTEM_CPU_PHYSICAL_COUNT = /** @type {const} */ 'system.cpu.physical.count';

/**
 * Seconds each logical CPU spent on each mode
 *
 * Instrument: counter
 * Unit: s
 *
 * 
 *
 * 
 */
export const SYSTEM_CPU_TIME = /** @type {const} */ 'system.cpu.time';

/**
 * Difference in system.cpu.time since the last measurement, divided by the elapsed time and number of logical CPUs
 *
 * Instrument: gauge
 * Unit: 1
 *
 * 
 *
 * 
 */
export const SYSTEM_CPU_UTILIZATION = /** @type {const} */ 'system.cpu.utilization';

/**
 * 
 *
 * Instrument: counter
 * Unit: By
 *
 * 
 *
 * 
 */
export const SYSTEM_DISK_IO = /** @type {const} */ 'system.disk.io';

/**
 * Time disk spent activated
 *
 * Instrument: counter
 * Unit: s
 *
 * 
 *
 * * @remarks The real elapsed time ("wall clock") used in the I/O path (time from operations running in parallel are not counted). Measured as:

- Linux: Field 13 from [procfs-diskstats](https://www.kernel.org/doc/Documentation/ABI/testing/procfs-diskstats)
- Windows: The complement of
  ["Disk\% Idle Time"](https://learn.microsoft.com/archive/blogs/askcore/windows-performance-monitor-disk-counters-explained#windows-performance-monitor-disk-counters-explained)
  performance counter: `uptime * (100 - "Disk\% Idle Time") / 100`

 *
 */
export const SYSTEM_DISK_IO_TIME = /** @type {const} */ 'system.disk.io_time';

/**
 * The total storage capacity of the disk
 *
 * Instrument: updowncounter
 * Unit: By
 *
 * 
 *
 * 
 */
export const SYSTEM_DISK_LIMIT = /** @type {const} */ 'system.disk.limit';

/**
 * 
 *
 * Instrument: counter
 * Unit: {operation}
 *
 * 
 *
 * 
 */
export const SYSTEM_DISK_MERGED = /** @type {const} */ 'system.disk.merged';

/**
 * Sum of the time each operation took to complete
 *
 * Instrument: counter
 * Unit: s
 *
 * 
 *
 * * @remarks Because it is the sum of time each request took, parallel-issued requests each contribute to make the count grow. Measured as:

- Linux: Fields 7 & 11 from [procfs-diskstats](https://www.kernel.org/doc/Documentation/ABI/testing/procfs-diskstats)
- Windows: "Avg. Disk sec/Read" perf counter multiplied by "Disk Reads/sec" perf counter (similar for Writes)

 *
 */
export const SYSTEM_DISK_OPERATION_TIME = /** @type {const} */ 'system.disk.operation_time';

/**
 * 
 *
 * Instrument: counter
 * Unit: {operation}
 *
 * 
 *
 * 
 */
export const SYSTEM_DISK_OPERATIONS = /** @type {const} */ 'system.disk.operations';

/**
 * The total storage capacity of the filesystem
 *
 * Instrument: updowncounter
 * Unit: By
 *
 * 
 *
 * 
 */
export const SYSTEM_FILESYSTEM_LIMIT = /** @type {const} */ 'system.filesystem.limit';

/**
 * Reports a filesystem's space usage across different states.
 *
 * Instrument: updowncounter
 * Unit: By
 *
 * 
 *
 * * @remarks The sum of all `system.filesystem.usage` values over the different `system.filesystem.state` attributes
SHOULD equal the total storage capacity of the filesystem, that is `system.filesystem.limit`.

 *
 */
export const SYSTEM_FILESYSTEM_USAGE = /** @type {const} */ 'system.filesystem.usage';

/**
 * 
 *
 * Instrument: gauge
 * Unit: 1
 *
 * 
 *
 * 
 */
export const SYSTEM_FILESYSTEM_UTILIZATION = /** @type {const} */ 'system.filesystem.utilization';

/**
 * An estimate of how much memory is available for starting new applications, without causing swapping
 *
 * Instrument: updowncounter
 * Unit: By
 *
 * 
 *
 * * @remarks This is an alternative to `system.memory.usage` metric with `state=free`.
Linux starting from 3.14 exports "available" memory. It takes "free" memory as a baseline, and then factors in kernel-specific values.
This is supposed to be more accurate than just "free" memory.
For reference, see the calculations [here](https://superuser.com/a/980821).
See also `MemAvailable` in [/proc/meminfo](https://man7.org/linux/man-pages/man5/proc.5.html).

 *
 */
export const SYSTEM_LINUX_MEMORY_AVAILABLE = /** @type {const} */ 'system.linux.memory.available';

/**
 * Reports the memory used by the Linux kernel for managing caches of frequently used objects.
 *
 * Instrument: updowncounter
 * Unit: By
 *
 * 
 *
 * * @remarks The sum over the `reclaimable` and `unreclaimable` state values in `linux.memory.slab.usage` SHOULD be equal to the total slab memory available on the system.
Note that the total slab memory is not constant and may vary over time.
See also the [Slab allocator](https://blogs.oracle.com/linux/post/understanding-linux-kernel-memory-statistics) and `Slab` in [/proc/meminfo](https://man7.org/linux/man-pages/man5/proc.5.html).

 *
 */
export const SYSTEM_LINUX_MEMORY_SLAB_USAGE = /** @type {const} */ 'system.linux.memory.slab.usage';

/**
 * Total memory available in the system.
 *
 * Instrument: updowncounter
 * Unit: By
 *
 * 
 *
 * * @remarks Its value SHOULD equal the sum of `system.memory.state` over all states.

 *
 */
export const SYSTEM_MEMORY_LIMIT = /** @type {const} */ 'system.memory.limit';

/**
 * Shared memory used (mostly by tmpfs).
 *
 * Instrument: updowncounter
 * Unit: By
 *
 * 
 *
 * * @remarks Equivalent of `shared` from [`free` command](https://man7.org/linux/man-pages/man1/free.1.html) or
`Shmem` from [`/proc/meminfo`](https://man7.org/linux/man-pages/man5/proc.5.html)"

 *
 */
export const SYSTEM_MEMORY_SHARED = /** @type {const} */ 'system.memory.shared';

/**
 * Reports memory in use by state.
 *
 * Instrument: updowncounter
 * Unit: By
 *
 * 
 *
 * * @remarks The sum over all `system.memory.state` values SHOULD equal the total memory
available on the system, that is `system.memory.limit`.

 *
 */
export const SYSTEM_MEMORY_USAGE = /** @type {const} */ 'system.memory.usage';

/**
 * 
 *
 * Instrument: gauge
 * Unit: 1
 *
 * 
 *
 * 
 */
export const SYSTEM_MEMORY_UTILIZATION = /** @type {const} */ 'system.memory.utilization';

/**
 * 
 *
 * Instrument: updowncounter
 * Unit: {connection}
 *
 * 
 *
 * 
 */
export const SYSTEM_NETWORK_CONNECTIONS = /** @type {const} */ 'system.network.connections';

/**
 * Count of packets that are dropped or discarded even though there was no error
 *
 * Instrument: counter
 * Unit: {packet}
 *
 * 
 *
 * * @remarks Measured as:

- Linux: the `drop` column in `/proc/dev/net` ([source](https://web.archive.org/web/20180321091318/http://www.onlamp.com/pub/a/linux/2000/11/16/LinuxAdmin.html))
- Windows: [`InDiscards`/`OutDiscards`](https://docs.microsoft.com/windows/win32/api/netioapi/ns-netioapi-mib_if_row2)
  from [`GetIfEntry2`](https://docs.microsoft.com/windows/win32/api/netioapi/nf-netioapi-getifentry2)

 *
 */
export const SYSTEM_NETWORK_DROPPED = /** @type {const} */ 'system.network.dropped';

/**
 * Count of network errors detected
 *
 * Instrument: counter
 * Unit: {error}
 *
 * 
 *
 * * @remarks Measured as:

- Linux: the `errs` column in `/proc/dev/net` ([source](https://web.archive.org/web/20180321091318/http://www.onlamp.com/pub/a/linux/2000/11/16/LinuxAdmin.html)).
- Windows: [`InErrors`/`OutErrors`](https://docs.microsoft.com/windows/win32/api/netioapi/ns-netioapi-mib_if_row2)
  from [`GetIfEntry2`](https://docs.microsoft.com/windows/win32/api/netioapi/nf-netioapi-getifentry2).

 *
 */
export const SYSTEM_NETWORK_ERRORS = /** @type {const} */ 'system.network.errors';

/**
 * 
 *
 * Instrument: counter
 * Unit: By
 *
 * 
 *
 * 
 */
export const SYSTEM_NETWORK_IO = /** @type {const} */ 'system.network.io';

/**
 * 
 *
 * Instrument: counter
 * Unit: {packet}
 *
 * 
 *
 * 
 */
export const SYSTEM_NETWORK_PACKETS = /** @type {const} */ 'system.network.packets';

/**
 * 
 *
 * Instrument: counter
 * Unit: {fault}
 *
 * 
 *
 * 
 */
export const SYSTEM_PAGING_FAULTS = /** @type {const} */ 'system.paging.faults';

/**
 * 
 *
 * Instrument: counter
 * Unit: {operation}
 *
 * 
 *
 * 
 */
export const SYSTEM_PAGING_OPERATIONS = /** @type {const} */ 'system.paging.operations';

/**
 * Unix swap or windows pagefile usage
 *
 * Instrument: updowncounter
 * Unit: By
 *
 * 
 *
 * 
 */
export const SYSTEM_PAGING_USAGE = /** @type {const} */ 'system.paging.usage';

/**
 * 
 *
 * Instrument: gauge
 * Unit: 1
 *
 * 
 *
 * 
 */
export const SYSTEM_PAGING_UTILIZATION = /** @type {const} */ 'system.paging.utilization';

/**
 * Total number of processes in each state
 *
 * Instrument: updowncounter
 * Unit: {process}
 *
 * 
 *
 * 
 */
export const SYSTEM_PROCESS_COUNT = /** @type {const} */ 'system.process.count';

/**
 * Total number of processes created over uptime of the host
 *
 * Instrument: counter
 * Unit: {process}
 *
 * 
 *
 * 
 */
export const SYSTEM_PROCESS_CREATED = /** @type {const} */ 'system.process.created';

/**
 * The time the system has been running
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
export const SYSTEM_UPTIME = /** @type {const} */ 'system.uptime';

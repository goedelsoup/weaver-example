/** DO NOT EDIT -- THIS FILE HAS BEEN GENERATED BY WEAVER */


/**
 * The command used to run the container (i.e. the command name).

 *
 * 
 *
 * * @example ["otelcontribcol"]
 *
 */
export const CONTAINER_COMMAND = /** @type {const} */ 'container.command';

/**
 * All the command arguments (including the command/executable itself) run by the container.

 *
 * 
 *
 * * @example [["otelcontribcol", "--config", "config.yaml"]]
 *
 */
export const CONTAINER_COMMAND_ARGS = /** @type {const} */ 'container.command_args';

/**
 * The full command run by the container as a single string representing the full command.

 *
 * 
 *
 * * @example ["otelcontribcol --config config.yaml"]
 *
 */
export const CONTAINER_COMMAND_LINE = /** @type {const} */ 'container.command_line';

/**
 * The name of the CSI ([Container Storage Interface](https://github.com/container-storage-interface/spec)) plugin used by the volume.

 *
 * 
 *
 * * @example ["pd.csi.storage.gke.io"]
 *
 */
export const CONTAINER_CSI_PLUGIN_NAME = /** @type {const} */ 'container.csi.plugin.name';

/**
 * The unique volume ID returned by the CSI ([Container Storage Interface](https://github.com/container-storage-interface/spec)) plugin.

 *
 * 
 *
 * * @example ["projects/my-gcp-project/zones/my-gcp-zone/disks/my-gcp-disk"]
 *
 */
export const CONTAINER_CSI_VOLUME_ID = /** @type {const} */ 'container.csi.volume.id';

/**
 * Container ID. Usually a UUID, as for example used to [identify Docker containers](https://docs.docker.com/engine/containers/run/#container-identification). The UUID might be abbreviated.

 *
 * 
 *
 * * @example ["a3bf90e006b2"]
 *
 */
export const CONTAINER_ID = /** @type {const} */ 'container.id';

/**
 * Runtime specific image identifier. Usually a hash algorithm followed by a UUID.

 *
 * 
 *
 * * @example ["sha256:19c92d0a00d1b66d897bceaa7319bee0dd38a10a851c60bcec9474aa3f01e50f"]
 *
 */
export const CONTAINER_IMAGE_ID = /** @type {const} */ 'container.image.id';

/**
 * Name of the image the container was built on.

 *
 * 
 *
 * * @example ["gcr.io/opentelemetry/operator"]
 *
 */
export const CONTAINER_IMAGE_NAME = /** @type {const} */ 'container.image.name';

/**
 * Repo digests of the container image as provided by the container runtime.

 *
 * 
 *
 * * @example [["example@sha256:afcc7f1ac1b49db317a7196c902e61c6c3c4607d63599ee1a82d702d249a0ccb", "internal.registry.example.com:5000/example@sha256:b69959407d21e8a062e0416bf13405bb2b71ed7a84dde4158ebafacfa06f5578"]]
 *
 */
export const CONTAINER_IMAGE_REPO_DIGESTS = /** @type {const} */ 'container.image.repo_digests';

/**
 * Container image tags. An example can be found in [Docker Image Inspect](https://docs.docker.com/engine/api/v1.43/#tag/Image/operation/ImageInspect). Should be only the `<tag>` section of the full name for example from `registry.example.com/my-org/my-image:<tag>`.

 *
 * 
 *
 * * @example [["v1.27.1", "3.5.7-0"]]
 *
 */
export const CONTAINER_IMAGE_TAGS = /** @type {const} */ 'container.image.tags';

/**
 * Container labels, `<key>` being the label name, the value being the label value.

 *
 * 
 *
 * * @example ["container.label.app=nginx"]
 *
 */
export const CONTAINER_LABEL = /** @type {const} */ 'container.label';

/**
 * Container name used by container runtime.

 *
 * 
 *
 * * @example ["opentelemetry-autoconf"]
 *
 */
export const CONTAINER_NAME = /** @type {const} */ 'container.name';

/**
 * The container runtime managing this container.

 *
 * 
 *
 * * @example ["docker", "containerd", "rkt"]
 *
 */
export const CONTAINER_RUNTIME = /** @type {const} */ 'container.runtime';

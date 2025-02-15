/** DO NOT EDIT -- THIS FILE HAS BEEN GENERATED BY WEAVER */


/**
 * The ID of the change (pull request/merge request/changelist) if applicable. This is usually a unique (within repository) identifier generated by the VCS system.

 *
 * 
 *
 * * @example ["123"]
 *
 */
export const VCS_CHANGE_ID = /** @type {const} */ 'vcs.change.id';

/**
 * The state of the change (pull request/merge request/changelist).

 *
 * 
 *
 * * @example ["open", "closed", "merged"]
 *
 */
export const VCS_CHANGE_STATE = /** @type {const} */ 'vcs.change.state';

/**
 * The human readable title of the change (pull request/merge request/changelist). This title is often a brief summary of the change and may get merged in to a ref as the commit summary.

 *
 * 
 *
 * * @example ["Fixes broken thing", "feat: add my new feature", "[chore] update dependency"]
 *
 */
export const VCS_CHANGE_TITLE = /** @type {const} */ 'vcs.change.title';

/**
 * The type of line change being measured on a branch or change.

 *
 * 
 *
 * * @example ["added", "removed"]
 *
 */
export const VCS_LINE_CHANGE_TYPE = /** @type {const} */ 'vcs.line_change.type';

/**
 * The name of the [reference](https://git-scm.com/docs/gitglossary#def_ref) such as **branch** or **tag** in the repository.

 *
 * 
 *
 * * @example ["my-feature-branch", "tag-1-test"]
 *
 */
export const VCS_REF_BASE_NAME = /** @type {const} */ 'vcs.ref.base.name';

/**
 * The revision, literally [revised version](https://www.merriam-webster.com/dictionary/revision), The revision most often refers to a commit object in Git, or a revision number in SVN.

 *
 * 
 *
 * * @example ["9d59409acf479dfa0df1aa568182e43e43df8bbe28d60fcf2bc52e30068802cc", "main", "123", "HEAD"]
 *
 */
export const VCS_REF_BASE_REVISION = /** @type {const} */ 'vcs.ref.base.revision';

/**
 * The type of the [reference](https://git-scm.com/docs/gitglossary#def_ref) in the repository.

 *
 * 
 *
 * * @example ["branch", "tag"]
 *
 */
export const VCS_REF_BASE_TYPE = /** @type {const} */ 'vcs.ref.base.type';

/**
 * The name of the [reference](https://git-scm.com/docs/gitglossary#def_ref) such as **branch** or **tag** in the repository.

 *
 * 
 *
 * * @example ["my-feature-branch", "tag-1-test"]
 *
 */
export const VCS_REF_HEAD_NAME = /** @type {const} */ 'vcs.ref.head.name';

/**
 * The revision, literally [revised version](https://www.merriam-webster.com/dictionary/revision), The revision most often refers to a commit object in Git, or a revision number in SVN.

 *
 * 
 *
 * * @example ["9d59409acf479dfa0df1aa568182e43e43df8bbe28d60fcf2bc52e30068802cc", "main", "123", "HEAD"]
 *
 */
export const VCS_REF_HEAD_REVISION = /** @type {const} */ 'vcs.ref.head.revision';

/**
 * The type of the [reference](https://git-scm.com/docs/gitglossary#def_ref) in the repository.

 *
 * 
 *
 * * @example ["branch", "tag"]
 *
 */
export const VCS_REF_HEAD_TYPE = /** @type {const} */ 'vcs.ref.head.type';

/**
 * The type of the [reference](https://git-scm.com/docs/gitglossary#def_ref) in the repository.

 *
 * 
 *
 * * @example ["branch", "tag"]
 *
 */
export const VCS_REF_TYPE = /** @type {const} */ 'vcs.ref.type';

/**
 * The human readable name of the repository. It SHOULD NOT include any additional identifier like Group/SubGroup in GitLab or organization in GitHub.

 *
 * 
 *
 * * @example ["semantic-conventions", "my-cool-repo"]
 *
 */
export const VCS_REPOSITORY_NAME = /** @type {const} */ 'vcs.repository.name';

/**
 * The [canonical URL](https://support.google.com/webmasters/answer/10347851?hl=en#:~:text=A%20canonical%20URL%20is%20the,Google%20chooses%20one%20as%20canonical.) of the repository providing the complete HTTP(S) address in order to locate and identify the repository through a browser.

 *
 * 
 *
 * * @example ["https://github.com/opentelemetry/open-telemetry-collector-contrib", "https://gitlab.com/my-org/my-project/my-projects-project/repo"]
 *
 */
export const VCS_REPOSITORY_URL_FULL = /** @type {const} */ 'vcs.repository.url.full';

/**
 * The type of revision comparison.

 *
 * 
 *
 * * @example ["ahead", "behind"]
 *
 */
export const VCS_REVISION_DELTA_DIRECTION = /** @type {const} */ 'vcs.revision_delta.direction';

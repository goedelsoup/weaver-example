/** DO NOT EDIT -- THIS FILE HAS BEEN GENERATED BY WEAVER */


/**
 * The JSON-serialized value of each item in the `AttributeDefinitions` request field.
 *
 * 
 *
 * * @example [["{ \"AttributeName\": \"string\", \"AttributeType\": \"string\" }"]]
 *
 */
export const AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = /** @type {const} */ 'aws.dynamodb.attribute_definitions';

/**
 * The value of the `AttributesToGet` request parameter.
 *
 * 
 *
 * * @example [["lives", "id"]]
 *
 */
export const AWS_DYNAMODB_ATTRIBUTES_TO_GET = /** @type {const} */ 'aws.dynamodb.attributes_to_get';

/**
 * The value of the `ConsistentRead` request parameter.
 *
 * 
 *
 * 
 */
export const AWS_DYNAMODB_CONSISTENT_READ = /** @type {const} */ 'aws.dynamodb.consistent_read';

/**
 * The JSON-serialized value of each item in the `ConsumedCapacity` response field.
 *
 * 
 *
 * * @example [["{ \"CapacityUnits\": number, \"GlobalSecondaryIndexes\": { \"string\" : { \"CapacityUnits\": number, \"ReadCapacityUnits\": number, \"WriteCapacityUnits\": number } }, \"LocalSecondaryIndexes\": { \"string\" : { \"CapacityUnits\": number, \"ReadCapacityUnits\": number, \"WriteCapacityUnits\": number } }, \"ReadCapacityUnits\": number, \"Table\": { \"CapacityUnits\": number, \"ReadCapacityUnits\": number, \"WriteCapacityUnits\": number }, \"TableName\": \"string\", \"WriteCapacityUnits\": number }"]]
 *
 */
export const AWS_DYNAMODB_CONSUMED_CAPACITY = /** @type {const} */ 'aws.dynamodb.consumed_capacity';

/**
 * The value of the `Count` response parameter.
 *
 * 
 *
 * * @example [10]
 *
 */
export const AWS_DYNAMODB_COUNT = /** @type {const} */ 'aws.dynamodb.count';

/**
 * The value of the `ExclusiveStartTableName` request parameter.
 *
 * 
 *
 * * @example ["Users", "CatsTable"]
 *
 */
export const AWS_DYNAMODB_EXCLUSIVE_START_TABLE = /** @type {const} */ 'aws.dynamodb.exclusive_start_table';

/**
 * The JSON-serialized value of each item in the `GlobalSecondaryIndexUpdates` request field.
 *
 * 
 *
 * * @example [["{ \"Create\": { \"IndexName\": \"string\", \"KeySchema\": [ { \"AttributeName\": \"string\", \"KeyType\": \"string\" } ], \"Projection\": { \"NonKeyAttributes\": [ \"string\" ], \"ProjectionType\": \"string\" }, \"ProvisionedThroughput\": { \"ReadCapacityUnits\": number, \"WriteCapacityUnits\": number } }"]]
 *
 */
export const AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = /** @type {const} */ 'aws.dynamodb.global_secondary_index_updates';

/**
 * The JSON-serialized value of each item of the `GlobalSecondaryIndexes` request field
 *
 * 
 *
 * * @example [["{ \"IndexName\": \"string\", \"KeySchema\": [ { \"AttributeName\": \"string\", \"KeyType\": \"string\" } ], \"Projection\": { \"NonKeyAttributes\": [ \"string\" ], \"ProjectionType\": \"string\" }, \"ProvisionedThroughput\": { \"ReadCapacityUnits\": number, \"WriteCapacityUnits\": number } }"]]
 *
 */
export const AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = /** @type {const} */ 'aws.dynamodb.global_secondary_indexes';

/**
 * The value of the `IndexName` request parameter.
 *
 * 
 *
 * * @example ["name_to_group"]
 *
 */
export const AWS_DYNAMODB_INDEX_NAME = /** @type {const} */ 'aws.dynamodb.index_name';

/**
 * The JSON-serialized value of the `ItemCollectionMetrics` response field.
 *
 * 
 *
 * * @example ["{ \"string\" : [ { \"ItemCollectionKey\": { \"string\" : { \"B\": blob, \"BOOL\": boolean, \"BS\": [ blob ], \"L\": [ \"AttributeValue\" ], \"M\": { \"string\" : \"AttributeValue\" }, \"N\": \"string\", \"NS\": [ \"string\" ], \"NULL\": boolean, \"S\": \"string\", \"SS\": [ \"string\" ] } }, \"SizeEstimateRangeGB\": [ number ] } ] }"]
 *
 */
export const AWS_DYNAMODB_ITEM_COLLECTION_METRICS = /** @type {const} */ 'aws.dynamodb.item_collection_metrics';

/**
 * The value of the `Limit` request parameter.
 *
 * 
 *
 * * @example [10]
 *
 */
export const AWS_DYNAMODB_LIMIT = /** @type {const} */ 'aws.dynamodb.limit';

/**
 * The JSON-serialized value of each item of the `LocalSecondaryIndexes` request field.
 *
 * 
 *
 * * @example [["{ \"IndexArn\": \"string\", \"IndexName\": \"string\", \"IndexSizeBytes\": number, \"ItemCount\": number, \"KeySchema\": [ { \"AttributeName\": \"string\", \"KeyType\": \"string\" } ], \"Projection\": { \"NonKeyAttributes\": [ \"string\" ], \"ProjectionType\": \"string\" } }"]]
 *
 */
export const AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = /** @type {const} */ 'aws.dynamodb.local_secondary_indexes';

/**
 * The value of the `ProjectionExpression` request parameter.
 *
 * 
 *
 * * @example ["Title", "Title, Price, Color", "Title, Description, RelatedItems, ProductReviews"]
 *
 */
export const AWS_DYNAMODB_PROJECTION = /** @type {const} */ 'aws.dynamodb.projection';

/**
 * The value of the `ProvisionedThroughput.ReadCapacityUnits` request parameter.
 *
 * 
 *
 * * @example [1.0, 2.0]
 *
 */
export const AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = /** @type {const} */ 'aws.dynamodb.provisioned_read_capacity';

/**
 * The value of the `ProvisionedThroughput.WriteCapacityUnits` request parameter.
 *
 * 
 *
 * * @example [1.0, 2.0]
 *
 */
export const AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = /** @type {const} */ 'aws.dynamodb.provisioned_write_capacity';

/**
 * The value of the `ScanIndexForward` request parameter.
 *
 * 
 *
 * 
 */
export const AWS_DYNAMODB_SCAN_FORWARD = /** @type {const} */ 'aws.dynamodb.scan_forward';

/**
 * The value of the `ScannedCount` response parameter.
 *
 * 
 *
 * * @example [50]
 *
 */
export const AWS_DYNAMODB_SCANNED_COUNT = /** @type {const} */ 'aws.dynamodb.scanned_count';

/**
 * The value of the `Segment` request parameter.
 *
 * 
 *
 * * @example [10]
 *
 */
export const AWS_DYNAMODB_SEGMENT = /** @type {const} */ 'aws.dynamodb.segment';

/**
 * The value of the `Select` request parameter.
 *
 * 
 *
 * * @example ["ALL_ATTRIBUTES", "COUNT"]
 *
 */
export const AWS_DYNAMODB_SELECT = /** @type {const} */ 'aws.dynamodb.select';

/**
 * The number of items in the `TableNames` response parameter.
 *
 * 
 *
 * * @example [20]
 *
 */
export const AWS_DYNAMODB_TABLE_COUNT = /** @type {const} */ 'aws.dynamodb.table_count';

/**
 * The keys in the `RequestItems` object field.
 *
 * 
 *
 * * @example [["Users", "Cats"]]
 *
 */
export const AWS_DYNAMODB_TABLE_NAMES = /** @type {const} */ 'aws.dynamodb.table_names';

/**
 * The value of the `TotalSegments` request parameter.
 *
 * 
 *
 * * @example [100]
 *
 */
export const AWS_DYNAMODB_TOTAL_SEGMENTS = /** @type {const} */ 'aws.dynamodb.total_segments';

/**
 * The ARN of an [ECS cluster](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/clusters.html).

 *
 * 
 *
 * * @example ["arn:aws:ecs:us-west-2:123456789123:cluster/my-cluster"]
 *
 */
export const AWS_ECS_CLUSTER_ARN = /** @type {const} */ 'aws.ecs.cluster.arn';

/**
 * The Amazon Resource Name (ARN) of an [ECS container instance](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_instances.html).

 *
 * 
 *
 * * @example ["arn:aws:ecs:us-west-1:123456789123:container/32624152-9086-4f0e-acae-1a75b14fe4d9"]
 *
 */
export const AWS_ECS_CONTAINER_ARN = /** @type {const} */ 'aws.ecs.container.arn';

/**
 * The [launch type](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) for an ECS task.

 *
 * 
 *
 * 
 */
export const AWS_ECS_LAUNCHTYPE = /** @type {const} */ 'aws.ecs.launchtype';

/**
 * The ARN of a running [ECS task](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html#ecs-resource-ids).

 *
 * 
 *
 * * @example ["arn:aws:ecs:us-west-1:123456789123:task/10838bed-421f-43ef-870a-f43feacbbb5b", "arn:aws:ecs:us-west-1:123456789123:task/my-cluster/task-id/23ebb8ac-c18f-46c6-8bbe-d55d0e37cfbd"]
 *
 */
export const AWS_ECS_TASK_ARN = /** @type {const} */ 'aws.ecs.task.arn';

/**
 * The family name of the [ECS task definition](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html) used to create the ECS task.

 *
 * 
 *
 * * @example ["opentelemetry-family"]
 *
 */
export const AWS_ECS_TASK_FAMILY = /** @type {const} */ 'aws.ecs.task.family';

/**
 * The ID of a running ECS task. The ID MUST be extracted from `task.arn`.

 *
 * 
 *
 * * @example ["10838bed-421f-43ef-870a-f43feacbbb5b", "23ebb8ac-c18f-46c6-8bbe-d55d0e37cfbd"]
 *
 */
export const AWS_ECS_TASK_ID = /** @type {const} */ 'aws.ecs.task.id';

/**
 * The revision for the task definition used to create the ECS task.

 *
 * 
 *
 * * @example ["8", "26"]
 *
 */
export const AWS_ECS_TASK_REVISION = /** @type {const} */ 'aws.ecs.task.revision';

/**
 * The ARN of an EKS cluster.

 *
 * 
 *
 * * @example ["arn:aws:ecs:us-west-2:123456789123:cluster/my-cluster"]
 *
 */
export const AWS_EKS_CLUSTER_ARN = /** @type {const} */ 'aws.eks.cluster.arn';

/**
 * The AWS extended request ID as returned in the response header `x-amz-id-2`.
 *
 * 
 *
 * * @example ["wzHcyEWfmOGDIE5QOhTAqFDoDWP3y8IUvpNINCwL9N4TEHbUw0/gZJ+VZTmCNCWR7fezEN3eCiQ="]
 *
 */
export const AWS_EXTENDED_REQUEST_ID = /** @type {const} */ 'aws.extended_request_id';

/**
 * The full invoked ARN as provided on the `Context` passed to the function (`Lambda-Runtime-Invoked-Function-Arn` header on the `/runtime/invocation/next` applicable).

 *
 * 
 *
 * * @example ["arn:aws:lambda:us-east-1:123456:function:myfunction:myalias"]
 *
 */
export const AWS_LAMBDA_INVOKED_ARN = /** @type {const} */ 'aws.lambda.invoked_arn';

/**
 * The Amazon Resource Name(s) (ARN) of the AWS log group(s).

 *
 * 
 *
 * * @example [["arn:aws:logs:us-west-1:123456789012:log-group:/aws/my/group:*"]]
 *
 */
export const AWS_LOG_GROUP_ARNS = /** @type {const} */ 'aws.log.group.arns';

/**
 * The name(s) of the AWS log group(s) an application is writing to.

 *
 * 
 *
 * * @example [["/aws/lambda/my-function", "opentelemetry-service"]]
 *
 */
export const AWS_LOG_GROUP_NAMES = /** @type {const} */ 'aws.log.group.names';

/**
 * The ARN(s) of the AWS log stream(s).

 *
 * 
 *
 * * @example [["arn:aws:logs:us-west-1:123456789012:log-group:/aws/my/group:log-stream:logs/main/10838bed-421f-43ef-870a-f43feacbbb5b"]]
 *
 */
export const AWS_LOG_STREAM_ARNS = /** @type {const} */ 'aws.log.stream.arns';

/**
 * The name(s) of the AWS log stream(s) an application is writing to.

 *
 * 
 *
 * * @example [["logs/main/10838bed-421f-43ef-870a-f43feacbbb5b"]]
 *
 */
export const AWS_LOG_STREAM_NAMES = /** @type {const} */ 'aws.log.stream.names';

/**
 * The AWS request ID as returned in the response headers `x-amzn-requestid`, `x-amzn-request-id` or `x-amz-request-id`.
 *
 * 
 *
 * * @example ["79b9da39-b7ae-508a-a6bc-864b2829c622", "C9ER4AJX75574TDJ"]
 *
 */
export const AWS_REQUEST_ID = /** @type {const} */ 'aws.request_id';

/**
 * The S3 bucket name the request refers to. Corresponds to the `--bucket` parameter of the [S3 API](https://docs.aws.amazon.com/cli/latest/reference/s3api/index.html) operations.
 *
 * 
 *
 * * @example ["some-bucket-name"]
 *
 */
export const AWS_S3_BUCKET = /** @type {const} */ 'aws.s3.bucket';

/**
 * The source object (in the form `bucket`/`key`) for the copy operation.
 *
 * 
 *
 * * @example ["someFile.yml"]
 *
 */
export const AWS_S3_COPY_SOURCE = /** @type {const} */ 'aws.s3.copy_source';

/**
 * The delete request container that specifies the objects to be deleted.
 *
 * 
 *
 * * @example ["Objects=[{Key=string,VersionId=string},{Key=string,VersionId=string}],Quiet=boolean"]
 *
 */
export const AWS_S3_DELETE = /** @type {const} */ 'aws.s3.delete';

/**
 * The S3 object key the request refers to. Corresponds to the `--key` parameter of the [S3 API](https://docs.aws.amazon.com/cli/latest/reference/s3api/index.html) operations.
 *
 * 
 *
 * * @example ["someFile.yml"]
 *
 */
export const AWS_S3_KEY = /** @type {const} */ 'aws.s3.key';

/**
 * The part number of the part being uploaded in a multipart-upload operation. This is a positive integer between 1 and 10,000.
 *
 * 
 *
 * * @example [3456]
 *
 */
export const AWS_S3_PART_NUMBER = /** @type {const} */ 'aws.s3.part_number';

/**
 * Upload ID that identifies the multipart upload.
 *
 * 
 *
 * * @example ["dfRtDYWFbkRONycy.Yxwh66Yjlx.cph0gtNBtJ"]
 *
 */
export const AWS_S3_UPLOAD_ID = /** @type {const} */ 'aws.s3.upload_id';

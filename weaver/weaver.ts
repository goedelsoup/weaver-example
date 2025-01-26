import os from 'node:os';
import path from 'node:path';

import type {
    StartedTestContainer,
    TestContainer
} from "testcontainers";
import { GenericContainer } from "testcontainers";

const WEAVER_IMAGE = process.env.WEAVER_IMAGE || "otel/weaver";
const WEAVER_VERSION = process.env.WEAVER_VERSION || "v0.12.0";

const WEAVER_HOME = process.env.WEAVER_HOME || ".";
const WEAVER_TARGET = process.env.WEAVER_TARGET || "../packages/semconv";

const args = process.argv.slice(2);

const WEAVER_REGISTRY_CMD = ["/weaver/weaver", "registry"];

const makeContainer = async () => {
    const home = path.resolve(WEAVER_HOME);
    const target = path.resolve(WEAVER_TARGET);
    console.log(`Creating mounts for HOME[${home}] and TARGET[${target}]`);

    const user = os.userInfo();
    console.log(`Using user ${user.username} with uid[${user.uid}] and gid[${user.gid}]`);

    const baseContainer: Promise<StartedTestContainer> = new GenericContainer(`${WEAVER_IMAGE}:${WEAVER_VERSION}`)
        .withLogConsumer(stream => {
            stream.on('data', line => console.log(line));
            stream.on('err', line => console.error(line));
        })
        .withReuse()
        .withUser(`${user.uid}:${user.gid}`)
        .withEnvironment({
            HOME: "/tmp/weaver",
        })
        .withBindMounts([
            {
                source: target,
                target: "/home/weaver/target",
            },
            {
                source: `${home}/model`,
                target: "/home/weaver/model",
                mode: "ro",
            },
            {
                source: `${home}/policies`,
                target: "/home/weaver/policies",
                mode: "ro",
            },
            {
                source: `${home}/schemas`,
                target: "/home/weaver/schemas",
                mode: "ro",
            },
            {
                source: `${home}/templates`,
                target: "/home/weaver/templates",
                mode: "ro",
            },
        ])
        .withEntrypoint(["sleep"])
        .withCommand(["3600"])
        .start();
    return baseContainer;
}

async function runCommand(container: StartedTestContainer) {
    const mountConfig = ["-r" ,"/home/weaver/model", "-t", "/home/weaver/templates"];
    const subcommand = args[0] === 'generate' ? ["generate", ...mountConfig, args[1], "/home/weaver/target/src"] : [args[0]];
    return container.exec([...WEAVER_REGISTRY_CMD, ...subcommand])
        .then(c => {
            console.log(c.stdout);
            return c;
        })
        .then(() => container);
};

makeContainer()
    .then(runCommand)
    .then((c) => c.stop());

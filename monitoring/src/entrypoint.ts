
import { App } from "cdktf";

import { Monitoring } from "./stack";

async function main() {
    const app = new App({
        context: {},
    });

    new Monitoring(app, "monitoring");

    await app.synth();
}

main();

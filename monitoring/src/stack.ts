
import { TerraformStack } from 'cdktf';
import type { Construct } from 'constructs';

import { type Dashboard, defaultDashboard } from "@grafana/schema";

export class Monitoring extends TerraformStack {
    application: Dashboard;
    constructor(scope: Construct, name: string) {
        super(scope, name);

        this.application = {
            ...defaultDashboard,
            title: 'My Pet Store',
            description: 'Top-level dashboard for the Pet Store application',
            editable: false,
        };
    }
}
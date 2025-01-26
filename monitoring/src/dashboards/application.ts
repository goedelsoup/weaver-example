
import { Construct } from 'constructs';

import { type Dashboard, defaultDashboard } from "@grafana/schema";

export class ApplicationDashboard extends Construct {
    readonly definition: Dashboard;
    constructor(scope: Construct, name: string) {
        super(scope, name);

        this.definition = {
            ...defaultDashboard,
            title: 'My Pet Store',
            description: 'Top-level dashboard for the Pet Store application',
            editable: false,
        };
    }
}

import { cosmiconfig, type CosmiconfigResult } from 'cosmiconfig';

import { validateConfig } from './config';
import { importRegistries } from './registry';

const explorer = cosmiconfig('registry-importer');
const makeConfig: () => Promise<CosmiconfigResult> = async () => explorer.search();

makeConfig()
    .then(validateConfig)
    .then(importRegistries);
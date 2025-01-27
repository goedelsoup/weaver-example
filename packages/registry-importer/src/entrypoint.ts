
import { cosmiconfig, type CosmiconfigResult } from 'cosmiconfig';

import { validateConfig } from './config';
import { importRegistries } from './registry';
import { name } from 'tar/dist/commonjs/types';

const explorer = cosmiconfig('registry-importer');
const makeConfig: () => Promise<CosmiconfigResult> = async () => explorer.search();

await makeConfig()
    .then(validateConfig)
    .then(importRegistries);
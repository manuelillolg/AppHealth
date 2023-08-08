import { CQMetadata } from '@aurorajs.dev/core';

export class AppHealthRawSQLInfrastuctureProvidersQuery
{
    constructor(
        public readonly rawSQL?: string,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
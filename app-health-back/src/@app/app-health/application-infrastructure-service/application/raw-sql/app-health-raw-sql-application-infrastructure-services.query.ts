import { CQMetadata } from '@aurorajs.dev/core';

export class AppHealthRawSQLApplicationInfrastructureServicesQuery
{
    constructor(
        public readonly rawSQL?: string,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
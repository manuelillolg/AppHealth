import { CQMetadata } from '@aurorajs.dev/core';

export class AppHealthCreateApplicationApiCommand
{
    constructor(
        public readonly payload: {
            id: string;
            applicationId: string;
            apiInterfaceTypeId: string;
            score: number;
            documentations?: string;
            requestsPerDay: number;
            applicationInfrastructureServiceId: string;
        },
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
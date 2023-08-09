import { CQMetadata } from '@aurorajs.dev/core';

export class  AppHealthCreateApplicationInfrastructureServicesCommand
{
    constructor(
        public readonly payload: {
            id: string;
            applicationId: string;
            infrastructureServiceId: string;
            averageCostPerYear?: number;
            score: number;
        } [],
        public readonly cQMetadata?: CQMetadata,
    ) {}
}

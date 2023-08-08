import { CQMetadata } from '@aurorajs.dev/core';

export class  AppHealthCreateApplicationsCommand
{
    constructor(
        public readonly payload: {
            id: string;
            technicalSolutionId: string;
            name: string;
            description?: string;
            businessImpact?: string;
            type: string;
            releaseDate: string;
            architectureDiagram: string;
            hasTenants: boolean;
            hasLicensing: boolean;
            costLicensesPerYear: number;
            requestsPerDay: number;
            views: string;
            authentications: string;
            authorizations: string;
            languages: string;
            infrastructureServices: string;
            databases: string;
            apis: string;
            integrations: string;
        } [],
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
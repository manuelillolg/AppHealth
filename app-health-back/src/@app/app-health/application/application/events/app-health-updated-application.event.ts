export class AppHealthUpdatedApplicationEvent
{
    constructor(
        public readonly id: string,
        public readonly technicalSolutionId: string,
        public readonly name: string,
        public readonly description: string,
        public readonly businessImpact: string,
        public readonly type: string,
        public readonly releaseDate: string,
        public readonly architectureDiagram: string,
        public readonly hasTenants: boolean,
        public readonly hasLicensing: boolean,
        public readonly costLicensesPerYear: number,
        public readonly requestsPerDay: number,
        public readonly views: string,
        public readonly authentications: string,
        public readonly authorizations: string,
        public readonly languages: string,
        public readonly infrastructureServices: string,
        public readonly databases: string,
        public readonly apis: string,
        public readonly integrations: string,
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
    ) {}
}
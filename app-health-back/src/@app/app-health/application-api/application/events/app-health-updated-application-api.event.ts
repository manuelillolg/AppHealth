export class AppHealthUpdatedApplicationApiEvent
{
    constructor(
        public readonly id: string,
        public readonly applicationId: string,
        public readonly apiInterfaceTypeId: string,
        public readonly score: number,
        public readonly documentations: string,
        public readonly requestsPerDay: number,
        public readonly applicationInfrastructureServiceId: string,
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
    ) {}
}
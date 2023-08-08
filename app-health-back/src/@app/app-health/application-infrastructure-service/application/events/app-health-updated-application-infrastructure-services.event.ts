import { AppHealthUpdatedApplicationInfrastructureServiceEvent } from './app-health-updated-application-infrastructure-service.event';

export class AppHealthUpdatedApplicationInfrastructureServicesEvent
{
    constructor(
        public readonly applicationInfrastructureServices: AppHealthUpdatedApplicationInfrastructureServiceEvent[],
    ) {}
}
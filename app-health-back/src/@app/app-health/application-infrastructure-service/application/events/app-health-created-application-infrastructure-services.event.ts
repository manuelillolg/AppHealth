import { AppHealthCreatedApplicationInfrastructureServiceEvent } from './app-health-created-application-infrastructure-service.event';

export class AppHealthCreatedApplicationInfrastructureServicesEvent
{
    constructor(
        public readonly applicationInfrastructureServices: AppHealthCreatedApplicationInfrastructureServiceEvent[],
    ) {}
}
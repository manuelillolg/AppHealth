import { AppHealthDeletedApplicationInfrastructureServiceEvent } from './app-health-deleted-application-infrastructure-service.event';

export class AppHealthDeletedApplicationInfrastructureServicesEvent
{
    constructor(
        public readonly applicationInfrastructureServices: AppHealthDeletedApplicationInfrastructureServiceEvent[],
    ) {}
}
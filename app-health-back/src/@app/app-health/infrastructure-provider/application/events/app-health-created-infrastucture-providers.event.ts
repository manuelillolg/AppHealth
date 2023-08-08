import { AppHealthCreatedInfrastructureProviderEvent } from './app-health-created-infrastructure-provider.event';

export class AppHealthCreatedInfrastuctureProvidersEvent
{
    constructor(
        public readonly infrastuctureProviders: AppHealthCreatedInfrastructureProviderEvent[],
    ) {}
}
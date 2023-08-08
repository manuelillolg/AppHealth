import { AppHealthUpdatedInfrastructureProviderEvent } from './app-health-updated-infrastructure-provider.event';

export class AppHealthUpdatedInfrastuctureProvidersEvent
{
    constructor(
        public readonly infrastuctureProviders: AppHealthUpdatedInfrastructureProviderEvent[],
    ) {}
}
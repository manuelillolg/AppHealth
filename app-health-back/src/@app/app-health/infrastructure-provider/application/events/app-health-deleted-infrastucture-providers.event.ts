import { AppHealthDeletedInfrastructureProviderEvent } from './app-health-deleted-infrastructure-provider.event';

export class AppHealthDeletedInfrastuctureProvidersEvent
{
    constructor(
        public readonly infrastuctureProviders: AppHealthDeletedInfrastructureProviderEvent[],
    ) {}
}
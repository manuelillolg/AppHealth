import { AggregateRoot } from '@nestjs/cqrs';
import { AppHealthInfrastructureProvider } from '../../domain/app-health-infrastructure-provider.aggregate';
import { AppHealthCreatedInfrastructureProviderEvent } from './app-health-created-infrastructure-provider.event';
import { AppHealthCreatedInfrastuctureProvidersEvent } from './app-health-created-infrastucture-providers.event';
import { AppHealthUpdatedInfrastructureProviderEvent } from './app-health-updated-infrastructure-provider.event';
import { AppHealthUpdatedInfrastuctureProvidersEvent } from './app-health-updated-infrastucture-providers.event';
import { AppHealthDeletedInfrastructureProviderEvent } from './app-health-deleted-infrastructure-provider.event';
import { AppHealthDeletedInfrastuctureProvidersEvent } from './app-health-deleted-infrastucture-providers.event';

export class AppHealthAddInfrastuctureProvidersContextEvent extends AggregateRoot
{
    constructor(
        public readonly aggregateRoots: AppHealthInfrastructureProvider[] = [],
    )
    {
        super();
    }

    *[Symbol.iterator]()
    {
        for (const aggregateRoot of this.aggregateRoots) yield aggregateRoot;
    }

    created(): void
    {
        this.apply(
            new AppHealthCreatedInfrastuctureProvidersEvent(
                this.aggregateRoots.map(infrastructureProvider =>
                    new AppHealthCreatedInfrastructureProviderEvent(
                        infrastructureProvider.id.value,
                        infrastructureProvider.name.value,
                        infrastructureProvider.score.value,
                        infrastructureProvider.createdAt?.value,
                        infrastructureProvider.updatedAt?.value,
                        infrastructureProvider.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    updated(): void
    {
        this.apply(
            new AppHealthUpdatedInfrastuctureProvidersEvent(
                this.aggregateRoots.map(infrastructureProvider =>
                    new AppHealthUpdatedInfrastructureProviderEvent(
                        infrastructureProvider.id.value,
                        infrastructureProvider.name.value,
                        infrastructureProvider.score.value,
                        infrastructureProvider.createdAt?.value,
                        infrastructureProvider.updatedAt?.value,
                        infrastructureProvider.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    deleted(): void
    {
        this.apply(
            new AppHealthDeletedInfrastuctureProvidersEvent(
                this.aggregateRoots.map(infrastructureProvider =>
                    new AppHealthDeletedInfrastructureProviderEvent(
                        infrastructureProvider.id.value,
                        infrastructureProvider.name.value,
                        infrastructureProvider.score.value,
                        infrastructureProvider.createdAt?.value,
                        infrastructureProvider.updatedAt?.value,
                        infrastructureProvider.deletedAt?.value,
                    ),
                ),
            ),
        );
    }
}
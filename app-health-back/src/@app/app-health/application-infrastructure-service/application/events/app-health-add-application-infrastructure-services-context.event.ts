import { AggregateRoot } from '@nestjs/cqrs';
import { AppHealthApplicationInfrastructureService } from '../../domain/app-health-application-infrastructure-service.aggregate';
import { AppHealthCreatedApplicationInfrastructureServiceEvent } from './app-health-created-application-infrastructure-service.event';
import { AppHealthCreatedApplicationInfrastructureServicesEvent } from './app-health-created-application-infrastructure-services.event';
import { AppHealthUpdatedApplicationInfrastructureServiceEvent } from './app-health-updated-application-infrastructure-service.event';
import { AppHealthUpdatedApplicationInfrastructureServicesEvent } from './app-health-updated-application-infrastructure-services.event';
import { AppHealthDeletedApplicationInfrastructureServiceEvent } from './app-health-deleted-application-infrastructure-service.event';
import { AppHealthDeletedApplicationInfrastructureServicesEvent } from './app-health-deleted-application-infrastructure-services.event';

export class AppHealthAddApplicationInfrastructureServicesContextEvent extends AggregateRoot
{
    constructor(
        public readonly aggregateRoots: AppHealthApplicationInfrastructureService[] = [],
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
            new AppHealthCreatedApplicationInfrastructureServicesEvent(
                this.aggregateRoots.map(applicationInfrastructureService =>
                    new AppHealthCreatedApplicationInfrastructureServiceEvent(
                        applicationInfrastructureService.id.value,
                        applicationInfrastructureService.applicationId.value,
                        applicationInfrastructureService.infrastructureServiceId.value,
                        applicationInfrastructureService.averageCostPerYear?.value,
                        applicationInfrastructureService.score.value,
                        applicationInfrastructureService.createdAt?.value,
                        applicationInfrastructureService.updatedAt?.value,
                        applicationInfrastructureService.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    updated(): void
    {
        this.apply(
            new AppHealthUpdatedApplicationInfrastructureServicesEvent(
                this.aggregateRoots.map(applicationInfrastructureService =>
                    new AppHealthUpdatedApplicationInfrastructureServiceEvent(
                        applicationInfrastructureService.id.value,
                        applicationInfrastructureService.applicationId.value,
                        applicationInfrastructureService.infrastructureServiceId.value,
                        applicationInfrastructureService.averageCostPerYear?.value,
                        applicationInfrastructureService.score.value,
                        applicationInfrastructureService.createdAt?.value,
                        applicationInfrastructureService.updatedAt?.value,
                        applicationInfrastructureService.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    deleted(): void
    {
        this.apply(
            new AppHealthDeletedApplicationInfrastructureServicesEvent(
                this.aggregateRoots.map(applicationInfrastructureService =>
                    new AppHealthDeletedApplicationInfrastructureServiceEvent(
                        applicationInfrastructureService.id.value,
                        applicationInfrastructureService.applicationId.value,
                        applicationInfrastructureService.infrastructureServiceId.value,
                        applicationInfrastructureService.averageCostPerYear?.value,
                        applicationInfrastructureService.score.value,
                        applicationInfrastructureService.createdAt?.value,
                        applicationInfrastructureService.updatedAt?.value,
                        applicationInfrastructureService.deletedAt?.value,
                    ),
                ),
            ),
        );
    }
}

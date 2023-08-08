import { AppHealthAddApplicationInfrastructureServicesContextEvent, AppHealthApplicationInfrastructureService, AppHealthIApplicationInfrastructureServiceRepository } from '@app/app-health/application-infrastructure-service';
import {
    AppHealthApplicationInfrastructureServiceApplicationId,
    AppHealthApplicationInfrastructureServiceAverageCostPerYear,
    AppHealthApplicationInfrastructureServiceCreatedAt,
    AppHealthApplicationInfrastructureServiceDeletedAt,
    AppHealthApplicationInfrastructureServiceId,
    AppHealthApplicationInfrastructureServiceInfrastructureServiceId,
    AppHealthApplicationInfrastructureServiceScore,
    AppHealthApplicationInfrastructureServiceUpdatedAt,
} from '@app/app-health/application-infrastructure-service/domain/value-objects';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class AppHealthCreateApplicationInfrastructureServicesService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: AppHealthIApplicationInfrastructureServiceRepository,
    ) {}

    async main(
        applicationInfrastructureServices: {
            id: AppHealthApplicationInfrastructureServiceId;
            applicationId: AppHealthApplicationInfrastructureServiceApplicationId;
            infrastructureServiceId: AppHealthApplicationInfrastructureServiceInfrastructureServiceId;
            averageCostPerYear: AppHealthApplicationInfrastructureServiceAverageCostPerYear;
            score: AppHealthApplicationInfrastructureServiceScore;
        } [],
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const aggregateApplicationInfrastructureServices = applicationInfrastructureServices.map(applicationInfrastructureService => AppHealthApplicationInfrastructureService.register(
            applicationInfrastructureService.id,
            applicationInfrastructureService.applicationId,
            applicationInfrastructureService.infrastructureServiceId,
            applicationInfrastructureService.averageCostPerYear,
            applicationInfrastructureService.score,
            new AppHealthApplicationInfrastructureServiceCreatedAt({ currentTimestamp: true }),
            new AppHealthApplicationInfrastructureServiceUpdatedAt({ currentTimestamp: true }),
            null, // deleteAt
        ));

        // insert
        await this.repository.insert(
            aggregateApplicationInfrastructureServices,
            {
                insertOptions: cQMetadata?.repositoryOptions,
            },
        );

        // create AddApplicationInfrastructureServicesContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const applicationInfrastructureServicesRegistered = this.publisher.mergeObjectContext(new AppHealthAddApplicationInfrastructureServicesContextEvent(aggregateApplicationInfrastructureServices));

        applicationInfrastructureServicesRegistered.created(); // apply event to model events
        applicationInfrastructureServicesRegistered.commit(); // commit all events of model
    }
}
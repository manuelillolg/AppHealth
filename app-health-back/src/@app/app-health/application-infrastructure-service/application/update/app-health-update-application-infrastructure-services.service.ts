import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';
import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
import {
    AppHealthApplicationInfrastructureServiceId,
    AppHealthApplicationInfrastructureServiceApplicationId,
    AppHealthApplicationInfrastructureServiceInfrastructureServiceId,
    AppHealthApplicationInfrastructureServiceAverageCostPerYear,
    AppHealthApplicationInfrastructureServiceScore,
    AppHealthApplicationInfrastructureServiceCreatedAt,
    AppHealthApplicationInfrastructureServiceUpdatedAt,
    AppHealthApplicationInfrastructureServiceDeletedAt,
} from '../../domain/value-objects';
import { AppHealthIApplicationInfrastructureServiceRepository } from '../../domain/app-health-application-infrastructure-service.repository';
import { AppHealthApplicationInfrastructureService } from '../../domain/app-health-application-infrastructure-service.aggregate';
import { AppHealthAddApplicationInfrastructureServicesContextEvent } from '../events/app-health-add-application-infrastructure-services-context.event';

@Injectable()
export class AppHealthUpdateApplicationInfrastructureServicesService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: AppHealthIApplicationInfrastructureServiceRepository,
    ) {}

    async main(
        payload: {
            id?: AppHealthApplicationInfrastructureServiceId;
            applicationId?: AppHealthApplicationInfrastructureServiceApplicationId;
            infrastructureServiceId?: AppHealthApplicationInfrastructureServiceInfrastructureServiceId;
            averageCostPerYear?: AppHealthApplicationInfrastructureServiceAverageCostPerYear;
            score?: AppHealthApplicationInfrastructureServiceScore;
        },
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const applicationInfrastructureService = AppHealthApplicationInfrastructureService.register(
            payload.id,
            payload.applicationId,
            payload.infrastructureServiceId,
            payload.averageCostPerYear,
            payload.score,
            null, // createdAt
            new AppHealthApplicationInfrastructureServiceUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );


        // update
        await this.repository.update(
            applicationInfrastructureService,
            {
                queryStatement,
                constraint,
                cQMetadata,
                updateOptions: cQMetadata?.repositoryOptions,
            },
        );

        // get objects to delete
        const applicationInfrastructureServices = await this.repository.get(
            {
                queryStatement,
                constraint,
                cQMetadata,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const applicationInfrastructureServicesRegister = this.publisher.mergeObjectContext(
            new AppHealthAddApplicationInfrastructureServicesContextEvent(applicationInfrastructureServices),
        );

        applicationInfrastructureServicesRegister.updated(); // apply event to model events
        applicationInfrastructureServicesRegister.commit(); // commit all events of model
    }
}
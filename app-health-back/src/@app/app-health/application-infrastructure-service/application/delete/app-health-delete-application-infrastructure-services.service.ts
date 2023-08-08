import { AppHealthAddApplicationInfrastructureServicesContextEvent, AppHealthIApplicationInfrastructureServiceRepository } from '@app/app-health/application-infrastructure-service';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class AppHealthDeleteApplicationInfrastructureServicesService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: AppHealthIApplicationInfrastructureServiceRepository,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // get objects to delete
        const applicationInfrastructureServices = await this.repository.get({
            queryStatement,
            constraint,
            cQMetadata,
        });

        if (applicationInfrastructureServices.length === 0) return;

        await this.repository.delete({
            queryStatement,
            constraint,
            cQMetadata,
            deleteOptions: cQMetadata?.repositoryOptions,
        });

        // create AddApplicationInfrastructureServicesContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const applicationInfrastructureServicesRegistered = this.publisher.mergeObjectContext(
            new AppHealthAddApplicationInfrastructureServicesContextEvent(applicationInfrastructureServices),
        );

        applicationInfrastructureServicesRegistered.deleted(); // apply event to model events
        applicationInfrastructureServicesRegistered.commit(); // commit all events of model
    }
}
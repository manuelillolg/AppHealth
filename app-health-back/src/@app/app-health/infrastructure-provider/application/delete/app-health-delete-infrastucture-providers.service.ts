import { AppHealthAddInfrastuctureProvidersContextEvent, AppHealthIInfrastructureProviderRepository } from '@app/app-health/infrastructure-provider';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class AppHealthDeleteInfrastuctureProvidersService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: AppHealthIInfrastructureProviderRepository,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // get objects to delete
        const infrastuctureProviders = await this.repository.get({
            queryStatement,
            constraint,
            cQMetadata,
        });

        if (infrastuctureProviders.length === 0) return;

        await this.repository.delete({
            queryStatement,
            constraint,
            cQMetadata,
            deleteOptions: cQMetadata?.repositoryOptions,
        });

        // create AddInfrastuctureProvidersContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const infrastuctureProvidersRegistered = this.publisher.mergeObjectContext(
            new AppHealthAddInfrastuctureProvidersContextEvent(infrastuctureProviders),
        );

        infrastuctureProvidersRegistered.deleted(); // apply event to model events
        infrastuctureProvidersRegistered.commit(); // commit all events of model
    }
}
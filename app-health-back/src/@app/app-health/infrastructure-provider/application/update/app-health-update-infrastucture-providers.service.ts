import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';
import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
import {
    AppHealthInfrastructureProviderId,
    AppHealthInfrastructureProviderName,
    AppHealthInfrastructureProviderScore,
    AppHealthInfrastructureProviderCreatedAt,
    AppHealthInfrastructureProviderUpdatedAt,
    AppHealthInfrastructureProviderDeletedAt,
} from '../../domain/value-objects';
import { AppHealthIInfrastructureProviderRepository } from '../../domain/app-health-infrastructure-provider.repository';
import { AppHealthInfrastructureProvider } from '../../domain/app-health-infrastructure-provider.aggregate';
import { AppHealthAddInfrastuctureProvidersContextEvent } from '../events/app-health-add-infrastucture-providers-context.event';

@Injectable()
export class AppHealthUpdateInfrastuctureProvidersService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: AppHealthIInfrastructureProviderRepository,
    ) {}

    async main(
        payload: {
            id?: AppHealthInfrastructureProviderId;
            name?: AppHealthInfrastructureProviderName;
            score?: AppHealthInfrastructureProviderScore;
        },
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const infrastructureProvider = AppHealthInfrastructureProvider.register(
            payload.id,
            payload.name,
            payload.score,
            null, // createdAt
            new AppHealthInfrastructureProviderUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );


        // update
        await this.repository.update(
            infrastructureProvider,
            {
                queryStatement,
                constraint,
                cQMetadata,
                updateOptions: cQMetadata?.repositoryOptions,
            },
        );

        // get objects to delete
        const infrastuctureProviders = await this.repository.get(
            {
                queryStatement,
                constraint,
                cQMetadata,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const infrastuctureProvidersRegister = this.publisher.mergeObjectContext(
            new AppHealthAddInfrastuctureProvidersContextEvent(infrastuctureProviders),
        );

        infrastuctureProvidersRegister.updated(); // apply event to model events
        infrastuctureProvidersRegister.commit(); // commit all events of model
    }
}
import { AppHealthITechnicalSolutionRepository, AppHealthTechnicalSolution } from '@app/app-health/technical-solution';
import {
    AppHealthTechnicalSolutionArchitectureDiagram,
    AppHealthTechnicalSolutionCreatedAt,
    AppHealthTechnicalSolutionCustomerId,
    AppHealthTechnicalSolutionCustomerName,
    AppHealthTechnicalSolutionDeletedAt,
    AppHealthTechnicalSolutionDescription,
    AppHealthTechnicalSolutionId,
    AppHealthTechnicalSolutionName,
    AppHealthTechnicalSolutionProposal,
    AppHealthTechnicalSolutionUpdatedAt,
} from '@app/app-health/technical-solution/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class AppHealthUpdateTechnicalSolutionByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: AppHealthITechnicalSolutionRepository,
    ) {}

    async main(
        payload: {
            id: AppHealthTechnicalSolutionId;
            customerId?: AppHealthTechnicalSolutionCustomerId;
            customerName?: AppHealthTechnicalSolutionCustomerName;
            name?: AppHealthTechnicalSolutionName;
            description?: AppHealthTechnicalSolutionDescription;
            architectureDiagram?: AppHealthTechnicalSolutionArchitectureDiagram;
            proposal?: AppHealthTechnicalSolutionProposal;
        },
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const technicalSolution = AppHealthTechnicalSolution.register(
            payload.id,
            payload.customerId,
            payload.customerName,
            payload.name,
            payload.description,
            payload.architectureDiagram,
            payload.proposal,
            null, // createdAt
            new AppHealthTechnicalSolutionUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        // update by id
        await this.repository.updateById(
            technicalSolution,
            {
                constraint,
                cQMetadata,
                updateByIdOptions: cQMetadata?.repositoryOptions,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const technicalSolutionRegister = this.publisher.mergeObjectContext(
            technicalSolution,
        );

        technicalSolutionRegister.updated(technicalSolution); // apply event to model events
        technicalSolutionRegister.commit(); // commit all events of model
    }
}

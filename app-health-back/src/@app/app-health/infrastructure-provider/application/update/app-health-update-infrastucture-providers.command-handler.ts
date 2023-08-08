/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppHealthUpdateInfrastuctureProvidersCommand } from './app-health-update-infrastucture-providers.command';
import { AppHealthUpdateInfrastuctureProvidersService } from './app-health-update-infrastucture-providers.service';
import {
    AppHealthInfrastructureProviderId,
    AppHealthInfrastructureProviderName,
    AppHealthInfrastructureProviderScore,
    AppHealthInfrastructureProviderCreatedAt,
    AppHealthInfrastructureProviderUpdatedAt,
    AppHealthInfrastructureProviderDeletedAt,
} from '../../domain/value-objects';

@CommandHandler(AppHealthUpdateInfrastuctureProvidersCommand)
export class AppHealthUpdateInfrastuctureProvidersCommandHandler implements ICommandHandler<AppHealthUpdateInfrastuctureProvidersCommand>
{
    constructor(
        private readonly updateInfrastuctureProvidersService: AppHealthUpdateInfrastuctureProvidersService,
    ) {}

    async execute(command: AppHealthUpdateInfrastuctureProvidersCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateInfrastuctureProvidersService.main(
            {
                id: new AppHealthInfrastructureProviderId(command.payload.id, { undefinable: true }),
                name: new AppHealthInfrastructureProviderName(command.payload.name, { undefinable: true }),
                score: new AppHealthInfrastructureProviderScore(command.payload.score, { undefinable: true }),
            },
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
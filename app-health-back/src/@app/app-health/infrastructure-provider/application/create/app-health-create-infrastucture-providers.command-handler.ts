/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppHealthCreateInfrastuctureProvidersCommand } from './app-health-create-infrastucture-providers.command';
import { AppHealthCreateInfrastuctureProvidersService } from './app-health-create-infrastucture-providers.service';
import {
    AppHealthInfrastructureProviderId,
    AppHealthInfrastructureProviderName,
    AppHealthInfrastructureProviderScore,
    AppHealthInfrastructureProviderCreatedAt,
    AppHealthInfrastructureProviderUpdatedAt,
    AppHealthInfrastructureProviderDeletedAt,
} from '../../domain/value-objects';

@CommandHandler(AppHealthCreateInfrastuctureProvidersCommand)
export class AppHealthCreateInfrastuctureProvidersCommandHandler implements ICommandHandler<AppHealthCreateInfrastuctureProvidersCommand>
{
    constructor(
        private readonly createInfrastuctureProvidersService: AppHealthCreateInfrastuctureProvidersService,
    ) {}

    async execute(command: AppHealthCreateInfrastuctureProvidersCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createInfrastuctureProvidersService.main(
            command.payload
                .map(infrastructureProvider =>
                {
                    return {
                        id: new AppHealthInfrastructureProviderId(infrastructureProvider.id),
                        name: new AppHealthInfrastructureProviderName(infrastructureProvider.name),
                        score: new AppHealthInfrastructureProviderScore(infrastructureProvider.score),
                    };
                }),
            command.cQMetadata,
        );
    }
}
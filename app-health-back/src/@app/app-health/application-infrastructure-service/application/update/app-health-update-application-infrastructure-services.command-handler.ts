/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppHealthUpdateApplicationInfrastructureServicesCommand } from './app-health-update-application-infrastructure-services.command';
import { AppHealthUpdateApplicationInfrastructureServicesService } from './app-health-update-application-infrastructure-services.service';
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

@CommandHandler(AppHealthUpdateApplicationInfrastructureServicesCommand)
export class AppHealthUpdateApplicationInfrastructureServicesCommandHandler implements ICommandHandler<AppHealthUpdateApplicationInfrastructureServicesCommand>
{
    constructor(
        private readonly updateApplicationInfrastructureServicesService: AppHealthUpdateApplicationInfrastructureServicesService,
    ) {}

    async execute(command: AppHealthUpdateApplicationInfrastructureServicesCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateApplicationInfrastructureServicesService.main(
            {
                id: new AppHealthApplicationInfrastructureServiceId(command.payload.id, { undefinable: true }),
                applicationId: new AppHealthApplicationInfrastructureServiceApplicationId(command.payload.applicationId, { undefinable: true }),
                infrastructureServiceId: new AppHealthApplicationInfrastructureServiceInfrastructureServiceId(command.payload.infrastructureServiceId, { undefinable: true }),
                averageCostPerYear: new AppHealthApplicationInfrastructureServiceAverageCostPerYear(command.payload.averageCostPerYear, { undefinable: true }),
                score: new AppHealthApplicationInfrastructureServiceScore(command.payload.score, { undefinable: true }),
            },
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
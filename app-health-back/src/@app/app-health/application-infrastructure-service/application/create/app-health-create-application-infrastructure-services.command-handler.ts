/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppHealthCreateApplicationInfrastructureServicesCommand } from './app-health-create-application-infrastructure-services.command';
import { AppHealthCreateApplicationInfrastructureServicesService } from './app-health-create-application-infrastructure-services.service';
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

@CommandHandler(AppHealthCreateApplicationInfrastructureServicesCommand)
export class AppHealthCreateApplicationInfrastructureServicesCommandHandler implements ICommandHandler<AppHealthCreateApplicationInfrastructureServicesCommand>
{
    constructor(
        private readonly createApplicationInfrastructureServicesService: AppHealthCreateApplicationInfrastructureServicesService,
    ) {}

    async execute(command: AppHealthCreateApplicationInfrastructureServicesCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createApplicationInfrastructureServicesService.main(
            command.payload
                .map(applicationInfrastructureService =>
                {
                    return {
                        id: new AppHealthApplicationInfrastructureServiceId(applicationInfrastructureService.id),
                        applicationId: new AppHealthApplicationInfrastructureServiceApplicationId(applicationInfrastructureService.applicationId),
                        infrastructureServiceId: new AppHealthApplicationInfrastructureServiceInfrastructureServiceId(applicationInfrastructureService.infrastructureServiceId),
                        averageCostPerYear: new AppHealthApplicationInfrastructureServiceAverageCostPerYear(applicationInfrastructureService.averageCostPerYear),
                        score: new AppHealthApplicationInfrastructureServiceScore(applicationInfrastructureService.score),
                    };
                }),
            command.cQMetadata,
        );
    }
}
/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppHealthUpsertApplicationCommand } from './app-health-upsert-application.command';
import { AppHealthUpsertApplicationService } from './app-health-upsert-application.service';
import {
    AppHealthApplicationId,
    AppHealthApplicationTechnicalSolutionId,
    AppHealthApplicationName,
    AppHealthApplicationDescription,
    AppHealthApplicationBusinessImpact,
    AppHealthApplicationType,
    AppHealthApplicationReleaseDate,
    AppHealthApplicationArchitectureDiagram,
    AppHealthApplicationHasTenants,
    AppHealthApplicationHasLicensing,
    AppHealthApplicationCostLicensesPerYear,
    AppHealthApplicationRequestsPerDay,
    AppHealthApplicationViews,
    AppHealthApplicationAuthentications,
    AppHealthApplicationAuthorizations,
    AppHealthApplicationLanguages,
    AppHealthApplicationInfrastructureServices,
    AppHealthApplicationDatabases,
    AppHealthApplicationApis,
    AppHealthApplicationIntegrations,
    AppHealthApplicationCreatedAt,
    AppHealthApplicationUpdatedAt,
    AppHealthApplicationDeletedAt,
} from '../../domain/value-objects';

@CommandHandler(AppHealthUpsertApplicationCommand)
export class AppHealthUpsertApplicationCommandHandler implements ICommandHandler<AppHealthUpsertApplicationCommand>
{
    constructor(
        private readonly upsertApplicationService: AppHealthUpsertApplicationService,
    ) {}

    async execute(command: AppHealthUpsertApplicationCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.upsertApplicationService.main(
            {
                id: new AppHealthApplicationId(command.payload.id),
                technicalSolutionId: new AppHealthApplicationTechnicalSolutionId(command.payload.technicalSolutionId),
                name: new AppHealthApplicationName(command.payload.name),
                description: new AppHealthApplicationDescription(command.payload.description),
                businessImpact: new AppHealthApplicationBusinessImpact(command.payload.businessImpact),
                type: new AppHealthApplicationType(command.payload.type),
                releaseDate: new AppHealthApplicationReleaseDate(command.payload.releaseDate),
                architectureDiagram: new AppHealthApplicationArchitectureDiagram(command.payload.architectureDiagram),
                hasTenants: new AppHealthApplicationHasTenants(command.payload.hasTenants),
                hasLicensing: new AppHealthApplicationHasLicensing(command.payload.hasLicensing),
                costLicensesPerYear: new AppHealthApplicationCostLicensesPerYear(command.payload.costLicensesPerYear),
                requestsPerDay: new AppHealthApplicationRequestsPerDay(command.payload.requestsPerDay),
                views: new AppHealthApplicationViews(command.payload.views),
                authentications: new AppHealthApplicationAuthentications(command.payload.authentications),
                authorizations: new AppHealthApplicationAuthorizations(command.payload.authorizations),
                languages: new AppHealthApplicationLanguages(command.payload.languages),
                infrastructureServices: new AppHealthApplicationInfrastructureServices(command.payload.infrastructureServices),
                databases: new AppHealthApplicationDatabases(command.payload.databases),
                apis: new AppHealthApplicationApis(command.payload.apis),
                integrations: new AppHealthApplicationIntegrations(command.payload.integrations),
            },
            command.cQMetadata,
        );
    }
}
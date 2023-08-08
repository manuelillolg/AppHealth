/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppHealthUpdateApplicationByIdCommand } from './app-health-update-application-by-id.command';
import { AppHealthUpdateApplicationByIdService } from './app-health-update-application-by-id.service';
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

@CommandHandler(AppHealthUpdateApplicationByIdCommand)
export class AppHealthUpdateApplicationByIdCommandHandler implements ICommandHandler<AppHealthUpdateApplicationByIdCommand>
{
    constructor(
        private readonly updateApplicationByIdService: AppHealthUpdateApplicationByIdService,
    ) {}

    async execute(command: AppHealthUpdateApplicationByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateApplicationByIdService.main(
            {
                id: new AppHealthApplicationId(command.payload.id),
                technicalSolutionId: new AppHealthApplicationTechnicalSolutionId(command.payload.technicalSolutionId, { undefinable: true }),
                name: new AppHealthApplicationName(command.payload.name, { undefinable: true }),
                description: new AppHealthApplicationDescription(command.payload.description),
                businessImpact: new AppHealthApplicationBusinessImpact(command.payload.businessImpact),
                type: new AppHealthApplicationType(command.payload.type, { undefinable: true }),
                releaseDate: new AppHealthApplicationReleaseDate(command.payload.releaseDate, { undefinable: true }),
                architectureDiagram: new AppHealthApplicationArchitectureDiagram(command.payload.architectureDiagram, { undefinable: true }),
                hasTenants: new AppHealthApplicationHasTenants(command.payload.hasTenants, { undefinable: true }),
                hasLicensing: new AppHealthApplicationHasLicensing(command.payload.hasLicensing, { undefinable: true }),
                costLicensesPerYear: new AppHealthApplicationCostLicensesPerYear(command.payload.costLicensesPerYear, { undefinable: true }),
                requestsPerDay: new AppHealthApplicationRequestsPerDay(command.payload.requestsPerDay, { undefinable: true }),
                views: new AppHealthApplicationViews(command.payload.views, { undefinable: true }),
                authentications: new AppHealthApplicationAuthentications(command.payload.authentications, { undefinable: true }),
                authorizations: new AppHealthApplicationAuthorizations(command.payload.authorizations, { undefinable: true }),
                languages: new AppHealthApplicationLanguages(command.payload.languages, { undefinable: true }),
                infrastructureServices: new AppHealthApplicationInfrastructureServices(command.payload.infrastructureServices, { undefinable: true }),
                databases: new AppHealthApplicationDatabases(command.payload.databases, { undefinable: true }),
                apis: new AppHealthApplicationApis(command.payload.apis, { undefinable: true }),
                integrations: new AppHealthApplicationIntegrations(command.payload.integrations, { undefinable: true }),
            },
            command.constraint,
            command.cQMetadata,
        );
    }
}
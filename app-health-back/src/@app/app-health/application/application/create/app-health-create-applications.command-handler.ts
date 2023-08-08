/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppHealthCreateApplicationsCommand } from './app-health-create-applications.command';
import { AppHealthCreateApplicationsService } from './app-health-create-applications.service';
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

@CommandHandler(AppHealthCreateApplicationsCommand)
export class AppHealthCreateApplicationsCommandHandler implements ICommandHandler<AppHealthCreateApplicationsCommand>
{
    constructor(
        private readonly createApplicationsService: AppHealthCreateApplicationsService,
    ) {}

    async execute(command: AppHealthCreateApplicationsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createApplicationsService.main(
            command.payload
                .map(application =>
                {
                    return {
                        id: new AppHealthApplicationId(application.id),
                        technicalSolutionId: new AppHealthApplicationTechnicalSolutionId(application.technicalSolutionId),
                        name: new AppHealthApplicationName(application.name),
                        description: new AppHealthApplicationDescription(application.description),
                        businessImpact: new AppHealthApplicationBusinessImpact(application.businessImpact),
                        type: new AppHealthApplicationType(application.type),
                        releaseDate: new AppHealthApplicationReleaseDate(application.releaseDate),
                        architectureDiagram: new AppHealthApplicationArchitectureDiagram(application.architectureDiagram),
                        hasTenants: new AppHealthApplicationHasTenants(application.hasTenants),
                        hasLicensing: new AppHealthApplicationHasLicensing(application.hasLicensing),
                        costLicensesPerYear: new AppHealthApplicationCostLicensesPerYear(application.costLicensesPerYear),
                        requestsPerDay: new AppHealthApplicationRequestsPerDay(application.requestsPerDay),
                        views: new AppHealthApplicationViews(application.views),
                        authentications: new AppHealthApplicationAuthentications(application.authentications),
                        authorizations: new AppHealthApplicationAuthorizations(application.authorizations),
                        languages: new AppHealthApplicationLanguages(application.languages),
                        infrastructureServices: new AppHealthApplicationInfrastructureServices(application.infrastructureServices),
                        databases: new AppHealthApplicationDatabases(application.databases),
                        apis: new AppHealthApplicationApis(application.apis),
                        integrations: new AppHealthApplicationIntegrations(application.integrations),
                    };
                }),
            command.cQMetadata,
        );
    }
}
import { AppHealthApplication, AppHealthIApplicationRepository } from '@app/app-health/application';
import {
    AppHealthApplicationApis,
    AppHealthApplicationArchitectureDiagram,
    AppHealthApplicationAuthentications,
    AppHealthApplicationAuthorizations,
    AppHealthApplicationBusinessImpact,
    AppHealthApplicationCostLicensesPerYear,
    AppHealthApplicationCreatedAt,
    AppHealthApplicationDatabases,
    AppHealthApplicationDeletedAt,
    AppHealthApplicationDescription,
    AppHealthApplicationHasLicensing,
    AppHealthApplicationHasTenants,
    AppHealthApplicationId,
    AppHealthApplicationInfrastructureServices,
    AppHealthApplicationIntegrations,
    AppHealthApplicationLanguages,
    AppHealthApplicationName,
    AppHealthApplicationReleaseDate,
    AppHealthApplicationRequestsPerDay,
    AppHealthApplicationTechnicalSolutionId,
    AppHealthApplicationType,
    AppHealthApplicationUpdatedAt,
    AppHealthApplicationViews,
} from '@app/app-health/application/domain/value-objects';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class AppHealthCreateApplicationService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: AppHealthIApplicationRepository,
    ) {}

    async main(
        payload: {
            id: AppHealthApplicationId;
            technicalSolutionId: AppHealthApplicationTechnicalSolutionId;
            name: AppHealthApplicationName;
            description: AppHealthApplicationDescription;
            businessImpact: AppHealthApplicationBusinessImpact;
            type: AppHealthApplicationType;
            releaseDate: AppHealthApplicationReleaseDate;
            architectureDiagram: AppHealthApplicationArchitectureDiagram;
            hasTenants: AppHealthApplicationHasTenants;
            hasLicensing: AppHealthApplicationHasLicensing;
            costLicensesPerYear: AppHealthApplicationCostLicensesPerYear;
            requestsPerDay: AppHealthApplicationRequestsPerDay;
            views: AppHealthApplicationViews;
            authentications: AppHealthApplicationAuthentications;
            authorizations: AppHealthApplicationAuthorizations;
            languages: AppHealthApplicationLanguages;
            infrastructureServices: AppHealthApplicationInfrastructureServices;
            databases: AppHealthApplicationDatabases;
            apis: AppHealthApplicationApis;
            integrations: AppHealthApplicationIntegrations;
        },
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const application = AppHealthApplication.register(
            payload.id,
            payload.technicalSolutionId,
            payload.name,
            payload.description,
            payload.businessImpact,
            payload.type,
            payload.releaseDate,
            payload.architectureDiagram,
            payload.hasTenants,
            payload.hasLicensing,
            payload.costLicensesPerYear,
            payload.requestsPerDay,
            payload.views,
            payload.authentications,
            payload.authorizations,
            payload.languages,
            payload.infrastructureServices,
            payload.databases,
            payload.apis,
            payload.integrations,
            new AppHealthApplicationCreatedAt({ currentTimestamp: true }),
            new AppHealthApplicationUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        await this.repository.create(
            application,
            {
                createOptions: cQMetadata?.repositoryOptions,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const applicationRegister = this.publisher.mergeObjectContext(
            application,
        );

        applicationRegister.created(application); // apply event to model events
        applicationRegister.commit(); // commit all events of model
    }
}
/* eslint-disable key-spacing */
import { AggregateRoot } from '@nestjs/cqrs';
import { LiteralObject, Utils } from '@aurorajs.dev/core';
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
} from './value-objects';
import { AppHealthCreatedApplicationEvent } from '../application/events/app-health-created-application.event';
import { AppHealthUpdatedApplicationEvent } from '../application/events/app-health-updated-application.event';
import { AppHealthDeletedApplicationEvent } from '../application/events/app-health-deleted-application.event';
import { AppHealthTechnicalSolution } from '@app/app-health/technical-solution';
import { AppHealthApplicationView } from '@app/app-health/application-view';
import { AppHealthApplicationAuthentication } from '@app/app-health/application-authentication';
import { AppHealthApplicationAuthorization } from '@app/app-health/application-authorization';
import { AppHealthApplicationLanguage } from '@app/app-health/application-language';
import { AppHealthApplicationInfrastructureService } from '@app/app-health/application-infrastructure-service';
import { AppHealthApplicationDatabase } from '@app/app-health/application-database';
import { AppHealthApplicationApi } from '@app/app-health/application-api';
import { AppHealthApplicationIntegration } from '@app/app-health/application-integration';

export class AppHealthApplication extends AggregateRoot
{
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
    createdAt: AppHealthApplicationCreatedAt;
    updatedAt: AppHealthApplicationUpdatedAt;
    deletedAt: AppHealthApplicationDeletedAt;

    // eager relationship
    technicalSolution: AppHealthTechnicalSolution;
    applicationView: AppHealthApplicationView;
    applicationAuthentication: AppHealthApplicationAuthentication;
    applicationAuthorization: AppHealthApplicationAuthorization;
    applicationLanguage: AppHealthApplicationLanguage;
    applicationInfrastructureService: AppHealthApplicationInfrastructureService;
    applicationDatabase: AppHealthApplicationDatabase;
    applicationApi: AppHealthApplicationApi;
    applicationIntegration: AppHealthApplicationIntegration;

    constructor(
        id: AppHealthApplicationId,
        technicalSolutionId: AppHealthApplicationTechnicalSolutionId,
        name: AppHealthApplicationName,
        description: AppHealthApplicationDescription,
        businessImpact: AppHealthApplicationBusinessImpact,
        type: AppHealthApplicationType,
        releaseDate: AppHealthApplicationReleaseDate,
        architectureDiagram: AppHealthApplicationArchitectureDiagram,
        hasTenants: AppHealthApplicationHasTenants,
        hasLicensing: AppHealthApplicationHasLicensing,
        costLicensesPerYear: AppHealthApplicationCostLicensesPerYear,
        requestsPerDay: AppHealthApplicationRequestsPerDay,
        views: AppHealthApplicationViews,
        authentications: AppHealthApplicationAuthentications,
        authorizations: AppHealthApplicationAuthorizations,
        languages: AppHealthApplicationLanguages,
        infrastructureServices: AppHealthApplicationInfrastructureServices,
        databases: AppHealthApplicationDatabases,
        apis: AppHealthApplicationApis,
        integrations: AppHealthApplicationIntegrations,
        createdAt: AppHealthApplicationCreatedAt,
        updatedAt: AppHealthApplicationUpdatedAt,
        deletedAt: AppHealthApplicationDeletedAt,

        technicalSolution?: AppHealthTechnicalSolution,
        applicationView?: AppHealthApplicationView,
        applicationAuthentication?: AppHealthApplicationAuthentication,
        applicationAuthorization?: AppHealthApplicationAuthorization,
        applicationLanguage?: AppHealthApplicationLanguage,
        applicationInfrastructureService?: AppHealthApplicationInfrastructureService,
        applicationDatabase?: AppHealthApplicationDatabase,
        applicationApi?: AppHealthApplicationApi,
        applicationIntegration?: AppHealthApplicationIntegration,
    )
    {
        super();
        this.id = id;
        this.technicalSolutionId = technicalSolutionId;
        this.name = name;
        this.description = description;
        this.businessImpact = businessImpact;
        this.type = type;
        this.releaseDate = releaseDate;
        this.architectureDiagram = architectureDiagram;
        this.hasTenants = hasTenants;
        this.hasLicensing = hasLicensing;
        this.costLicensesPerYear = costLicensesPerYear;
        this.requestsPerDay = requestsPerDay;
        this.views = views;
        this.authentications = authentications;
        this.authorizations = authorizations;
        this.languages = languages;
        this.infrastructureServices = infrastructureServices;
        this.databases = databases;
        this.apis = apis;
        this.integrations = integrations;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;

        // eager relationship
        this.technicalSolution = technicalSolution;
        this.applicationView = applicationView;
        this.applicationAuthentication = applicationAuthentication;
        this.applicationAuthorization = applicationAuthorization;
        this.applicationLanguage = applicationLanguage;
        this.applicationInfrastructureService = applicationInfrastructureService;
        this.applicationDatabase = applicationDatabase;
        this.applicationApi = applicationApi;
        this.applicationIntegration = applicationIntegration;
    }

    static register (
        id: AppHealthApplicationId,
        technicalSolutionId: AppHealthApplicationTechnicalSolutionId,
        name: AppHealthApplicationName,
        description: AppHealthApplicationDescription,
        businessImpact: AppHealthApplicationBusinessImpact,
        type: AppHealthApplicationType,
        releaseDate: AppHealthApplicationReleaseDate,
        architectureDiagram: AppHealthApplicationArchitectureDiagram,
        hasTenants: AppHealthApplicationHasTenants,
        hasLicensing: AppHealthApplicationHasLicensing,
        costLicensesPerYear: AppHealthApplicationCostLicensesPerYear,
        requestsPerDay: AppHealthApplicationRequestsPerDay,
        views: AppHealthApplicationViews,
        authentications: AppHealthApplicationAuthentications,
        authorizations: AppHealthApplicationAuthorizations,
        languages: AppHealthApplicationLanguages,
        infrastructureServices: AppHealthApplicationInfrastructureServices,
        databases: AppHealthApplicationDatabases,
        apis: AppHealthApplicationApis,
        integrations: AppHealthApplicationIntegrations,
        createdAt: AppHealthApplicationCreatedAt,
        updatedAt: AppHealthApplicationUpdatedAt,
        deletedAt: AppHealthApplicationDeletedAt,

        technicalSolution?: AppHealthTechnicalSolution,
        applicationView?: AppHealthApplicationView,
        applicationAuthentication?: AppHealthApplicationAuthentication,
        applicationAuthorization?: AppHealthApplicationAuthorization,
        applicationLanguage?: AppHealthApplicationLanguage,
        applicationInfrastructureService?: AppHealthApplicationInfrastructureService,
        applicationDatabase?: AppHealthApplicationDatabase,
        applicationApi?: AppHealthApplicationApi,
        applicationIntegration?: AppHealthApplicationIntegration,
    ): AppHealthApplication
    {
        return new AppHealthApplication(
            id,
            technicalSolutionId,
            name,
            description,
            businessImpact,
            type,
            releaseDate,
            architectureDiagram,
            hasTenants,
            hasLicensing,
            costLicensesPerYear,
            requestsPerDay,
            views,
            authentications,
            authorizations,
            languages,
            infrastructureServices,
            databases,
            apis,
            integrations,
            createdAt,
            updatedAt,
            deletedAt,

            technicalSolution,
            applicationView,
            applicationAuthentication,
            applicationAuthorization,
            applicationLanguage,
            applicationInfrastructureService,
            applicationDatabase,
            applicationApi,
            applicationIntegration,
        );
    }

    created(application: AppHealthApplication): void
    {
        this.apply(
            new AppHealthCreatedApplicationEvent(
                application.id.value,
                application.technicalSolutionId.value,
                application.name.value,
                application.description?.value,
                application.businessImpact?.value,
                application.type.value,
                application.releaseDate.value,
                application.architectureDiagram.value,
                application.hasTenants.value,
                application.hasLicensing.value,
                application.costLicensesPerYear.value,
                application.requestsPerDay.value,
                application.views.value,
                application.authentications.value,
                application.authorizations.value,
                application.languages.value,
                application.infrastructureServices.value,
                application.databases.value,
                application.apis.value,
                application.integrations.value,
                application.createdAt?.value,
                application.updatedAt?.value,
                application.deletedAt?.value,
            ),
        );
    }

    updated(application: AppHealthApplication): void
    {
        this.apply(
            new AppHealthUpdatedApplicationEvent(
                application.id?.value,
                application.technicalSolutionId?.value,
                application.name?.value,
                application.description?.value,
                application.businessImpact?.value,
                application.type?.value,
                application.releaseDate?.value,
                application.architectureDiagram?.value,
                application.hasTenants?.value,
                application.hasLicensing?.value,
                application.costLicensesPerYear?.value,
                application.requestsPerDay?.value,
                application.views?.value,
                application.authentications?.value,
                application.authorizations?.value,
                application.languages?.value,
                application.infrastructureServices?.value,
                application.databases?.value,
                application.apis?.value,
                application.integrations?.value,
                application.createdAt?.value,
                application.updatedAt?.value,
                application.deletedAt?.value,
            ),
        );
    }

    deleted(application: AppHealthApplication): void
    {
        this.apply(
            new AppHealthDeletedApplicationEvent(
                application.id.value,
                application.technicalSolutionId.value,
                application.name.value,
                application.description?.value,
                application.businessImpact?.value,
                application.type.value,
                application.releaseDate.value,
                application.architectureDiagram.value,
                application.hasTenants.value,
                application.hasLicensing.value,
                application.costLicensesPerYear.value,
                application.requestsPerDay.value,
                application.views.value,
                application.authentications.value,
                application.authorizations.value,
                application.languages.value,
                application.infrastructureServices.value,
                application.databases.value,
                application.apis.value,
                application.integrations.value,
                application.createdAt?.value,
                application.updatedAt?.value,
                application.deletedAt?.value,
            ),
        );
    }

    toDTO(): LiteralObject
    {
        return {
            id: this.id.value,
            technicalSolutionId: this.technicalSolutionId.value,
            name: this.name.value,
            description: this.description?.value,
            businessImpact: this.businessImpact?.value,
            type: this.type.value,
            releaseDate: this.releaseDate.value,
            architectureDiagram: this.architectureDiagram.value,
            hasTenants: this.hasTenants.value,
            hasLicensing: this.hasLicensing.value,
            costLicensesPerYear: this.costLicensesPerYear.value,
            requestsPerDay: this.requestsPerDay.value,
            views: this.views.value,
            authentications: this.authentications.value,
            authorizations: this.authorizations.value,
            languages: this.languages.value,
            infrastructureServices: this.infrastructureServices.value,
            databases: this.databases.value,
            apis: this.apis.value,
            integrations: this.integrations.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,

            // eager relationship
            technicalSolution: this.technicalSolution?.toDTO(),
            applicationView: this.applicationView?.toDTO(),
            applicationAuthentication: this.applicationAuthentication?.toDTO(),
            applicationAuthorization: this.applicationAuthorization?.toDTO(),
            applicationLanguage: this.applicationLanguage?.toDTO(),
            applicationInfrastructureService: this.applicationInfrastructureService?.toDTO(),
            applicationDatabase: this.applicationDatabase?.toDTO(),
            applicationApi: this.applicationApi?.toDTO(),
            applicationIntegration: this.applicationIntegration?.toDTO(),
        };
    }

    // function called to get data for repository side effect methods
    toRepository(): LiteralObject
    {
        return {
            id: this.id.value,
            technicalSolutionId: this.technicalSolutionId.value,
            name: this.name.value,
            description: this.description?.value,
            businessImpact: this.businessImpact?.value,
            type: this.type.value,
            releaseDate: this.releaseDate.value,
            architectureDiagram: this.architectureDiagram.value,
            hasTenants: this.hasTenants.value,
            hasLicensing: this.hasLicensing.value,
            costLicensesPerYear: this.costLicensesPerYear.value,
            requestsPerDay: this.requestsPerDay.value,
            views: this.views.value,
            authentications: this.authentications.value,
            authorizations: this.authorizations.value,
            languages: this.languages.value,
            infrastructureServices: this.infrastructureServices.value,
            databases: this.databases.value,
            apis: this.apis.value,
            integrations: this.integrations.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,

            // eager relationship
            technicalSolution: this.technicalSolution?.toDTO(),
            applicationView: this.applicationView?.toDTO(),
            applicationAuthentication: this.applicationAuthentication?.toDTO(),
            applicationAuthorization: this.applicationAuthorization?.toDTO(),
            applicationLanguage: this.applicationLanguage?.toDTO(),
            applicationInfrastructureService: this.applicationInfrastructureService?.toDTO(),
            applicationDatabase: this.applicationDatabase?.toDTO(),
            applicationApi: this.applicationApi?.toDTO(),
            applicationIntegration: this.applicationIntegration?.toDTO(),
        };
    }
}

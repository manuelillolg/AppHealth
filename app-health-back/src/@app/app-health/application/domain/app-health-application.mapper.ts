import { IMapper, LiteralObject, MapperOptions, CQMetadata } from '@aurorajs.dev/core';
import { AppHealthApplication } from './app-health-application.aggregate';
import { AppHealthApplicationResponse } from './app-health-application.response';
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
import { AppHealthTechnicalSolutionMapper } from '@app/app-health/technical-solution';
import { AppHealthApplicationViewMapper } from '@app/app-health/application-view';
import { AppHealthApplicationAuthenticationMapper } from '@app/app-health/application-authentication';
import { AppHealthApplicationAuthorizationMapper } from '@app/app-health/application-authorization';
import { AppHealthApplicationLanguageMapper } from '@app/app-health/application-language';
import { AppHealthApplicationInfrastructureServiceMapper } from '@app/app-health/application-infrastructure-service';
import { AppHealthApplicationDatabaseMapper } from '@app/app-health/application-database';
import { AppHealthApplicationApiMapper } from '@app/app-health/application-api';
import { AppHealthApplicationIntegrationMapper } from '@app/app-health/application-integration';

export class AppHealthApplicationMapper implements IMapper
{
    constructor(
        public options: MapperOptions = { eagerLoading: true },
    ) {}

    /**
     * Map object to aggregate
     * @param application
     */
    mapModelToAggregate(application: LiteralObject, cQMetadata?: CQMetadata): AppHealthApplication
    {
        if (!application) return;

        return this.makeAggregate(application, cQMetadata);
    }

    /**
     * Map array of objects to array aggregates
     * @param applications
     */
    mapModelsToAggregates(applications: LiteralObject[], cQMetadata?: CQMetadata): AppHealthApplication[]
    {
        if (!Array.isArray(applications)) return;

        return applications.map(application => this.makeAggregate(application, cQMetadata));
    }

    /**
     * Map aggregate to response
     * @param application
     */
    mapAggregateToResponse(application: AppHealthApplication): AppHealthApplicationResponse
    {
        return this.makeResponse(application);
    }

    /**
     * Map array of aggregates to array responses
     * @param applications
     */
    mapAggregatesToResponses(applications: AppHealthApplication[]): AppHealthApplicationResponse[]
    {
        if (!Array.isArray(applications)) return;

        return applications.map(application => this.makeResponse(application));
    }

    private makeAggregate(application: LiteralObject, cQMetadata?: CQMetadata): AppHealthApplication
    {
        return AppHealthApplication.register(
            new AppHealthApplicationId(application.id, { undefinable: true }),
            new AppHealthApplicationTechnicalSolutionId(application.technicalSolutionId, { undefinable: true }),
            new AppHealthApplicationName(application.name, { undefinable: true }),
            new AppHealthApplicationDescription(application.description, { undefinable: true }),
            new AppHealthApplicationBusinessImpact(application.businessImpact, { undefinable: true }),
            new AppHealthApplicationType(application.type, { undefinable: true }),
            new AppHealthApplicationReleaseDate(application.releaseDate, { undefinable: true }),
            new AppHealthApplicationArchitectureDiagram(application.architectureDiagram, { undefinable: true }),
            new AppHealthApplicationHasTenants(application.hasTenants, { undefinable: true }),
            new AppHealthApplicationHasLicensing(application.hasLicensing, { undefinable: true }),
            new AppHealthApplicationCostLicensesPerYear(application.costLicensesPerYear, { undefinable: true }),
            new AppHealthApplicationRequestsPerDay(application.requestsPerDay, { undefinable: true }),
            new AppHealthApplicationViews(application.views, { undefinable: true }),
            new AppHealthApplicationAuthentications(application.authentications, { undefinable: true }),
            new AppHealthApplicationAuthorizations(application.authorizations, { undefinable: true }),
            new AppHealthApplicationLanguages(application.languages, { undefinable: true }),
            new AppHealthApplicationInfrastructureServices(application.infrastructureServices, { undefinable: true }),
            new AppHealthApplicationDatabases(application.databases, { undefinable: true }),
            new AppHealthApplicationApis(application.apis, { undefinable: true }),
            new AppHealthApplicationIntegrations(application.integrations, { undefinable: true }),
            new AppHealthApplicationCreatedAt(application.createdAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new AppHealthApplicationUpdatedAt(application.updatedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new AppHealthApplicationDeletedAt(application.deletedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            this.options.eagerLoading ? new AppHealthTechnicalSolutionMapper({ eagerLoading: true }).mapModelToAggregate(application.technicalSolution, cQMetadata) : undefined,
            this.options.eagerLoading ? new AppHealthApplicationViewMapper({ eagerLoading: true }).mapModelToAggregate(application.applicationView, cQMetadata) : undefined,
            this.options.eagerLoading ? new AppHealthApplicationAuthenticationMapper({ eagerLoading: true }).mapModelToAggregate(application.applicationAuthentication, cQMetadata) : undefined,
            this.options.eagerLoading ? new AppHealthApplicationAuthorizationMapper({ eagerLoading: true }).mapModelToAggregate(application.applicationAuthorization, cQMetadata) : undefined,
            this.options.eagerLoading ? new AppHealthApplicationLanguageMapper({ eagerLoading: true }).mapModelToAggregate(application.applicationLanguage, cQMetadata) : undefined,
            this.options.eagerLoading ? new AppHealthApplicationInfrastructureServiceMapper({ eagerLoading: true }).mapModelToAggregate(application.applicationInfrastructureService, cQMetadata) : undefined,
            this.options.eagerLoading ? new AppHealthApplicationDatabaseMapper({ eagerLoading: true }).mapModelToAggregate(application.applicationDatabase, cQMetadata) : undefined,
            this.options.eagerLoading ? new AppHealthApplicationApiMapper({ eagerLoading: true }).mapModelToAggregate(application.applicationApi, cQMetadata) : undefined,
            this.options.eagerLoading ? new AppHealthApplicationIntegrationMapper({ eagerLoading: true }).mapModelToAggregate(application.applicationIntegration, cQMetadata) : undefined,
        );
    }

    private makeResponse(application: AppHealthApplication): AppHealthApplicationResponse
    {
        if (!application) return;

        return new AppHealthApplicationResponse(
            application.id.value,
            application.technicalSolutionId.value,
            application.name.value,
            application.description.value,
            application.businessImpact.value,
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
            application.createdAt.value,
            application.updatedAt.value,
            application.deletedAt.value,
            this.options.eagerLoading ? new AppHealthTechnicalSolutionMapper({ eagerLoading: true }).mapAggregateToResponse(application.technicalSolution) : undefined,
            this.options.eagerLoading ? new AppHealthApplicationViewMapper({ eagerLoading: true }).mapAggregateToResponse(application.applicationView) : undefined,
            this.options.eagerLoading ? new AppHealthApplicationAuthenticationMapper({ eagerLoading: true }).mapAggregateToResponse(application.applicationAuthentication) : undefined,
            this.options.eagerLoading ? new AppHealthApplicationAuthorizationMapper({ eagerLoading: true }).mapAggregateToResponse(application.applicationAuthorization) : undefined,
            this.options.eagerLoading ? new AppHealthApplicationLanguageMapper({ eagerLoading: true }).mapAggregateToResponse(application.applicationLanguage) : undefined,
            this.options.eagerLoading ? new AppHealthApplicationInfrastructureServiceMapper({ eagerLoading: true }).mapAggregateToResponse(application.applicationInfrastructureService) : undefined,
            this.options.eagerLoading ? new AppHealthApplicationDatabaseMapper({ eagerLoading: true }).mapAggregateToResponse(application.applicationDatabase) : undefined,
            this.options.eagerLoading ? new AppHealthApplicationApiMapper({ eagerLoading: true }).mapAggregateToResponse(application.applicationApi) : undefined,
            this.options.eagerLoading ? new AppHealthApplicationIntegrationMapper({ eagerLoading: true }).mapAggregateToResponse(application.applicationIntegration) : undefined,
        );
    }
}
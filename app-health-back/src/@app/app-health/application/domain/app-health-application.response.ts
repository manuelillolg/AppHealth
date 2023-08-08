import { AppHealthTechnicalSolutionResponse } from '@app/app-health/technical-solution';
import { AppHealthApplicationViewResponse } from '@app/app-health/application-view';
import { AppHealthApplicationAuthenticationResponse } from '@app/app-health/application-authentication';
import { AppHealthApplicationAuthorizationResponse } from '@app/app-health/application-authorization';
import { AppHealthApplicationLanguageResponse } from '@app/app-health/application-language';
import { AppHealthApplicationInfrastructureServiceResponse } from '@app/app-health/application-infrastructure-service';
import { AppHealthApplicationDatabaseResponse } from '@app/app-health/application-database';
import { AppHealthApplicationApiResponse } from '@app/app-health/application-api';
import { AppHealthApplicationIntegrationResponse } from '@app/app-health/application-integration';

export class AppHealthApplicationResponse
{
    constructor(
        public readonly id: string,
        public readonly technicalSolutionId: string,
        public readonly name: string,
        public readonly description: string,
        public readonly businessImpact: string,
        public readonly type: string,
        public readonly releaseDate: string,
        public readonly architectureDiagram: string,
        public readonly hasTenants: boolean,
        public readonly hasLicensing: boolean,
        public readonly costLicensesPerYear: number,
        public readonly requestsPerDay: number,
        public readonly views: string,
        public readonly authentications: string,
        public readonly authorizations: string,
        public readonly languages: string,
        public readonly infrastructureServices: string,
        public readonly databases: string,
        public readonly apis: string,
        public readonly integrations: string,
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
        public readonly technicalSolution: AppHealthTechnicalSolutionResponse,
        public readonly applicationView: AppHealthApplicationViewResponse,
        public readonly applicationAuthentication: AppHealthApplicationAuthenticationResponse,
        public readonly applicationAuthorization: AppHealthApplicationAuthorizationResponse,
        public readonly applicationLanguage: AppHealthApplicationLanguageResponse,
        public readonly applicationInfrastructureService: AppHealthApplicationInfrastructureServiceResponse,
        public readonly applicationDatabase: AppHealthApplicationDatabaseResponse,
        public readonly applicationApi: AppHealthApplicationApiResponse,
        public readonly applicationIntegration: AppHealthApplicationIntegrationResponse,
    ) {}
}
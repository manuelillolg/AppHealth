/* eslint-disable indent */
import { ApiProperty } from '@nestjs/swagger';
import { AppHealthTechnicalSolutionDto } from '../../../app-health/technical-solution/dto/app-health-technical-solution.dto';
import { AppHealthApplicationViewDto } from '../../../app-health/application-view/dto/app-health-application-view.dto';
import { AppHealthApplicationAuthenticationDto } from '../../../app-health/application-authentication/dto/app-health-application-authentication.dto';
import { AppHealthApplicationAuthorizationDto } from '../../../app-health/application-authorization/dto/app-health-application-authorization.dto';
import { AppHealthApplicationLanguageDto } from '../../../app-health/application-language/dto/app-health-application-language.dto';
import { AppHealthApplicationInfrastructureServiceDto } from '../../../app-health/application-infrastructure-service/dto/app-health-application-infrastructure-service.dto';
import { AppHealthApplicationDatabaseDto } from '../../../app-health/application-database/dto/app-health-application-database.dto';
import { AppHealthApplicationApiDto } from '../../../app-health/application-api/dto/app-health-application-api.dto';
import { AppHealthApplicationIntegrationDto } from '../../../app-health/application-integration/dto/app-health-application-integration.dto';
import { AppHealthApplicationType } from '@api/graphql';

export class AppHealthApplicationDto
{
    @ApiProperty({
        type       : String,
        description: 'id [input here api field description]',
    })
    id: string;

    @ApiProperty({
        type       : String,
        description: 'technicalSolutionId [input here api field description]',
        example    : '94d9c3cf-5a66-5f4d-9301-77d58c85e2f1',
    })
    technicalSolutionId: string;

    @ApiProperty({
        type       : () => AppHealthTechnicalSolutionDto,
        description: 'AppHealthTechnicalSolution [input here api field description]',
    })
    technicalSolution?: AppHealthTechnicalSolutionDto;

    @ApiProperty({
        type       : String,
        description: 'name [input here api field description]',
    })
    name: string;

    @ApiProperty({
        type       : String,
        description: 'description [input here api field description]',
    })
    description?: string;

    @ApiProperty({
        type       : String,
        description: 'businessImpact [input here api field description]',
    })
    businessImpact?: string;

    @ApiProperty({
        type       : AppHealthApplicationType,
        enum       : ['FRONTEND','SERVER','MOBILE','EMBEDDED'],
        description: 'type [input here api field description]',
    })
    type: AppHealthApplicationType;

    @ApiProperty({
        type       : String,
        description: 'releaseDate [input here api field description]',
    })
    releaseDate: string;

    @ApiProperty({
        type       : String,
        description: 'architectureDiagram [input here api field description]',
    })
    architectureDiagram: string;

    @ApiProperty({
        type       : Boolean,
        description: 'hasTenants [input here api field description]',
    })
    hasTenants: boolean;

    @ApiProperty({
        type       : Boolean,
        description: 'hasLicensing [input here api field description]',
    })
    hasLicensing: boolean;

    @ApiProperty({
        type       : Number,
        description: 'costLicensesPerYear [input here api field description]',
    })
    costLicensesPerYear: number;

    @ApiProperty({
        type       : Number,
        description: 'requestsPerDay [input here api field description]',
    })
    requestsPerDay: number;

    @ApiProperty({
        type       : String,
        description: 'views [input here api field description]',
        example    : '4234cd66-f01e-51ba-8876-a6b2c54eca61',
    })
    views: string;

    @ApiProperty({
        type       : () => AppHealthApplicationViewDto,
        description: 'AppHealthApplicationView [input here api field description]',
    })
    applicationView?: AppHealthApplicationViewDto;

    @ApiProperty({
        type       : String,
        description: 'authentications [input here api field description]',
        example    : 'a2c169a0-6693-5d6d-afb9-137a15633dfb',
    })
    authentications: string;

    @ApiProperty({
        type       : () => AppHealthApplicationAuthenticationDto,
        description: 'AppHealthApplicationAuthentication [input here api field description]',
    })
    applicationAuthentication?: AppHealthApplicationAuthenticationDto;

    @ApiProperty({
        type       : String,
        description: 'authorizations [input here api field description]',
        example    : 'be2a4af2-9a62-50ed-b720-f0cceb6de92c',
    })
    authorizations: string;

    @ApiProperty({
        type       : () => AppHealthApplicationAuthorizationDto,
        description: 'AppHealthApplicationAuthorization [input here api field description]',
    })
    applicationAuthorization?: AppHealthApplicationAuthorizationDto;

    @ApiProperty({
        type       : String,
        description: 'languages [input here api field description]',
        example    : '7e0591fe-ab33-579d-ab6a-9a696c5aa255',
    })
    languages: string;

    @ApiProperty({
        type       : () => AppHealthApplicationLanguageDto,
        description: 'AppHealthApplicationLanguage [input here api field description]',
    })
    applicationLanguage?: AppHealthApplicationLanguageDto;

    @ApiProperty({
        type       : String,
        description: 'infrastructureServices [input here api field description]',
        example    : '13da2399-a261-5399-9b47-8490e864eec5',
    })
    infrastructureServices: string;

    @ApiProperty({
        type       : () => AppHealthApplicationInfrastructureServiceDto,
        description: 'AppHealthApplicationInfrastructureService [input here api field description]',
    })
    applicationInfrastructureService?: AppHealthApplicationInfrastructureServiceDto;

    @ApiProperty({
        type       : String,
        description: 'databases [input here api field description]',
        example    : '2fb5c3b8-8528-580f-9983-67ce8f40828c',
    })
    databases: string;

    @ApiProperty({
        type       : () => AppHealthApplicationDatabaseDto,
        description: 'AppHealthApplicationDatabase [input here api field description]',
    })
    applicationDatabase?: AppHealthApplicationDatabaseDto;

    @ApiProperty({
        type       : String,
        description: 'apis [input here api field description]',
        example    : '2ef8fb03-d58f-54f5-9c3e-1013bbd9cc48',
    })
    apis: string;

    @ApiProperty({
        type       : () => AppHealthApplicationApiDto,
        description: 'AppHealthApplicationApi [input here api field description]',
    })
    applicationApi?: AppHealthApplicationApiDto;

    @ApiProperty({
        type       : String,
        description: 'integrations [input here api field description]',
        example    : '6621c381-1d78-5ec4-b99f-34090fe522ae',
    })
    integrations: string;

    @ApiProperty({
        type       : () => AppHealthApplicationIntegrationDto,
        description: 'AppHealthApplicationIntegration [input here api field description]',
    })
    applicationIntegration?: AppHealthApplicationIntegrationDto;

    @ApiProperty({
        type       : String,
        description: 'createdAt [input here api field description]',
    })
    createdAt?: string;

    @ApiProperty({
        type       : String,
        description: 'updatedAt [input here api field description]',
    })
    updatedAt?: string;

    @ApiProperty({
        type       : String,
        description: 'deletedAt [input here api field description]',
    })
    deletedAt?: string;

}
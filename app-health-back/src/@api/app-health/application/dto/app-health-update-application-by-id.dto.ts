/* eslint-disable indent */
import { ApiProperty } from '@nestjs/swagger';
import { AppHealthApplicationType } from '@api/graphql';

export class AppHealthUpdateApplicationByIdDto
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
    technicalSolutionId?: string;

    @ApiProperty({
        type       : String,
        description: 'name [input here api field description]',
    })
    name?: string;

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
    type?: AppHealthApplicationType;

    @ApiProperty({
        type       : String,
        description: 'releaseDate [input here api field description]',
    })
    releaseDate?: string;

    @ApiProperty({
        type       : String,
        description: 'architectureDiagram [input here api field description]',
    })
    architectureDiagram?: string;

    @ApiProperty({
        type       : Boolean,
        description: 'hasTenants [input here api field description]',
    })
    hasTenants?: boolean;

    @ApiProperty({
        type       : Boolean,
        description: 'hasLicensing [input here api field description]',
    })
    hasLicensing?: boolean;

    @ApiProperty({
        type       : Number,
        description: 'costLicensesPerYear [input here api field description]',
    })
    costLicensesPerYear?: number;

    @ApiProperty({
        type       : Number,
        description: 'requestsPerDay [input here api field description]',
    })
    requestsPerDay?: number;

    @ApiProperty({
        type       : String,
        description: 'views [input here api field description]',
        example    : '4234cd66-f01e-51ba-8876-a6b2c54eca61',
    })
    views?: string;

    @ApiProperty({
        type       : String,
        description: 'authentications [input here api field description]',
        example    : 'a2c169a0-6693-5d6d-afb9-137a15633dfb',
    })
    authentications?: string;

    @ApiProperty({
        type       : String,
        description: 'authorizations [input here api field description]',
        example    : 'be2a4af2-9a62-50ed-b720-f0cceb6de92c',
    })
    authorizations?: string;

    @ApiProperty({
        type       : String,
        description: 'languages [input here api field description]',
        example    : '7e0591fe-ab33-579d-ab6a-9a696c5aa255',
    })
    languages?: string;

    @ApiProperty({
        type       : String,
        description: 'infrastructureServices [input here api field description]',
        example    : '13da2399-a261-5399-9b47-8490e864eec5',
    })
    infrastructureServices?: string;

    @ApiProperty({
        type       : String,
        description: 'databases [input here api field description]',
        example    : '2fb5c3b8-8528-580f-9983-67ce8f40828c',
    })
    databases?: string;

    @ApiProperty({
        type       : String,
        description: 'apis [input here api field description]',
        example    : '2ef8fb03-d58f-54f5-9c3e-1013bbd9cc48',
    })
    apis?: string;

    @ApiProperty({
        type       : String,
        description: 'integrations [input here api field description]',
        example    : '6621c381-1d78-5ec4-b99f-34090fe522ae',
    })
    integrations?: string;

}
/* eslint-disable indent */
import { ApiProperty } from '@nestjs/swagger';
import { AppHealthApplicationDto } from '../../../app-health/application/dto/app-health-application.dto';
import { AppHealthInfrastructureServiceDto } from '../../../app-health/infrastructure-service/dto/app-health-infrastructure-service.dto';

export class AppHealthApplicationInfrastructureServiceDto
{
    @ApiProperty({
        type       : String,
        description: 'id [input here api field description]',
    })
    id: string;

    @ApiProperty({
        type       : String,
        description: 'applicationId [input here api field description]',
        example    : '209e8dce-ce93-5b3d-a4f3-06ce49207393',
    })
    applicationId: string;

    @ApiProperty({
        type       : () => AppHealthApplicationDto,
        description: 'AppHealthApplication [input here api field description]',
    })
    application?: AppHealthApplicationDto;

    @ApiProperty({
        type       : String,
        description: 'infrastructureServiceId [input here api field description]',
        example    : '9c69edd3-a09b-535b-a394-b702feb6c868',
    })
    infrastructureServiceId: string;

    @ApiProperty({
        type       : () => AppHealthInfrastructureServiceDto,
        description: 'AppHealthInfrastructureService [input here api field description]',
    })
    infrastructureService?: AppHealthInfrastructureServiceDto;

    @ApiProperty({
        type       : Number,
        description: 'averageCostPerYear [input here api field description]',
    })
    averageCostPerYear: number;

    @ApiProperty({
        type       : Number,
        description: 'score [input here api field description]',
    })
    score: number;

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
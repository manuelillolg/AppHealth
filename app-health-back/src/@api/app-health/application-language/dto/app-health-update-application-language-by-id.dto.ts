/* eslint-disable indent */
import { ApiProperty } from '@nestjs/swagger';

export class AppHealthUpdateApplicationLanguageByIdDto
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
    applicationId?: string;

    @ApiProperty({
        type       : String,
        description: 'languageId [input here api field description]',
        example    : '8b12060c-04e1-53b6-8ce9-bdce90bf65b8',
    })
    languageId?: string;

    @ApiProperty({
        type       : String,
        description: 'version [input here api field description]',
    })
    version?: string;

    @ApiProperty({
        type       : Number,
        description: 'score [input here api field description]',
    })
    score?: number;

    @ApiProperty({
        type       : Number,
        description: 'codeQualityScore [input here api field description]',
    })
    codeQualityScore?: number;

}
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AppHealthApplicationInfrastructureServiceDto, AppHealthUpdateApplicationInfrastructureServicesDto, AppHealthUpdateApplicationInfrastructureServicesHandler } from '@api/app-health/application-infrastructure-service';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[app-health] application-infrastructure-service')
@Controller('app-health/application-infrastructure-services/update')
export class AppHealthUpdateApplicationInfrastructureServicesController
{
    constructor(
        private readonly handler: AppHealthUpdateApplicationInfrastructureServicesHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update application-infrastructure-services' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: AppHealthApplicationInfrastructureServiceDto })
    async main(
        @Body() payload: AppHealthUpdateApplicationInfrastructureServicesDto,
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
        );
    }
}
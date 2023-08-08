/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AppHealthApplicationInfrastructureServiceDto, AppHealthCreateApplicationInfrastructureServiceDto, AppHealthCreateApplicationInfrastructureServicesHandler } from '@api/app-health/application-infrastructure-service';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[app-health] application-infrastructure-service')
@Controller('app-health/application-infrastructure-services/create')
export class AppHealthCreateApplicationInfrastructureServicesController
{
    constructor(
        private readonly handler: AppHealthCreateApplicationInfrastructureServicesHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create application-infrastructure-services in batch' })
    @ApiCreatedResponse({ description: 'The records has been created successfully.' , type: [AppHealthApplicationInfrastructureServiceDto]})
    @ApiBody({ type: [AppHealthCreateApplicationInfrastructureServiceDto]})
    async main(
        @Body() payload: AppHealthCreateApplicationInfrastructureServiceDto[],
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
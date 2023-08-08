/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AppHealthCreateInfrastructureProviderDto, AppHealthCreateInfrastuctureProvidersHandler, AppHealthInfrastructureProviderDto } from '@api/app-health/infrastructure-provider';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[app-health] infrastructure-provider')
@Controller('app-health/infrastucture-providers/create')
export class AppHealthCreateInfrastuctureProvidersController
{
    constructor(
        private readonly handler: AppHealthCreateInfrastuctureProvidersHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create infrastucture-providers in batch' })
    @ApiCreatedResponse({ description: 'The records has been created successfully.' , type: [AppHealthInfrastructureProviderDto]})
    @ApiBody({ type: [AppHealthCreateInfrastructureProviderDto]})
    async main(
        @Body() payload: AppHealthCreateInfrastructureProviderDto[],
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
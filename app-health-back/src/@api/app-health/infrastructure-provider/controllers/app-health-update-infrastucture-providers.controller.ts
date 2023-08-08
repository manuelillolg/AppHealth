/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AppHealthInfrastructureProviderDto, AppHealthUpdateInfrastuctureProvidersDto, AppHealthUpdateInfrastuctureProvidersHandler } from '@api/app-health/infrastructure-provider';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[app-health] infrastructure-provider')
@Controller('app-health/infrastucture-providers/update')
export class AppHealthUpdateInfrastuctureProvidersController
{
    constructor(
        private readonly handler: AppHealthUpdateInfrastuctureProvidersHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update infrastucture-providers' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: AppHealthInfrastructureProviderDto })
    async main(
        @Body() payload: AppHealthUpdateInfrastuctureProvidersDto,
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
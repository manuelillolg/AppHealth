/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AppHealthDeleteInfrastructureServiceByIdHandler, AppHealthInfrastructureServiceDto } from '@api/app-health/infrastructure-service';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[app-health] infrastructure-service')
@Controller('app-health/infrastructure-service/delete')
export class AppHealthDeleteInfrastructureServiceByIdController
{
    constructor(
        private readonly handler: AppHealthDeleteInfrastructureServiceByIdHandler,
    ) {}

    @Delete(':id')
    @ApiOperation({ summary: 'Delete infrastructure-service by id' })
    @ApiOkResponse({ description: 'The record has been deleted successfully.', type: AppHealthInfrastructureServiceDto })
    async main(
        @Param('id') id: string,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}

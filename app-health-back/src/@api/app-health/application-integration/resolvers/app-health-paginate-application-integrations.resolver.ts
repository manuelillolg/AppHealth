import { AppHealthPaginateApplicationIntegrationsHandler } from '@api/app-health/application-integration';
import { Pagination } from '@api/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppHealthPaginateApplicationIntegrationsResolver
{
    constructor(
        private readonly handler: AppHealthPaginateApplicationIntegrationsHandler,
    ) {}

    @Query('appHealthPaginateApplicationIntegrations')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<Pagination>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}

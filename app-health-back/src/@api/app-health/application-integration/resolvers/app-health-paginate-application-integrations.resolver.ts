import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthPaginateApplicationIntegrationsHandler } from '../handlers/app-health-paginate-application-integrations.handler';
import { Pagination } from '@api/graphql';

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
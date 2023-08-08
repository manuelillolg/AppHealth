import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthPaginateApplicationsHandler } from '../handlers/app-health-paginate-applications.handler';
import { Pagination } from '@api/graphql';

@Resolver()
export class AppHealthPaginateApplicationsResolver
{
    constructor(
        private readonly handler: AppHealthPaginateApplicationsHandler,
    ) {}

    @Query('appHealthPaginateApplications')
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
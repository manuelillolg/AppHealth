import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthPaginateApplicationViewsHandler } from '../handlers/app-health-paginate-application-views.handler';
import { Pagination } from '@api/graphql';

@Resolver()
export class AppHealthPaginateApplicationViewsResolver
{
    constructor(
        private readonly handler: AppHealthPaginateApplicationViewsHandler,
    ) {}

    @Query('appHealthPaginateApplicationViews')
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
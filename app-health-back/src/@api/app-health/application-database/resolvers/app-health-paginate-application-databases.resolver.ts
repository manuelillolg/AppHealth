import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthPaginateApplicationDatabasesHandler } from '../handlers/app-health-paginate-application-databases.handler';
import { Pagination } from '@api/graphql';

@Resolver()
export class AppHealthPaginateApplicationDatabasesResolver
{
    constructor(
        private readonly handler: AppHealthPaginateApplicationDatabasesHandler,
    ) {}

    @Query('appHealthPaginateApplicationDatabases')
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
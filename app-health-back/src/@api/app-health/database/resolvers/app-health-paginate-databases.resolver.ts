import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthPaginateDatabasesHandler } from '../handlers/app-health-paginate-databases.handler';
import { Pagination } from '@api/graphql';

@Resolver()
export class AppHealthPaginateDatabasesResolver
{
    constructor(
        private readonly handler: AppHealthPaginateDatabasesHandler,
    ) {}

    @Query('appHealthPaginateDatabases')
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
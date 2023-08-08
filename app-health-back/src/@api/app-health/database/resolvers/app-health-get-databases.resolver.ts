import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthGetDatabasesHandler } from '../handlers/app-health-get-databases.handler';
import { AppHealthDatabase } from '@api/graphql';

@Resolver()
export class AppHealthGetDatabasesResolver
{
    constructor(
        private readonly handler: AppHealthGetDatabasesHandler,
    ) {}

    @Query('appHealthGetDatabases')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthDatabase[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
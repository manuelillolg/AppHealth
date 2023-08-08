import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthGetApplicationDatabasesHandler } from '../handlers/app-health-get-application-databases.handler';
import { AppHealthApplicationDatabase } from '@api/graphql';

@Resolver()
export class AppHealthGetApplicationDatabasesResolver
{
    constructor(
        private readonly handler: AppHealthGetApplicationDatabasesHandler,
    ) {}

    @Query('appHealthGetApplicationDatabases')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationDatabase[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
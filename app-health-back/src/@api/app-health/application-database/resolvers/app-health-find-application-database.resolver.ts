import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthFindApplicationDatabaseHandler } from '../handlers/app-health-find-application-database.handler';
import { AppHealthApplicationDatabase } from '@api/graphql';

@Resolver()
export class AppHealthFindApplicationDatabaseResolver
{
    constructor(
        private readonly handler: AppHealthFindApplicationDatabaseHandler,
    ) {}

    @Query('appHealthFindApplicationDatabase')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationDatabase>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
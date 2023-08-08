import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthFindDatabaseHandler } from '../handlers/app-health-find-database.handler';
import { AppHealthDatabase } from '@api/graphql';

@Resolver()
export class AppHealthFindDatabaseResolver
{
    constructor(
        private readonly handler: AppHealthFindDatabaseHandler,
    ) {}

    @Query('appHealthFindDatabase')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthDatabase>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
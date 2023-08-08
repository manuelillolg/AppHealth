import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteDatabasesHandler } from '../handlers/app-health-delete-databases.handler';
import { AppHealthDatabase } from '@api/graphql';

@Resolver()
export class AppHealthDeleteDatabasesResolver
{
    constructor(
        private readonly handler: AppHealthDeleteDatabasesHandler,
    ) {}

    @Mutation('appHealthDeleteDatabases')
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
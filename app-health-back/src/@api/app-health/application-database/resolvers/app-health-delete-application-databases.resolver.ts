import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteApplicationDatabasesHandler } from '../handlers/app-health-delete-application-databases.handler';
import { AppHealthApplicationDatabase } from '@api/graphql';

@Resolver()
export class AppHealthDeleteApplicationDatabasesResolver
{
    constructor(
        private readonly handler: AppHealthDeleteApplicationDatabasesHandler,
    ) {}

    @Mutation('appHealthDeleteApplicationDatabases')
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
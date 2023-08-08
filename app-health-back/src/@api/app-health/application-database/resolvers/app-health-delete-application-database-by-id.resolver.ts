import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteApplicationDatabaseByIdHandler } from '../handlers/app-health-delete-application-database-by-id.handler';
import { AppHealthApplicationDatabase } from '@api/graphql';

@Resolver()
export class AppHealthDeleteApplicationDatabaseByIdResolver
{
    constructor(
        private readonly handler: AppHealthDeleteApplicationDatabaseByIdHandler,
    ) {}

    @Mutation('appHealthDeleteApplicationDatabaseById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationDatabase>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
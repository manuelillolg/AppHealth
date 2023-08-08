import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteDatabaseByIdHandler } from '../handlers/app-health-delete-database-by-id.handler';
import { AppHealthDatabase } from '@api/graphql';

@Resolver()
export class AppHealthDeleteDatabaseByIdResolver
{
    constructor(
        private readonly handler: AppHealthDeleteDatabaseByIdHandler,
    ) {}

    @Mutation('appHealthDeleteDatabaseById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthDatabase>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
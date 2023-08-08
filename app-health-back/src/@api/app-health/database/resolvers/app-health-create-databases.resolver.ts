import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthCreateDatabasesHandler } from '../handlers/app-health-create-databases.handler';
import { AppHealthCreateDatabaseInput } from '@api/graphql';

@Resolver()
export class AppHealthCreateDatabasesResolver
{
    constructor(
        private readonly handler: AppHealthCreateDatabasesHandler,
    ) {}

    @Mutation('appHealthCreateDatabases')
    async main(
        @Args('payload') payload: AppHealthCreateDatabaseInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
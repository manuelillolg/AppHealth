import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthCreateApplicationDatabasesHandler } from '../handlers/app-health-create-application-databases.handler';
import { AppHealthCreateApplicationDatabaseInput } from '@api/graphql';

@Resolver()
export class AppHealthCreateApplicationDatabasesResolver
{
    constructor(
        private readonly handler: AppHealthCreateApplicationDatabasesHandler,
    ) {}

    @Mutation('appHealthCreateApplicationDatabases')
    async main(
        @Args('payload') payload: AppHealthCreateApplicationDatabaseInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthCreateApplicationsHandler } from '../handlers/app-health-create-applications.handler';
import { AppHealthCreateApplicationInput } from '@api/graphql';

@Resolver()
export class AppHealthCreateApplicationsResolver
{
    constructor(
        private readonly handler: AppHealthCreateApplicationsHandler,
    ) {}

    @Mutation('appHealthCreateApplications')
    async main(
        @Args('payload') payload: AppHealthCreateApplicationInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
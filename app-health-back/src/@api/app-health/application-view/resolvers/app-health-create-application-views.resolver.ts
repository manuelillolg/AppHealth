import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthCreateApplicationViewsHandler } from '../handlers/app-health-create-application-views.handler';
import { AppHealthCreateApplicationViewInput } from '@api/graphql';

@Resolver()
export class AppHealthCreateApplicationViewsResolver
{
    constructor(
        private readonly handler: AppHealthCreateApplicationViewsHandler,
    ) {}

    @Mutation('appHealthCreateApplicationViews')
    async main(
        @Args('payload') payload: AppHealthCreateApplicationViewInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
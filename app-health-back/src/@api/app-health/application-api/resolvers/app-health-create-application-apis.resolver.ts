import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthCreateApplicationApisHandler } from '../handlers/app-health-create-application-apis.handler';
import { AppHealthCreateApplicationApiInput } from '@api/graphql';

@Resolver()
export class AppHealthCreateApplicationApisResolver
{
    constructor(
        private readonly handler: AppHealthCreateApplicationApisHandler,
    ) {}

    @Mutation('appHealthCreateApplicationApis')
    async main(
        @Args('payload') payload: AppHealthCreateApplicationApiInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
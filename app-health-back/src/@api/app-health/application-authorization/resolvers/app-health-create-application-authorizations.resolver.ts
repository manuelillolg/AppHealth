import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthCreateApplicationAuthorizationsHandler } from '../handlers/app-health-create-application-authorizations.handler';
import { AppHealthCreateApplicationAuthorizationInput } from '@api/graphql';

@Resolver()
export class AppHealthCreateApplicationAuthorizationsResolver
{
    constructor(
        private readonly handler: AppHealthCreateApplicationAuthorizationsHandler,
    ) {}

    @Mutation('appHealthCreateApplicationAuthorizations')
    async main(
        @Args('payload') payload: AppHealthCreateApplicationAuthorizationInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
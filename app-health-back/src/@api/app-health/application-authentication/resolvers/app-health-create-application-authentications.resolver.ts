import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthCreateApplicationAuthenticationsHandler } from '../handlers/app-health-create-application-authentications.handler';
import { AppHealthCreateApplicationAuthenticationInput } from '@api/graphql';

@Resolver()
export class AppHealthCreateApplicationAuthenticationsResolver
{
    constructor(
        private readonly handler: AppHealthCreateApplicationAuthenticationsHandler,
    ) {}

    @Mutation('appHealthCreateApplicationAuthentications')
    async main(
        @Args('payload') payload: AppHealthCreateApplicationAuthenticationInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
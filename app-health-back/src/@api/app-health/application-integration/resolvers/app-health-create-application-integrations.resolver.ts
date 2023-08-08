import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthCreateApplicationIntegrationsHandler } from '../handlers/app-health-create-application-integrations.handler';
import { AppHealthCreateApplicationIntegrationInput } from '@api/graphql';

@Resolver()
export class AppHealthCreateApplicationIntegrationsResolver
{
    constructor(
        private readonly handler: AppHealthCreateApplicationIntegrationsHandler,
    ) {}

    @Mutation('appHealthCreateApplicationIntegrations')
    async main(
        @Args('payload') payload: AppHealthCreateApplicationIntegrationInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
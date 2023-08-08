import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthGetApplicationIntegrationsHandler } from '../handlers/app-health-get-application-integrations.handler';
import { AppHealthApplicationIntegration } from '@api/graphql';

@Resolver()
export class AppHealthGetApplicationIntegrationsResolver
{
    constructor(
        private readonly handler: AppHealthGetApplicationIntegrationsHandler,
    ) {}

    @Query('appHealthGetApplicationIntegrations')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationIntegration[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
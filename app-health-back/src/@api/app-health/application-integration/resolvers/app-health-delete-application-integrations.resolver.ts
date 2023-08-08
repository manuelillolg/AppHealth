import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteApplicationIntegrationsHandler } from '../handlers/app-health-delete-application-integrations.handler';
import { AppHealthApplicationIntegration } from '@api/graphql';

@Resolver()
export class AppHealthDeleteApplicationIntegrationsResolver
{
    constructor(
        private readonly handler: AppHealthDeleteApplicationIntegrationsHandler,
    ) {}

    @Mutation('appHealthDeleteApplicationIntegrations')
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
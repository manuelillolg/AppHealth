import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteApplicationIntegrationByIdHandler } from '../handlers/app-health-delete-application-integration-by-id.handler';
import { AppHealthApplicationIntegration } from '@api/graphql';

@Resolver()
export class AppHealthDeleteApplicationIntegrationByIdResolver
{
    constructor(
        private readonly handler: AppHealthDeleteApplicationIntegrationByIdHandler,
    ) {}

    @Mutation('appHealthDeleteApplicationIntegrationById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationIntegration>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
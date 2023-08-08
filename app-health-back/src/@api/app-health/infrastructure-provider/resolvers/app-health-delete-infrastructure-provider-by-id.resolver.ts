import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteInfrastructureProviderByIdHandler } from '../handlers/app-health-delete-infrastructure-provider-by-id.handler';
import { AppHealthInfrastructureProvider } from '@api/graphql';

@Resolver()
export class AppHealthDeleteInfrastructureProviderByIdResolver
{
    constructor(
        private readonly handler: AppHealthDeleteInfrastructureProviderByIdHandler,
    ) {}

    @Mutation('appHealthDeleteInfrastructureProviderById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthInfrastructureProvider>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteInfrastuctureProvidersHandler } from '../handlers/app-health-delete-infrastucture-providers.handler';
import { AppHealthInfrastructureProvider } from '@api/graphql';

@Resolver()
export class AppHealthDeleteInfrastuctureProvidersResolver
{
    constructor(
        private readonly handler: AppHealthDeleteInfrastuctureProvidersHandler,
    ) {}

    @Mutation('appHealthDeleteInfrastuctureProviders')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthInfrastructureProvider[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
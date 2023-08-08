import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthFindInfrastructureProviderHandler } from '../handlers/app-health-find-infrastructure-provider.handler';
import { AppHealthInfrastructureProvider } from '@api/graphql';

@Resolver()
export class AppHealthFindInfrastructureProviderResolver
{
    constructor(
        private readonly handler: AppHealthFindInfrastructureProviderHandler,
    ) {}

    @Query('appHealthFindInfrastructureProvider')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthInfrastructureProvider>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
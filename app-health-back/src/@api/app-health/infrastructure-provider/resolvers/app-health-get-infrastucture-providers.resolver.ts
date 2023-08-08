import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthGetInfrastuctureProvidersHandler } from '../handlers/app-health-get-infrastucture-providers.handler';
import { AppHealthInfrastructureProvider } from '@api/graphql';

@Resolver()
export class AppHealthGetInfrastuctureProvidersResolver
{
    constructor(
        private readonly handler: AppHealthGetInfrastuctureProvidersHandler,
    ) {}

    @Query('appHealthGetInfrastuctureProviders')
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
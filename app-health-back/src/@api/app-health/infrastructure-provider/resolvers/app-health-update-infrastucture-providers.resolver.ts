import { AppHealthUpdateInfrastuctureProvidersHandler } from '@api/app-health/infrastructure-provider';
import { AppHealthInfrastructureProvider, AppHealthUpdateInfrastuctureProvidersInput } from '@api/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppHealthUpdateInfrastuctureProvidersResolver
{
    constructor(
        private readonly handler: AppHealthUpdateInfrastuctureProvidersHandler,
    ) {}

    @Mutation('appHealthUpdateInfrastuctureProviders')
    async main(
        @Args('payload') payload: AppHealthUpdateInfrastuctureProvidersInput,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthInfrastructureProvider>
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
        );
    }
}
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthCreateInfrastuctureProvidersHandler } from '../handlers/app-health-create-infrastucture-providers.handler';
import { AppHealthCreateInfrastructureProviderInput } from '@api/graphql';

@Resolver()
export class AppHealthCreateInfrastuctureProvidersResolver
{
    constructor(
        private readonly handler: AppHealthCreateInfrastuctureProvidersHandler,
    ) {}

    @Mutation('appHealthCreateInfrastuctureProviders')
    async main(
        @Args('payload') payload: AppHealthCreateInfrastructureProviderInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
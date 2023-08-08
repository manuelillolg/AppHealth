import { AppHealthUpdateApplicationInfrastructureServicesHandler } from '@api/app-health/application-infrastructure-service';
import { AppHealthApplicationInfrastructureService, AppHealthUpdateApplicationInfrastructureServicesInput } from '@api/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppHealthUpdateApplicationInfrastructureServicesResolver
{
    constructor(
        private readonly handler: AppHealthUpdateApplicationInfrastructureServicesHandler,
    ) {}

    @Mutation('appHealthUpdateApplicationInfrastructureServices')
    async main(
        @Args('payload') payload: AppHealthUpdateApplicationInfrastructureServicesInput,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationInfrastructureService>
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
        );
    }
}
import { AppHealthCreateApplicationInfrastructureServicesHandler } from '@api/app-health/application-infrastructure-service';
import { AppHealthCreateApplicationInfrastructureServiceInput } from '@api/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppHealthCreateApplicationInfrastructureServicesResolver
{
    constructor(
        private readonly handler: AppHealthCreateApplicationInfrastructureServicesHandler,
    ) {}

    @Mutation('appHealthCreateApplicationInfrastructureServices')
    async main(
        @Args('payload') payload: AppHealthCreateApplicationInfrastructureServiceInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}

import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthCreateApplicationInfrastructureServicesHandler } from '../handlers/app-health-create-application-infrastructure-services.handler';
import { AppHealthCreateApplicationInfrastructureServiceInput } from '@api/graphql';

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
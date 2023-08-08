import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthCreateInfrastructureServicesHandler } from '../handlers/app-health-create-infrastructure-services.handler';
import { AppHealthCreateInfrastructureServiceInput } from '@api/graphql';

@Resolver()
export class AppHealthCreateInfrastructureServicesResolver
{
    constructor(
        private readonly handler: AppHealthCreateInfrastructureServicesHandler,
    ) {}

    @Mutation('appHealthCreateInfrastructureServices')
    async main(
        @Args('payload') payload: AppHealthCreateInfrastructureServiceInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
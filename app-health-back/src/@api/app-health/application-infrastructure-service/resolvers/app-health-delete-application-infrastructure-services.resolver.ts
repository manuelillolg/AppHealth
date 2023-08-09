import { AppHealthDeleteApplicationInfrastructureServicesHandler } from '@api/app-health/application-infrastructure-service';
import { AppHealthApplicationInfrastructureService } from '@api/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppHealthDeleteApplicationInfrastructureServicesResolver
{
    constructor(
        private readonly handler: AppHealthDeleteApplicationInfrastructureServicesHandler,
    ) {}

    @Mutation('appHealthDeleteApplicationInfrastructureServices')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationInfrastructureService[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}

import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteApplicationInfrastructureServicesHandler } from '../handlers/app-health-delete-application-infrastructure-services.handler';
import { AppHealthApplicationInfrastructureService } from '@api/graphql';

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
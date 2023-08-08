import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteInfrastructureServicesHandler } from '../handlers/app-health-delete-infrastructure-services.handler';
import { AppHealthInfrastructureService } from '@api/graphql';

@Resolver()
export class AppHealthDeleteInfrastructureServicesResolver
{
    constructor(
        private readonly handler: AppHealthDeleteInfrastructureServicesHandler,
    ) {}

    @Mutation('appHealthDeleteInfrastructureServices')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthInfrastructureService[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
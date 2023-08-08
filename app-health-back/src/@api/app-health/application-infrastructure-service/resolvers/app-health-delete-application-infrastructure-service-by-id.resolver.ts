import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteApplicationInfrastructureServiceByIdHandler } from '../handlers/app-health-delete-application-infrastructure-service-by-id.handler';
import { AppHealthApplicationInfrastructureService } from '@api/graphql';

@Resolver()
export class AppHealthDeleteApplicationInfrastructureServiceByIdResolver
{
    constructor(
        private readonly handler: AppHealthDeleteApplicationInfrastructureServiceByIdHandler,
    ) {}

    @Mutation('appHealthDeleteApplicationInfrastructureServiceById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationInfrastructureService>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
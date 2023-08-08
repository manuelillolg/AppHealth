import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteInfrastructureServiceByIdHandler } from '../handlers/app-health-delete-infrastructure-service-by-id.handler';
import { AppHealthInfrastructureService } from '@api/graphql';

@Resolver()
export class AppHealthDeleteInfrastructureServiceByIdResolver
{
    constructor(
        private readonly handler: AppHealthDeleteInfrastructureServiceByIdHandler,
    ) {}

    @Mutation('appHealthDeleteInfrastructureServiceById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthInfrastructureService>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthGetInfrastructureServicesHandler } from '../handlers/app-health-get-infrastructure-services.handler';
import { AppHealthInfrastructureService } from '@api/graphql';

@Resolver()
export class AppHealthGetInfrastructureServicesResolver
{
    constructor(
        private readonly handler: AppHealthGetInfrastructureServicesHandler,
    ) {}

    @Query('appHealthGetInfrastructureServices')
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
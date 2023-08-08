import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthGetApplicationInfrastructureServicesHandler } from '../handlers/app-health-get-application-infrastructure-services.handler';
import { AppHealthApplicationInfrastructureService } from '@api/graphql';

@Resolver()
export class AppHealthGetApplicationInfrastructureServicesResolver
{
    constructor(
        private readonly handler: AppHealthGetApplicationInfrastructureServicesHandler,
    ) {}

    @Query('appHealthGetApplicationInfrastructureServices')
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
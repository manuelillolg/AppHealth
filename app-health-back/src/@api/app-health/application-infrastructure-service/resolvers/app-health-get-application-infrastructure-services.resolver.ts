import { AppHealthGetApplicationInfrastructureServicesHandler } from '@api/app-health/application-infrastructure-service';
import { AppHealthApplicationInfrastructureService } from '@api/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

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

import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthFindApplicationInfrastructureServiceHandler } from '../handlers/app-health-find-application-infrastructure-service.handler';
import { AppHealthApplicationInfrastructureService } from '@api/graphql';

@Resolver()
export class AppHealthFindApplicationInfrastructureServiceResolver
{
    constructor(
        private readonly handler: AppHealthFindApplicationInfrastructureServiceHandler,
    ) {}

    @Query('appHealthFindApplicationInfrastructureService')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationInfrastructureService>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
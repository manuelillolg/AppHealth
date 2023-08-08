import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthFindApplicationIntegrationHandler } from '../handlers/app-health-find-application-integration.handler';
import { AppHealthApplicationIntegration } from '@api/graphql';

@Resolver()
export class AppHealthFindApplicationIntegrationResolver
{
    constructor(
        private readonly handler: AppHealthFindApplicationIntegrationHandler,
    ) {}

    @Query('appHealthFindApplicationIntegration')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationIntegration>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
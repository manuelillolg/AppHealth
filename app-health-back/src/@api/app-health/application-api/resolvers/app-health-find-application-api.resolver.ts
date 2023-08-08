import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthFindApplicationApiHandler } from '../handlers/app-health-find-application-api.handler';
import { AppHealthApplicationApi } from '@api/graphql';

@Resolver()
export class AppHealthFindApplicationApiResolver
{
    constructor(
        private readonly handler: AppHealthFindApplicationApiHandler,
    ) {}

    @Query('appHealthFindApplicationApi')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationApi>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
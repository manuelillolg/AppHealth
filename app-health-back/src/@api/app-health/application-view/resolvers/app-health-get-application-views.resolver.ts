import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthGetApplicationViewsHandler } from '../handlers/app-health-get-application-views.handler';
import { AppHealthApplicationView } from '@api/graphql';

@Resolver()
export class AppHealthGetApplicationViewsResolver
{
    constructor(
        private readonly handler: AppHealthGetApplicationViewsHandler,
    ) {}

    @Query('appHealthGetApplicationViews')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationView[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
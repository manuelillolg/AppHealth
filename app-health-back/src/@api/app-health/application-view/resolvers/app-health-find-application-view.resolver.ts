import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthFindApplicationViewHandler } from '../handlers/app-health-find-application-view.handler';
import { AppHealthApplicationView } from '@api/graphql';

@Resolver()
export class AppHealthFindApplicationViewResolver
{
    constructor(
        private readonly handler: AppHealthFindApplicationViewHandler,
    ) {}

    @Query('appHealthFindApplicationView')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationView>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
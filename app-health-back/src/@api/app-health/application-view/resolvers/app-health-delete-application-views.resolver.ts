import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteApplicationViewsHandler } from '../handlers/app-health-delete-application-views.handler';
import { AppHealthApplicationView } from '@api/graphql';

@Resolver()
export class AppHealthDeleteApplicationViewsResolver
{
    constructor(
        private readonly handler: AppHealthDeleteApplicationViewsHandler,
    ) {}

    @Mutation('appHealthDeleteApplicationViews')
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
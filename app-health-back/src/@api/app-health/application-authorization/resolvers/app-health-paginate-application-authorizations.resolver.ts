import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthPaginateApplicationAuthorizationsHandler } from '../handlers/app-health-paginate-application-authorizations.handler';
import { Pagination } from '@api/graphql';

@Resolver()
export class AppHealthPaginateApplicationAuthorizationsResolver
{
    constructor(
        private readonly handler: AppHealthPaginateApplicationAuthorizationsHandler,
    ) {}

    @Query('appHealthPaginateApplicationAuthorizations')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<Pagination>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
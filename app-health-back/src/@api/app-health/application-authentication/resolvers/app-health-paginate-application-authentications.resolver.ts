import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthPaginateApplicationAuthenticationsHandler } from '../handlers/app-health-paginate-application-authentications.handler';
import { Pagination } from '@api/graphql';

@Resolver()
export class AppHealthPaginateApplicationAuthenticationsResolver
{
    constructor(
        private readonly handler: AppHealthPaginateApplicationAuthenticationsHandler,
    ) {}

    @Query('appHealthPaginateApplicationAuthentications')
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
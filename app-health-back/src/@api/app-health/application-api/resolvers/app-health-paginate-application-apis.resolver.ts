import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthPaginateApplicationApisHandler } from '../handlers/app-health-paginate-application-apis.handler';
import { Pagination } from '@api/graphql';

@Resolver()
export class AppHealthPaginateApplicationApisResolver
{
    constructor(
        private readonly handler: AppHealthPaginateApplicationApisHandler,
    ) {}

    @Query('appHealthPaginateApplicationApis')
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
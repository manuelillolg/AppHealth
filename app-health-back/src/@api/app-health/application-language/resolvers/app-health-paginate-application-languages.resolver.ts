import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthPaginateApplicationLanguagesHandler } from '../handlers/app-health-paginate-application-languages.handler';
import { Pagination } from '@api/graphql';

@Resolver()
export class AppHealthPaginateApplicationLanguagesResolver
{
    constructor(
        private readonly handler: AppHealthPaginateApplicationLanguagesHandler,
    ) {}

    @Query('appHealthPaginateApplicationLanguages')
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
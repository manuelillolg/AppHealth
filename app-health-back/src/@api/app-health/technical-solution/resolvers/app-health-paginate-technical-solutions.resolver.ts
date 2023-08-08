import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthPaginateTechnicalSolutionsHandler } from '../handlers/app-health-paginate-technical-solutions.handler';
import { Pagination } from '@api/graphql';

@Resolver()
export class AppHealthPaginateTechnicalSolutionsResolver
{
    constructor(
        private readonly handler: AppHealthPaginateTechnicalSolutionsHandler,
    ) {}

    @Query('appHealthPaginateTechnicalSolutions')
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
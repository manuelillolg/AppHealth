import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthGetTechnicalSolutionsHandler } from '../handlers/app-health-get-technical-solutions.handler';
import { AppHealthTechnicalSolution } from '@api/graphql';

@Resolver()
export class AppHealthGetTechnicalSolutionsResolver
{
    constructor(
        private readonly handler: AppHealthGetTechnicalSolutionsHandler,
    ) {}

    @Query('appHealthGetTechnicalSolutions')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthTechnicalSolution[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
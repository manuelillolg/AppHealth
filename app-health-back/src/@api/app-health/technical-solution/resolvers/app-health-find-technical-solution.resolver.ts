import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthFindTechnicalSolutionHandler } from '../handlers/app-health-find-technical-solution.handler';
import { AppHealthTechnicalSolution } from '@api/graphql';

@Resolver()
export class AppHealthFindTechnicalSolutionResolver
{
    constructor(
        private readonly handler: AppHealthFindTechnicalSolutionHandler,
    ) {}

    @Query('appHealthFindTechnicalSolution')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthTechnicalSolution>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
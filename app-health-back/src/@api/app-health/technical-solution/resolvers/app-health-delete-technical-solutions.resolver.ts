import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteTechnicalSolutionsHandler } from '../handlers/app-health-delete-technical-solutions.handler';
import { AppHealthTechnicalSolution } from '@api/graphql';

@Resolver()
export class AppHealthDeleteTechnicalSolutionsResolver
{
    constructor(
        private readonly handler: AppHealthDeleteTechnicalSolutionsHandler,
    ) {}

    @Mutation('appHealthDeleteTechnicalSolutions')
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
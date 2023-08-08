import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteTechnicalSolutionByIdHandler } from '../handlers/app-health-delete-technical-solution-by-id.handler';
import { AppHealthTechnicalSolution } from '@api/graphql';

@Resolver()
export class AppHealthDeleteTechnicalSolutionByIdResolver
{
    constructor(
        private readonly handler: AppHealthDeleteTechnicalSolutionByIdHandler,
    ) {}

    @Mutation('appHealthDeleteTechnicalSolutionById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthTechnicalSolution>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
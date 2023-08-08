import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthCreateTechnicalSolutionsHandler } from '../handlers/app-health-create-technical-solutions.handler';
import { AppHealthCreateTechnicalSolutionInput } from '@api/graphql';

@Resolver()
export class AppHealthCreateTechnicalSolutionsResolver
{
    constructor(
        private readonly handler: AppHealthCreateTechnicalSolutionsHandler,
    ) {}

    @Mutation('appHealthCreateTechnicalSolutions')
    async main(
        @Args('payload') payload: AppHealthCreateTechnicalSolutionInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
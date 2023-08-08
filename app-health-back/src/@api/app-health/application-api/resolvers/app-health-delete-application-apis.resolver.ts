import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteApplicationApisHandler } from '../handlers/app-health-delete-application-apis.handler';
import { AppHealthApplicationApi } from '@api/graphql';

@Resolver()
export class AppHealthDeleteApplicationApisResolver
{
    constructor(
        private readonly handler: AppHealthDeleteApplicationApisHandler,
    ) {}

    @Mutation('appHealthDeleteApplicationApis')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationApi[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
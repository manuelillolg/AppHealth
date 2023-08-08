import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteApplicationsHandler } from '../handlers/app-health-delete-applications.handler';
import { AppHealthApplication } from '@api/graphql';

@Resolver()
export class AppHealthDeleteApplicationsResolver
{
    constructor(
        private readonly handler: AppHealthDeleteApplicationsHandler,
    ) {}

    @Mutation('appHealthDeleteApplications')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplication[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
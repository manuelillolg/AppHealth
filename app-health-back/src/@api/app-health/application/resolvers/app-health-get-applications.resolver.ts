import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthGetApplicationsHandler } from '../handlers/app-health-get-applications.handler';
import { AppHealthApplication } from '@api/graphql';

@Resolver()
export class AppHealthGetApplicationsResolver
{
    constructor(
        private readonly handler: AppHealthGetApplicationsHandler,
    ) {}

    @Query('appHealthGetApplications')
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
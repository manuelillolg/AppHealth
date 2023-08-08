import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthGetApplicationApisHandler } from '../handlers/app-health-get-application-apis.handler';
import { AppHealthApplicationApi } from '@api/graphql';

@Resolver()
export class AppHealthGetApplicationApisResolver
{
    constructor(
        private readonly handler: AppHealthGetApplicationApisHandler,
    ) {}

    @Query('appHealthGetApplicationApis')
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
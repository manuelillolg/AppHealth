import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthGetApplicationAuthorizationsHandler } from '../handlers/app-health-get-application-authorizations.handler';
import { AppHealthApplicationAuthorization } from '@api/graphql';

@Resolver()
export class AppHealthGetApplicationAuthorizationsResolver
{
    constructor(
        private readonly handler: AppHealthGetApplicationAuthorizationsHandler,
    ) {}

    @Query('appHealthGetApplicationAuthorizations')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationAuthorization[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
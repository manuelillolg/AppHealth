import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthGetApplicationAuthenticationsHandler } from '../handlers/app-health-get-application-authentications.handler';
import { AppHealthApplicationAuthentication } from '@api/graphql';

@Resolver()
export class AppHealthGetApplicationAuthenticationsResolver
{
    constructor(
        private readonly handler: AppHealthGetApplicationAuthenticationsHandler,
    ) {}

    @Query('appHealthGetApplicationAuthentications')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationAuthentication[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthFindApplicationAuthenticationHandler } from '../handlers/app-health-find-application-authentication.handler';
import { AppHealthApplicationAuthentication } from '@api/graphql';

@Resolver()
export class AppHealthFindApplicationAuthenticationResolver
{
    constructor(
        private readonly handler: AppHealthFindApplicationAuthenticationHandler,
    ) {}

    @Query('appHealthFindApplicationAuthentication')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationAuthentication>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
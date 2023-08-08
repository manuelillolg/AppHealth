import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthFindApplicationAuthorizationHandler } from '../handlers/app-health-find-application-authorization.handler';
import { AppHealthApplicationAuthorization } from '@api/graphql';

@Resolver()
export class AppHealthFindApplicationAuthorizationResolver
{
    constructor(
        private readonly handler: AppHealthFindApplicationAuthorizationHandler,
    ) {}

    @Query('appHealthFindApplicationAuthorization')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationAuthorization>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthFindAuthenticationInterfaceHandler } from '../handlers/app-health-find-authentication-interface.handler';
import { AppHealthAuthenticationInterface } from '@api/graphql';

@Resolver()
export class AppHealthFindAuthenticationInterfaceResolver
{
    constructor(
        private readonly handler: AppHealthFindAuthenticationInterfaceHandler,
    ) {}

    @Query('appHealthFindAuthenticationInterface')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthAuthenticationInterface>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
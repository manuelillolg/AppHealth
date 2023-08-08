import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthFindAuthorizationInterfaceHandler } from '../handlers/app-health-find-authorization-interface.handler';
import { AppHealthAuthorizationInterface } from '@api/graphql';

@Resolver()
export class AppHealthFindAuthorizationInterfaceResolver
{
    constructor(
        private readonly handler: AppHealthFindAuthorizationInterfaceHandler,
    ) {}

    @Query('appHealthFindAuthorizationInterface')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthAuthorizationInterface>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
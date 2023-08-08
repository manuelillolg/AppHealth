import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthGetAuthorizationInterfacesHandler } from '../handlers/app-health-get-authorization-interfaces.handler';
import { AppHealthAuthorizationInterface } from '@api/graphql';

@Resolver()
export class AppHealthGetAuthorizationInterfacesResolver
{
    constructor(
        private readonly handler: AppHealthGetAuthorizationInterfacesHandler,
    ) {}

    @Query('appHealthGetAuthorizationInterfaces')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthAuthorizationInterface[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
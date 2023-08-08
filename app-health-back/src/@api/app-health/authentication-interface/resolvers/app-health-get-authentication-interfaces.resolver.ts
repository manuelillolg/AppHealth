import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthGetAuthenticationInterfacesHandler } from '../handlers/app-health-get-authentication-interfaces.handler';
import { AppHealthAuthenticationInterface } from '@api/graphql';

@Resolver()
export class AppHealthGetAuthenticationInterfacesResolver
{
    constructor(
        private readonly handler: AppHealthGetAuthenticationInterfacesHandler,
    ) {}

    @Query('appHealthGetAuthenticationInterfaces')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthAuthenticationInterface[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
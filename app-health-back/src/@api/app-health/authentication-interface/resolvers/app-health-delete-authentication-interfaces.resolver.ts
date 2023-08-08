import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteAuthenticationInterfacesHandler } from '../handlers/app-health-delete-authentication-interfaces.handler';
import { AppHealthAuthenticationInterface } from '@api/graphql';

@Resolver()
export class AppHealthDeleteAuthenticationInterfacesResolver
{
    constructor(
        private readonly handler: AppHealthDeleteAuthenticationInterfacesHandler,
    ) {}

    @Mutation('appHealthDeleteAuthenticationInterfaces')
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
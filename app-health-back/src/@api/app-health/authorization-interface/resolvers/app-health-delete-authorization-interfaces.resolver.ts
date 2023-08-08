import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteAuthorizationInterfacesHandler } from '../handlers/app-health-delete-authorization-interfaces.handler';
import { AppHealthAuthorizationInterface } from '@api/graphql';

@Resolver()
export class AppHealthDeleteAuthorizationInterfacesResolver
{
    constructor(
        private readonly handler: AppHealthDeleteAuthorizationInterfacesHandler,
    ) {}

    @Mutation('appHealthDeleteAuthorizationInterfaces')
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
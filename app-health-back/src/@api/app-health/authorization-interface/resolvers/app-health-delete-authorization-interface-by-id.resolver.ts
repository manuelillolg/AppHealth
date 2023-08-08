import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteAuthorizationInterfaceByIdHandler } from '../handlers/app-health-delete-authorization-interface-by-id.handler';
import { AppHealthAuthorizationInterface } from '@api/graphql';

@Resolver()
export class AppHealthDeleteAuthorizationInterfaceByIdResolver
{
    constructor(
        private readonly handler: AppHealthDeleteAuthorizationInterfaceByIdHandler,
    ) {}

    @Mutation('appHealthDeleteAuthorizationInterfaceById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthAuthorizationInterface>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteAuthenticationInterfaceByIdHandler } from '../handlers/app-health-delete-authentication-interface-by-id.handler';
import { AppHealthAuthenticationInterface } from '@api/graphql';

@Resolver()
export class AppHealthDeleteAuthenticationInterfaceByIdResolver
{
    constructor(
        private readonly handler: AppHealthDeleteAuthenticationInterfaceByIdHandler,
    ) {}

    @Mutation('appHealthDeleteAuthenticationInterfaceById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthAuthenticationInterface>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
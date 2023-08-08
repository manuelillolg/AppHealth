import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthCreateAuthenticationInterfacesHandler } from '../handlers/app-health-create-authentication-interfaces.handler';
import { AppHealthCreateAuthenticationInterfaceInput } from '@api/graphql';

@Resolver()
export class AppHealthCreateAuthenticationInterfacesResolver
{
    constructor(
        private readonly handler: AppHealthCreateAuthenticationInterfacesHandler,
    ) {}

    @Mutation('appHealthCreateAuthenticationInterfaces')
    async main(
        @Args('payload') payload: AppHealthCreateAuthenticationInterfaceInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
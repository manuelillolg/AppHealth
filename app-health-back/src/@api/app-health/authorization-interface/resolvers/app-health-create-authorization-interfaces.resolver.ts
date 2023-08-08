import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthCreateAuthorizationInterfacesHandler } from '../handlers/app-health-create-authorization-interfaces.handler';
import { AppHealthCreateAuthorizationInterfaceInput } from '@api/graphql';

@Resolver()
export class AppHealthCreateAuthorizationInterfacesResolver
{
    constructor(
        private readonly handler: AppHealthCreateAuthorizationInterfacesHandler,
    ) {}

    @Mutation('appHealthCreateAuthorizationInterfaces')
    async main(
        @Args('payload') payload: AppHealthCreateAuthorizationInterfaceInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
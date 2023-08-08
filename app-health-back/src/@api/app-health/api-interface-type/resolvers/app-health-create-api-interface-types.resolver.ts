import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthCreateApiInterfaceTypesHandler } from '../handlers/app-health-create-api-interface-types.handler';
import { AppHealthCreateApiInterfaceTypeInput } from '@api/graphql';

@Resolver()
export class AppHealthCreateApiInterfaceTypesResolver
{
    constructor(
        private readonly handler: AppHealthCreateApiInterfaceTypesHandler,
    ) {}

    @Mutation('appHealthCreateApiInterfaceTypes')
    async main(
        @Args('payload') payload: AppHealthCreateApiInterfaceTypeInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
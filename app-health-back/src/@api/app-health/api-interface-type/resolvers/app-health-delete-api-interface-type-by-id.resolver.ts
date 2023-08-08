import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteApiInterfaceTypeByIdHandler } from '../handlers/app-health-delete-api-interface-type-by-id.handler';
import { AppHealthApiInterfaceType } from '@api/graphql';

@Resolver()
export class AppHealthDeleteApiInterfaceTypeByIdResolver
{
    constructor(
        private readonly handler: AppHealthDeleteApiInterfaceTypeByIdHandler,
    ) {}

    @Mutation('appHealthDeleteApiInterfaceTypeById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApiInterfaceType>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteApiInterfaceTypesHandler } from '../handlers/app-health-delete-api-interface-types.handler';
import { AppHealthApiInterfaceType } from '@api/graphql';

@Resolver()
export class AppHealthDeleteApiInterfaceTypesResolver
{
    constructor(
        private readonly handler: AppHealthDeleteApiInterfaceTypesHandler,
    ) {}

    @Mutation('appHealthDeleteApiInterfaceTypes')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApiInterfaceType[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
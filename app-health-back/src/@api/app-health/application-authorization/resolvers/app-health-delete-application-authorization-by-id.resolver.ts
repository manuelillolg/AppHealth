import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteApplicationAuthorizationByIdHandler } from '../handlers/app-health-delete-application-authorization-by-id.handler';
import { AppHealthApplicationAuthorization } from '@api/graphql';

@Resolver()
export class AppHealthDeleteApplicationAuthorizationByIdResolver
{
    constructor(
        private readonly handler: AppHealthDeleteApplicationAuthorizationByIdHandler,
    ) {}

    @Mutation('appHealthDeleteApplicationAuthorizationById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationAuthorization>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
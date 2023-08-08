import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteApplicationAuthorizationsHandler } from '../handlers/app-health-delete-application-authorizations.handler';
import { AppHealthApplicationAuthorization } from '@api/graphql';

@Resolver()
export class AppHealthDeleteApplicationAuthorizationsResolver
{
    constructor(
        private readonly handler: AppHealthDeleteApplicationAuthorizationsHandler,
    ) {}

    @Mutation('appHealthDeleteApplicationAuthorizations')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationAuthorization[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
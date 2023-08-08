import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteApplicationAuthenticationsHandler } from '../handlers/app-health-delete-application-authentications.handler';
import { AppHealthApplicationAuthentication } from '@api/graphql';

@Resolver()
export class AppHealthDeleteApplicationAuthenticationsResolver
{
    constructor(
        private readonly handler: AppHealthDeleteApplicationAuthenticationsHandler,
    ) {}

    @Mutation('appHealthDeleteApplicationAuthentications')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationAuthentication[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
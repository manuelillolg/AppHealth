import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteApplicationAuthenticationByIdHandler } from '../handlers/app-health-delete-application-authentication-by-id.handler';
import { AppHealthApplicationAuthentication } from '@api/graphql';

@Resolver()
export class AppHealthDeleteApplicationAuthenticationByIdResolver
{
    constructor(
        private readonly handler: AppHealthDeleteApplicationAuthenticationByIdHandler,
    ) {}

    @Mutation('appHealthDeleteApplicationAuthenticationById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationAuthentication>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
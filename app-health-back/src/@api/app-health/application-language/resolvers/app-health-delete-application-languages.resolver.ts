import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteApplicationLanguagesHandler } from '../handlers/app-health-delete-application-languages.handler';
import { AppHealthApplicationLanguage } from '@api/graphql';

@Resolver()
export class AppHealthDeleteApplicationLanguagesResolver
{
    constructor(
        private readonly handler: AppHealthDeleteApplicationLanguagesHandler,
    ) {}

    @Mutation('appHealthDeleteApplicationLanguages')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationLanguage[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
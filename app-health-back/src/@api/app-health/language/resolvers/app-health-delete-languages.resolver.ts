import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteLanguagesHandler } from '../handlers/app-health-delete-languages.handler';
import { AppHealthLanguage } from '@api/graphql';

@Resolver()
export class AppHealthDeleteLanguagesResolver
{
    constructor(
        private readonly handler: AppHealthDeleteLanguagesHandler,
    ) {}

    @Mutation('appHealthDeleteLanguages')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthLanguage[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
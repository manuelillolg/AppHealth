import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthGetApplicationLanguagesHandler } from '../handlers/app-health-get-application-languages.handler';
import { AppHealthApplicationLanguage } from '@api/graphql';

@Resolver()
export class AppHealthGetApplicationLanguagesResolver
{
    constructor(
        private readonly handler: AppHealthGetApplicationLanguagesHandler,
    ) {}

    @Query('appHealthGetApplicationLanguages')
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
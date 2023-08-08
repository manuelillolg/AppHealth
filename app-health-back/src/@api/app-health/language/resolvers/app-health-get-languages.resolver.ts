import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthGetLanguagesHandler } from '../handlers/app-health-get-languages.handler';
import { AppHealthLanguage } from '@api/graphql';

@Resolver()
export class AppHealthGetLanguagesResolver
{
    constructor(
        private readonly handler: AppHealthGetLanguagesHandler,
    ) {}

    @Query('appHealthGetLanguages')
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
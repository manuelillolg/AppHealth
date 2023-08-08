import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthFindLanguageHandler } from '../handlers/app-health-find-language.handler';
import { AppHealthLanguage } from '@api/graphql';

@Resolver()
export class AppHealthFindLanguageResolver
{
    constructor(
        private readonly handler: AppHealthFindLanguageHandler,
    ) {}

    @Query('appHealthFindLanguage')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthLanguage>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
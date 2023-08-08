import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthFindApplicationLanguageHandler } from '../handlers/app-health-find-application-language.handler';
import { AppHealthApplicationLanguage } from '@api/graphql';

@Resolver()
export class AppHealthFindApplicationLanguageResolver
{
    constructor(
        private readonly handler: AppHealthFindApplicationLanguageHandler,
    ) {}

    @Query('appHealthFindApplicationLanguage')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationLanguage>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
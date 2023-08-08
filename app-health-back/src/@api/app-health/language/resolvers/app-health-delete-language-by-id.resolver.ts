import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteLanguageByIdHandler } from '../handlers/app-health-delete-language-by-id.handler';
import { AppHealthLanguage } from '@api/graphql';

@Resolver()
export class AppHealthDeleteLanguageByIdResolver
{
    constructor(
        private readonly handler: AppHealthDeleteLanguageByIdHandler,
    ) {}

    @Mutation('appHealthDeleteLanguageById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthLanguage>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
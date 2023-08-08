import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteApplicationLanguageByIdHandler } from '../handlers/app-health-delete-application-language-by-id.handler';
import { AppHealthApplicationLanguage } from '@api/graphql';

@Resolver()
export class AppHealthDeleteApplicationLanguageByIdResolver
{
    constructor(
        private readonly handler: AppHealthDeleteApplicationLanguageByIdHandler,
    ) {}

    @Mutation('appHealthDeleteApplicationLanguageById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationLanguage>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthCreateLanguagesHandler } from '../handlers/app-health-create-languages.handler';
import { AppHealthCreateLanguageInput } from '@api/graphql';

@Resolver()
export class AppHealthCreateLanguagesResolver
{
    constructor(
        private readonly handler: AppHealthCreateLanguagesHandler,
    ) {}

    @Mutation('appHealthCreateLanguages')
    async main(
        @Args('payload') payload: AppHealthCreateLanguageInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
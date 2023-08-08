import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthCreateApplicationLanguagesHandler } from '../handlers/app-health-create-application-languages.handler';
import { AppHealthCreateApplicationLanguageInput } from '@api/graphql';

@Resolver()
export class AppHealthCreateApplicationLanguagesResolver
{
    constructor(
        private readonly handler: AppHealthCreateApplicationLanguagesHandler,
    ) {}

    @Mutation('appHealthCreateApplicationLanguages')
    async main(
        @Args('payload') payload: AppHealthCreateApplicationLanguageInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
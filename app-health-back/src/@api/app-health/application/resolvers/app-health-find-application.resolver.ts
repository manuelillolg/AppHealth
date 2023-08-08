import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthFindApplicationHandler } from '../handlers/app-health-find-application.handler';
import { AppHealthApplication } from '@api/graphql';

@Resolver()
export class AppHealthFindApplicationResolver
{
    constructor(
        private readonly handler: AppHealthFindApplicationHandler,
    ) {}

    @Query('appHealthFindApplication')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplication>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
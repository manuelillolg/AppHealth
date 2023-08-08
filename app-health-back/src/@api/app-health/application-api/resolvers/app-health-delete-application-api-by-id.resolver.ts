import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteApplicationApiByIdHandler } from '../handlers/app-health-delete-application-api-by-id.handler';
import { AppHealthApplicationApi } from '@api/graphql';

@Resolver()
export class AppHealthDeleteApplicationApiByIdResolver
{
    constructor(
        private readonly handler: AppHealthDeleteApplicationApiByIdHandler,
    ) {}

    @Mutation('appHealthDeleteApplicationApiById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationApi>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
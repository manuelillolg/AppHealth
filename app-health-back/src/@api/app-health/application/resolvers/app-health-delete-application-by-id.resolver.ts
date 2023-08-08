import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteApplicationByIdHandler } from '../handlers/app-health-delete-application-by-id.handler';
import { AppHealthApplication } from '@api/graphql';

@Resolver()
export class AppHealthDeleteApplicationByIdResolver
{
    constructor(
        private readonly handler: AppHealthDeleteApplicationByIdHandler,
    ) {}

    @Mutation('appHealthDeleteApplicationById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplication>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
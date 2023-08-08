import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteApplicationViewByIdHandler } from '../handlers/app-health-delete-application-view-by-id.handler';
import { AppHealthApplicationView } from '@api/graphql';

@Resolver()
export class AppHealthDeleteApplicationViewByIdResolver
{
    constructor(
        private readonly handler: AppHealthDeleteApplicationViewByIdHandler,
    ) {}

    @Mutation('appHealthDeleteApplicationViewById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApplicationView>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
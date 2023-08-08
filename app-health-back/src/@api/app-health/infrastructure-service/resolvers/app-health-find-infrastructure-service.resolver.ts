import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthFindInfrastructureServiceHandler } from '../handlers/app-health-find-infrastructure-service.handler';
import { AppHealthInfrastructureService } from '@api/graphql';

@Resolver()
export class AppHealthFindInfrastructureServiceResolver
{
    constructor(
        private readonly handler: AppHealthFindInfrastructureServiceHandler,
    ) {}

    @Query('appHealthFindInfrastructureService')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthInfrastructureService>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthPaginateApplicationInfrastructureServicesHandler } from '../handlers/app-health-paginate-application-infrastructure-services.handler';
import { Pagination } from '@api/graphql';

@Resolver()
export class AppHealthPaginateApplicationInfrastructureServicesResolver
{
    constructor(
        private readonly handler: AppHealthPaginateApplicationInfrastructureServicesHandler,
    ) {}

    @Query('appHealthPaginateApplicationInfrastructureServices')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<Pagination>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
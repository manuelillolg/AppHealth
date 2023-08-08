import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthPaginateInfrastructureServicesHandler } from '../handlers/app-health-paginate-infrastructure-services.handler';
import { Pagination } from '@api/graphql';

@Resolver()
export class AppHealthPaginateInfrastructureServicesResolver
{
    constructor(
        private readonly handler: AppHealthPaginateInfrastructureServicesHandler,
    ) {}

    @Query('appHealthPaginateInfrastructureServices')
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
import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthPaginateInfrastuctureProvidersHandler } from '../handlers/app-health-paginate-infrastucture-providers.handler';
import { Pagination } from '@api/graphql';

@Resolver()
export class AppHealthPaginateInfrastuctureProvidersResolver
{
    constructor(
        private readonly handler: AppHealthPaginateInfrastuctureProvidersHandler,
    ) {}

    @Query('appHealthPaginateInfrastuctureProviders')
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
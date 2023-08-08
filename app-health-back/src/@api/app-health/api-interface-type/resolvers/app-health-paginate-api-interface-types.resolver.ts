import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthPaginateApiInterfaceTypesHandler } from '../handlers/app-health-paginate-api-interface-types.handler';
import { Pagination } from '@api/graphql';

@Resolver()
export class AppHealthPaginateApiInterfaceTypesResolver
{
    constructor(
        private readonly handler: AppHealthPaginateApiInterfaceTypesHandler,
    ) {}

    @Query('appHealthPaginateApiInterfaceTypes')
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
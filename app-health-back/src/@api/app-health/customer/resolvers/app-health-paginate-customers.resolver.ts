import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthPaginateCustomersHandler } from '../handlers/app-health-paginate-customers.handler';
import { Pagination } from '@api/graphql';

@Resolver()
export class AppHealthPaginateCustomersResolver
{
    constructor(
        private readonly handler: AppHealthPaginateCustomersHandler,
    ) {}

    @Query('appHealthPaginateCustomers')
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
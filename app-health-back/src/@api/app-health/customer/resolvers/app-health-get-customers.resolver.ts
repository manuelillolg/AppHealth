import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthGetCustomersHandler } from '../handlers/app-health-get-customers.handler';
import { AppHealthCustomer } from '@api/graphql';

@Resolver()
export class AppHealthGetCustomersResolver
{
    constructor(
        private readonly handler: AppHealthGetCustomersHandler,
    ) {}

    @Query('appHealthGetCustomers')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthCustomer[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
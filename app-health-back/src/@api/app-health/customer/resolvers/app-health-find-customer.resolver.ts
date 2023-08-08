import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthFindCustomerHandler } from '../handlers/app-health-find-customer.handler';
import { AppHealthCustomer } from '@api/graphql';

@Resolver()
export class AppHealthFindCustomerResolver
{
    constructor(
        private readonly handler: AppHealthFindCustomerHandler,
    ) {}

    @Query('appHealthFindCustomer')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthCustomer>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
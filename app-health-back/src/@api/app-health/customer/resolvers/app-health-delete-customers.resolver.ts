import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteCustomersHandler } from '../handlers/app-health-delete-customers.handler';
import { AppHealthCustomer } from '@api/graphql';

@Resolver()
export class AppHealthDeleteCustomersResolver
{
    constructor(
        private readonly handler: AppHealthDeleteCustomersHandler,
    ) {}

    @Mutation('appHealthDeleteCustomers')
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
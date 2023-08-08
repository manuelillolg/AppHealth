import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthDeleteCustomerByIdHandler } from '../handlers/app-health-delete-customer-by-id.handler';
import { AppHealthCustomer } from '@api/graphql';

@Resolver()
export class AppHealthDeleteCustomerByIdResolver
{
    constructor(
        private readonly handler: AppHealthDeleteCustomerByIdHandler,
    ) {}

    @Mutation('appHealthDeleteCustomerById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthCustomer>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
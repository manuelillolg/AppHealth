import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthCreateCustomersHandler } from '../handlers/app-health-create-customers.handler';
import { AppHealthCreateCustomerInput } from '@api/graphql';

@Resolver()
export class AppHealthCreateCustomersResolver
{
    constructor(
        private readonly handler: AppHealthCreateCustomersHandler,
    ) {}

    @Mutation('appHealthCreateCustomers')
    async main(
        @Args('payload') payload: AppHealthCreateCustomerInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
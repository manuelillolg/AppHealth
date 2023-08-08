import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthPaginateAuthenticationInterfacesHandler } from '../handlers/app-health-paginate-authentication-interfaces.handler';
import { Pagination } from '@api/graphql';

@Resolver()
export class AppHealthPaginateAuthenticationInterfacesResolver
{
    constructor(
        private readonly handler: AppHealthPaginateAuthenticationInterfacesHandler,
    ) {}

    @Query('appHealthPaginateAuthenticationInterfaces')
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
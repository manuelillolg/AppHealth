import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthPaginateAuthorizationInterfacesHandler } from '../handlers/app-health-paginate-authorization-interfaces.handler';
import { Pagination } from '@api/graphql';

@Resolver()
export class AppHealthPaginateAuthorizationInterfacesResolver
{
    constructor(
        private readonly handler: AppHealthPaginateAuthorizationInterfacesHandler,
    ) {}

    @Query('appHealthPaginateAuthorizationInterfaces')
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
import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthGetApiInterfaceTypesHandler } from '../handlers/app-health-get-api-interface-types.handler';
import { AppHealthApiInterfaceType } from '@api/graphql';

@Resolver()
export class AppHealthGetApiInterfaceTypesResolver
{
    constructor(
        private readonly handler: AppHealthGetApiInterfaceTypesHandler,
    ) {}

    @Query('appHealthGetApiInterfaceTypes')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApiInterfaceType[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { AppHealthFindApiInterfaceTypeHandler } from '../handlers/app-health-find-api-interface-type.handler';
import { AppHealthApiInterfaceType } from '@api/graphql';

@Resolver()
export class AppHealthFindApiInterfaceTypeResolver
{
    constructor(
        private readonly handler: AppHealthFindApiInterfaceTypeHandler,
    ) {}

    @Query('appHealthFindApiInterfaceType')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AppHealthApiInterfaceType>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
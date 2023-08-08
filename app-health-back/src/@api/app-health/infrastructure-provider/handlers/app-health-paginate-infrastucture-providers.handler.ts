import { Pagination } from '@api/graphql';
import { AppHealthPaginateInfrastuctureProvidersQuery } from '@app/app-health/infrastructure-provider';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppHealthPaginateInfrastuctureProvidersHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<Pagination>
    {
        return await this.queryBus.ask(new AppHealthPaginateInfrastuctureProvidersQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
import { Pagination } from '@api/graphql';
import { AppHealthPaginateApplicationInfrastructureServicesQuery } from '@app/app-health/application-infrastructure-service';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppHealthPaginateApplicationInfrastructureServicesHandler
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
        return await this.queryBus.ask(new AppHealthPaginateApplicationInfrastructureServicesQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
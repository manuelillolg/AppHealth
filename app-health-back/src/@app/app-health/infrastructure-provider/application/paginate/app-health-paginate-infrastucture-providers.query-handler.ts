import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PaginationResponse } from '@aurorajs.dev/core';
import { AppHealthPaginateInfrastuctureProvidersQuery } from './app-health-paginate-infrastucture-providers.query';
import { AppHealthPaginateInfrastuctureProvidersService } from './app-health-paginate-infrastucture-providers.service';

@QueryHandler(AppHealthPaginateInfrastuctureProvidersQuery)
export class AppHealthPaginateInfrastuctureProvidersQueryHandler implements IQueryHandler<AppHealthPaginateInfrastuctureProvidersQuery>
{
    constructor(
        private readonly paginateInfrastuctureProvidersService: AppHealthPaginateInfrastuctureProvidersService,
    ) {}

    async execute(query: AppHealthPaginateInfrastuctureProvidersQuery): Promise<PaginationResponse>
    {
        const { total, count, rows } = await this.paginateInfrastuctureProvidersService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return new PaginationResponse(
            total,
            count,
            rows.map(item => item.toDTO()),
        );
    }
}
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PaginationResponse } from '@aurorajs.dev/core';
import { AppHealthPaginateApplicationInfrastructureServicesQuery } from './app-health-paginate-application-infrastructure-services.query';
import { AppHealthPaginateApplicationInfrastructureServicesService } from './app-health-paginate-application-infrastructure-services.service';

@QueryHandler(AppHealthPaginateApplicationInfrastructureServicesQuery)
export class AppHealthPaginateApplicationInfrastructureServicesQueryHandler implements IQueryHandler<AppHealthPaginateApplicationInfrastructureServicesQuery>
{
    constructor(
        private readonly paginateApplicationInfrastructureServicesService: AppHealthPaginateApplicationInfrastructureServicesService,
    ) {}

    async execute(query: AppHealthPaginateApplicationInfrastructureServicesQuery): Promise<PaginationResponse>
    {
        const { total, count, rows } = await this.paginateApplicationInfrastructureServicesService.main(
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
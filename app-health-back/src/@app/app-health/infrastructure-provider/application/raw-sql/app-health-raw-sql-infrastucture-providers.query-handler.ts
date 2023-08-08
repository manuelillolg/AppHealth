import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AppHealthInfrastructureProviderResponse } from '../../domain/app-health-infrastructure-provider.response';
import { AppHealthInfrastructureProviderMapper } from '../../domain/app-health-infrastructure-provider.mapper';
import { AppHealthRawSQLInfrastuctureProvidersQuery } from './app-health-raw-sql-infrastucture-providers.query';
import { AppHealthRawSQLInfrastuctureProvidersService } from './app-health-raw-sql-infrastucture-providers.service';

@QueryHandler(AppHealthRawSQLInfrastuctureProvidersQuery)
export class AppHealthRawSQLInfrastuctureProvidersQueryHandler implements IQueryHandler<AppHealthRawSQLInfrastuctureProvidersQuery>
{
    private readonly mapper: AppHealthInfrastructureProviderMapper = new AppHealthInfrastructureProviderMapper();

    constructor(
        private readonly rawSQLInfrastuctureProvidersService: AppHealthRawSQLInfrastuctureProvidersService,
    ) {}

    async execute(query: AppHealthRawSQLInfrastuctureProvidersQuery): Promise<AppHealthInfrastructureProviderResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.rawSQLInfrastuctureProvidersService.main(
            query.rawSQL,
            query.cQMetadata,
        ));
    }
}
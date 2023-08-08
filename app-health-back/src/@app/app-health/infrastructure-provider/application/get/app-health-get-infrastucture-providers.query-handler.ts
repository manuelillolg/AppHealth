import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AppHealthInfrastructureProviderResponse } from '../../domain/app-health-infrastructure-provider.response';
import { AppHealthInfrastructureProviderMapper } from '../../domain/app-health-infrastructure-provider.mapper';
import { AppHealthGetInfrastuctureProvidersQuery } from './app-health-get-infrastucture-providers.query';
import { AppHealthGetInfrastuctureProvidersService } from './app-health-get-infrastucture-providers.service';

@QueryHandler(AppHealthGetInfrastuctureProvidersQuery)
export class AppHealthGetInfrastuctureProvidersQueryHandler implements IQueryHandler<AppHealthGetInfrastuctureProvidersQuery>
{
    private readonly mapper: AppHealthInfrastructureProviderMapper = new AppHealthInfrastructureProviderMapper();

    constructor(
        private readonly getInfrastuctureProvidersService: AppHealthGetInfrastuctureProvidersService,
    ) {}

    async execute(query: AppHealthGetInfrastuctureProvidersQuery): Promise<AppHealthInfrastructureProviderResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.getInfrastuctureProvidersService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        ));
    }
}
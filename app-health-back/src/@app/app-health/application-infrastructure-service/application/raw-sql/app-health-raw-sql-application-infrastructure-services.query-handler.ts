import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AppHealthApplicationInfrastructureServiceResponse } from '../../domain/app-health-application-infrastructure-service.response';
import { AppHealthApplicationInfrastructureServiceMapper } from '../../domain/app-health-application-infrastructure-service.mapper';
import { AppHealthRawSQLApplicationInfrastructureServicesQuery } from './app-health-raw-sql-application-infrastructure-services.query';
import { AppHealthRawSQLApplicationInfrastructureServicesService } from './app-health-raw-sql-application-infrastructure-services.service';

@QueryHandler(AppHealthRawSQLApplicationInfrastructureServicesQuery)
export class AppHealthRawSQLApplicationInfrastructureServicesQueryHandler implements IQueryHandler<AppHealthRawSQLApplicationInfrastructureServicesQuery>
{
    private readonly mapper: AppHealthApplicationInfrastructureServiceMapper = new AppHealthApplicationInfrastructureServiceMapper();

    constructor(
        private readonly rawSQLApplicationInfrastructureServicesService: AppHealthRawSQLApplicationInfrastructureServicesService,
    ) {}

    async execute(query: AppHealthRawSQLApplicationInfrastructureServicesQuery): Promise<AppHealthApplicationInfrastructureServiceResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.rawSQLApplicationInfrastructureServicesService.main(
            query.rawSQL,
            query.cQMetadata,
        ));
    }
}
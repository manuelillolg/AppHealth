import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AppHealthApplicationInfrastructureServiceResponse } from '../../domain/app-health-application-infrastructure-service.response';
import { AppHealthApplicationInfrastructureServiceMapper } from '../../domain/app-health-application-infrastructure-service.mapper';
import { AppHealthGetApplicationInfrastructureServicesQuery } from './app-health-get-application-infrastructure-services.query';
import { AppHealthGetApplicationInfrastructureServicesService } from './app-health-get-application-infrastructure-services.service';

@QueryHandler(AppHealthGetApplicationInfrastructureServicesQuery)
export class AppHealthGetApplicationInfrastructureServicesQueryHandler implements IQueryHandler<AppHealthGetApplicationInfrastructureServicesQuery>
{
    private readonly mapper: AppHealthApplicationInfrastructureServiceMapper = new AppHealthApplicationInfrastructureServiceMapper();

    constructor(
        private readonly getApplicationInfrastructureServicesService: AppHealthGetApplicationInfrastructureServicesService,
    ) {}

    async execute(query: AppHealthGetApplicationInfrastructureServicesQuery): Promise<AppHealthApplicationInfrastructureServiceResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.getApplicationInfrastructureServicesService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        ));
    }
}
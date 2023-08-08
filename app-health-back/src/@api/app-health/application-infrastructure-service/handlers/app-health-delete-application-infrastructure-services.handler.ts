import { AppHealthApplicationInfrastructureServiceDto } from '@api/app-health/application-infrastructure-service';
import { AppHealthApplicationInfrastructureService } from '@api/graphql';
import { AppHealthDeleteApplicationInfrastructureServicesCommand, AppHealthGetApplicationInfrastructureServicesQuery } from '@app/app-health/application-infrastructure-service';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppHealthDeleteApplicationInfrastructureServicesHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<AppHealthApplicationInfrastructureService[] | AppHealthApplicationInfrastructureServiceDto[]>
    {
        const applicationInfrastructureServices = await this.queryBus.ask(new AppHealthGetApplicationInfrastructureServicesQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new AppHealthDeleteApplicationInfrastructureServicesCommand(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        return applicationInfrastructureServices;
    }
}
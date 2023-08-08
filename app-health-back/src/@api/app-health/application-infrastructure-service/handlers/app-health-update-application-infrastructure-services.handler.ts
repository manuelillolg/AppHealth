import { AppHealthApplicationInfrastructureServiceDto, AppHealthUpdateApplicationInfrastructureServicesDto } from '@api/app-health/application-infrastructure-service';
import { AppHealthApplicationInfrastructureService, AppHealthUpdateApplicationInfrastructureServicesInput } from '@api/graphql';
import { AppHealthGetApplicationInfrastructureServicesQuery, AppHealthUpdateApplicationInfrastructureServicesCommand } from '@app/app-health/application-infrastructure-service';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppHealthUpdateApplicationInfrastructureServicesHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: AppHealthUpdateApplicationInfrastructureServicesInput | AppHealthUpdateApplicationInfrastructureServicesDto,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<AppHealthApplicationInfrastructureService | AppHealthApplicationInfrastructureServiceDto>
    {
        await this.commandBus.dispatch(new AppHealthUpdateApplicationInfrastructureServicesCommand(
            payload,
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new AppHealthGetApplicationInfrastructureServicesQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
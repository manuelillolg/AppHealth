import { AppHealthCreateApplicationInfrastructureServiceDto } from '@api/app-health/application-infrastructure-service';
import { AppHealthCreateApplicationInfrastructureServiceInput } from '@api/graphql';
import { AppHealthCreateApplicationInfrastructureServicesCommand } from '@app/app-health/application-infrastructure-service';
import { ICommandBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppHealthCreateApplicationInfrastructureServicesHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
    ) {}

    async main(
        payload: AppHealthCreateApplicationInfrastructureServiceInput[] | AppHealthCreateApplicationInfrastructureServiceDto[],
        timezone?: string,
    ): Promise<boolean>
    {
        await this.commandBus.dispatch(new AppHealthCreateApplicationInfrastructureServicesCommand(
            payload,
            {
                timezone,
            },
        ));

        return true;
    }
}
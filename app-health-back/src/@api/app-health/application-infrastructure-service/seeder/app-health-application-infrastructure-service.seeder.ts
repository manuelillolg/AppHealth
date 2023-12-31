import { Injectable } from '@nestjs/common';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';

//
import { AppHealthCreateApplicationInfrastructureServicesCommand } from '@app/app-health/application-infrastructure-service';
import { appHealthMockApplicationInfrastructureServiceData } from '@app/app-health/application-infrastructure-service';

@Injectable()
export class AppHealthApplicationInfrastructureServiceSeeder
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(): Promise<boolean>
    {
        await this.commandBus.dispatch(new AppHealthCreateApplicationInfrastructureServicesCommand(
            appHealthMockApplicationInfrastructureServiceData,
            {
                timezone: process.env.TZ ,
            },
        ));

        return true;
    }
}

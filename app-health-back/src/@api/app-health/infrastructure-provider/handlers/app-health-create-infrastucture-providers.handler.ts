import { AppHealthCreateInfrastructureProviderDto } from '@api/app-health/infrastructure-provider';
import { AppHealthCreateInfrastructureProviderInput } from '@api/graphql';
import { AppHealthCreateInfrastuctureProvidersCommand } from '@app/app-health/infrastructure-provider';
import { ICommandBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppHealthCreateInfrastuctureProvidersHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
    ) {}

    async main(
        payload: AppHealthCreateInfrastructureProviderInput[] | AppHealthCreateInfrastructureProviderDto[],
        timezone?: string,
    ): Promise<boolean>
    {
        await this.commandBus.dispatch(new AppHealthCreateInfrastuctureProvidersCommand(
            payload,
            {
                timezone,
            },
        ));

        return true;
    }
}
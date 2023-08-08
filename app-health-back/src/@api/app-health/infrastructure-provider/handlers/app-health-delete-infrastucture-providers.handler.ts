import { AppHealthInfrastructureProviderDto } from '@api/app-health/infrastructure-provider';
import { AppHealthInfrastructureProvider } from '@api/graphql';
import { AppHealthDeleteInfrastuctureProvidersCommand, AppHealthGetInfrastuctureProvidersQuery } from '@app/app-health/infrastructure-provider';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppHealthDeleteInfrastuctureProvidersHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<AppHealthInfrastructureProvider[] | AppHealthInfrastructureProviderDto[]>
    {
        const infrastuctureProviders = await this.queryBus.ask(new AppHealthGetInfrastuctureProvidersQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new AppHealthDeleteInfrastuctureProvidersCommand(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        return infrastuctureProviders;
    }
}
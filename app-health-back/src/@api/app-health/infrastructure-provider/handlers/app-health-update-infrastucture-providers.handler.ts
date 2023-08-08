import { AppHealthInfrastructureProviderDto, AppHealthUpdateInfrastuctureProvidersDto } from '@api/app-health/infrastructure-provider';
import { AppHealthInfrastructureProvider, AppHealthUpdateInfrastuctureProvidersInput } from '@api/graphql';
import { AppHealthGetInfrastuctureProvidersQuery, AppHealthUpdateInfrastuctureProvidersCommand } from '@app/app-health/infrastructure-provider';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppHealthUpdateInfrastuctureProvidersHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: AppHealthUpdateInfrastuctureProvidersInput | AppHealthUpdateInfrastuctureProvidersDto,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<AppHealthInfrastructureProvider | AppHealthInfrastructureProviderDto>
    {
        await this.commandBus.dispatch(new AppHealthUpdateInfrastuctureProvidersCommand(
            payload,
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new AppHealthGetInfrastuctureProvidersQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
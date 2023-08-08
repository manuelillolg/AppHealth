/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppHealthUpdateInfrastuctureProvidersHandler } from '@api/app-health/infrastructure-provider';
import { AppHealthUpdateInfrastuctureProvidersInput } from '@api/graphql';
import { appHealthMockInfrastructureProviderData } from '@app/app-health/infrastructure-provider';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthUpdateInfrastuctureProvidersHandler', () =>
{
    let handler: AppHealthUpdateInfrastuctureProvidersHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateInfrastuctureProvidersHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<AppHealthUpdateInfrastuctureProvidersHandler>(AppHealthUpdateInfrastuctureProvidersHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('AppHealthUpdateInfrastuctureProvidersHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateInfrastuctureProvidersHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a infrastuctureProviders updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(appHealthMockInfrastructureProviderData[0])));
            expect(await handler.main(<AppHealthUpdateInfrastuctureProvidersInput>appHealthMockInfrastructureProviderData[0])).toBe(appHealthMockInfrastructureProviderData[0]);
        });
    });
});
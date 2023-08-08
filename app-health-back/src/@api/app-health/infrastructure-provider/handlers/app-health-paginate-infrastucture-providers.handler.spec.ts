/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppHealthPaginateInfrastuctureProvidersHandler } from '@api/app-health/infrastructure-provider';
import { appHealthMockInfrastructureProviderData } from '@app/app-health/infrastructure-provider';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthPaginateInfrastuctureProvidersHandler', () =>
{
    let handler: AppHealthPaginateInfrastuctureProvidersHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthPaginateInfrastuctureProvidersHandler,
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

        handler = module.get<AppHealthPaginateInfrastuctureProvidersHandler>(AppHealthPaginateInfrastuctureProvidersHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('AppHealthPaginateInfrastuctureProvidersHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthPaginateInfrastuctureProvidersHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a infrastuctureProviders', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: appHealthMockInfrastructureProviderData.length,
                count: appHealthMockInfrastructureProviderData.length,
                rows : appHealthMockInfrastructureProviderData,
            })));
            expect(await handler.main()).toEqual({
                total: appHealthMockInfrastructureProviderData.length,
                count: appHealthMockInfrastructureProviderData.length,
                rows : appHealthMockInfrastructureProviderData,
            });
        });
    });
});
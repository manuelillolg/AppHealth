/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppHealthPaginateInfrastructureServicesHandler } from '@api/app-health/infrastructure-service';
import { appHealthMockInfrastructureServiceData } from '@app/app-health/infrastructure-service';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthPaginateInfrastructureServicesHandler', () =>
{
    let handler: AppHealthPaginateInfrastructureServicesHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthPaginateInfrastructureServicesHandler,
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

        handler = module.get<AppHealthPaginateInfrastructureServicesHandler>(AppHealthPaginateInfrastructureServicesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('AppHealthPaginateInfrastructureServicesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthPaginateInfrastructureServicesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a infrastructureServices', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: appHealthMockInfrastructureServiceData.length,
                count: appHealthMockInfrastructureServiceData.length,
                rows : appHealthMockInfrastructureServiceData,
            })));
            expect(await handler.main()).toEqual({
                total: appHealthMockInfrastructureServiceData.length,
                count: appHealthMockInfrastructureServiceData.length,
                rows : appHealthMockInfrastructureServiceData,
            });
        });
    });
});
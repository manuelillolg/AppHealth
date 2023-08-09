/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppHealthPaginateApplicationInfrastructureServicesHandler } from '@api/app-health/application-infrastructure-service';
import { appHealthMockApplicationInfrastructureServiceData } from '@app/app-health/application-infrastructure-service';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthPaginateApplicationInfrastructureServicesHandler', () =>
{
    let handler: AppHealthPaginateApplicationInfrastructureServicesHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthPaginateApplicationInfrastructureServicesHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<AppHealthPaginateApplicationInfrastructureServicesHandler>(AppHealthPaginateApplicationInfrastructureServicesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('AppHealthPaginateApplicationInfrastructureServicesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthPaginateApplicationInfrastructureServicesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a applicationInfrastructureServices', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: appHealthMockApplicationInfrastructureServiceData.length,
                count: appHealthMockApplicationInfrastructureServiceData.length,
                rows : appHealthMockApplicationInfrastructureServiceData,
            })));
            expect(
                await handler.main(
                    {},
                    {},
                ),
            )
                .toEqual({
                    total: appHealthMockApplicationInfrastructureServiceData.length,
                    count: appHealthMockApplicationInfrastructureServiceData.length,
                    rows : appHealthMockApplicationInfrastructureServiceData,
                });
        });
    });
});

/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppHealthGetApplicationInfrastructureServicesHandler } from '@api/app-health/application-infrastructure-service';
import { appHealthMockApplicationInfrastructureServiceData } from '@app/app-health/application-infrastructure-service';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthGetApplicationInfrastructureServicesHandler', () =>
{
    let handler: AppHealthGetApplicationInfrastructureServicesHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthGetApplicationInfrastructureServicesHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<AppHealthGetApplicationInfrastructureServicesHandler>(AppHealthGetApplicationInfrastructureServicesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('AppHealthGetApplicationInfrastructureServicesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthGetApplicationInfrastructureServicesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a appHealthMockApplicationInfrastructureServiceData', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationInfrastructureServiceData)));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(appHealthMockApplicationInfrastructureServiceData);
        });
    });
});

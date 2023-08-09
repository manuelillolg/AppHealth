/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppHealthDeleteApplicationInfrastructureServicesHandler } from '@api/app-health/application-infrastructure-service';
import { appHealthMockApplicationInfrastructureServiceData } from '@app/app-health/application-infrastructure-service';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthDeleteApplicationInfrastructureServicesHandler', () =>
{
    let handler: AppHealthDeleteApplicationInfrastructureServicesHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteApplicationInfrastructureServicesHandler,
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

        handler = module.get<AppHealthDeleteApplicationInfrastructureServicesHandler>(AppHealthDeleteApplicationInfrastructureServicesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('AppHealthDeleteApplicationInfrastructureServicesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApplicationInfrastructureServicesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an appHealthMockApplicationInfrastructureServiceData deleted', async () =>
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

/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppHealthUpdateApplicationInfrastructureServicesHandler } from '@api/app-health/application-infrastructure-service';
import { AppHealthUpdateApplicationInfrastructureServicesInput } from '@api/graphql';
import { appHealthMockApplicationInfrastructureServiceData } from '@app/app-health/application-infrastructure-service';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthUpdateApplicationInfrastructureServicesHandler', () =>
{
    let handler: AppHealthUpdateApplicationInfrastructureServicesHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateApplicationInfrastructureServicesHandler,
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

        handler = module.get<AppHealthUpdateApplicationInfrastructureServicesHandler>(AppHealthUpdateApplicationInfrastructureServicesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('AppHealthUpdateApplicationInfrastructureServicesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateApplicationInfrastructureServicesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a applicationInfrastructureServices updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationInfrastructureServiceData[0])));
            expect(
                await handler.main(
                    <AppHealthUpdateApplicationInfrastructureServicesInput>appHealthMockApplicationInfrastructureServiceData[0],
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(appHealthMockApplicationInfrastructureServiceData[0]);
        });
    });
});

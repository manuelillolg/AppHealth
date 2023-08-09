import { AppHealthCreateApplicationInfrastructureServicesHandler } from '@api/app-health/application-infrastructure-service';
import { appHealthMockApplicationInfrastructureServiceData } from '@app/app-health/application-infrastructure-service';
import { ICommandBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthCreateApplicationInfrastructureServicesHandler', () =>
{
    let handler: AppHealthCreateApplicationInfrastructureServicesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateApplicationInfrastructureServicesHandler,
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<AppHealthCreateApplicationInfrastructureServicesHandler>(AppHealthCreateApplicationInfrastructureServicesHandler);
    });

    describe('main', () =>
    {
        test('AppHealthCreateApplicationInfrastructureServicesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an appHealthMockApplicationInfrastructureServiceData created', async () =>
        {
            expect(await handler.main(appHealthMockApplicationInfrastructureServiceData)).toBe(true);
        });
    });
});

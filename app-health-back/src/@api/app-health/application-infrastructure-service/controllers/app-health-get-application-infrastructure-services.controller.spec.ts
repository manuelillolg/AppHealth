import { AppHealthGetApplicationInfrastructureServicesController, AppHealthGetApplicationInfrastructureServicesHandler } from '@api/app-health/application-infrastructure-service';
import { appHealthMockApplicationInfrastructureServiceData } from '@app/app-health/application-infrastructure-service';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthGetApplicationInfrastructureServicesController', () =>
{
    let controller: AppHealthGetApplicationInfrastructureServicesController;
    let handler: AppHealthGetApplicationInfrastructureServicesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                AppHealthGetApplicationInfrastructureServicesController,
            ],
            providers: [
                {
                    provide : AppHealthGetApplicationInfrastructureServicesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<AppHealthGetApplicationInfrastructureServicesController>(AppHealthGetApplicationInfrastructureServicesController);
        handler = module.get<AppHealthGetApplicationInfrastructureServicesHandler>(AppHealthGetApplicationInfrastructureServicesHandler);
    });

    describe('main', () =>
    {
        test('AppHealthGetApplicationInfrastructureServicesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a appHealthMockApplicationInfrastructureServiceData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationInfrastructureServiceData)));
            expect(await controller.main()).toBe(appHealthMockApplicationInfrastructureServiceData);
        });
    });
});

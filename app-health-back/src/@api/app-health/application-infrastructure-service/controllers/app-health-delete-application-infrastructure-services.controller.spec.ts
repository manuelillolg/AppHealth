import { AppHealthDeleteApplicationInfrastructureServicesController, AppHealthDeleteApplicationInfrastructureServicesHandler } from '@api/app-health/application-infrastructure-service';
import { appHealthMockApplicationInfrastructureServiceData } from '@app/app-health/application-infrastructure-service';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthDeleteApplicationInfrastructureServicesController', () =>
{
    let controller: AppHealthDeleteApplicationInfrastructureServicesController;
    let handler: AppHealthDeleteApplicationInfrastructureServicesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                AppHealthDeleteApplicationInfrastructureServicesController,
            ],
            providers: [
                {
                    provide : AppHealthDeleteApplicationInfrastructureServicesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<AppHealthDeleteApplicationInfrastructureServicesController>(AppHealthDeleteApplicationInfrastructureServicesController);
        handler = module.get<AppHealthDeleteApplicationInfrastructureServicesHandler>(AppHealthDeleteApplicationInfrastructureServicesHandler);
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApplicationInfrastructureServicesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an appHealthMockApplicationInfrastructureServiceData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationInfrastructureServiceData)));
            expect(await controller.main()).toBe(appHealthMockApplicationInfrastructureServiceData);
        });
    });
});

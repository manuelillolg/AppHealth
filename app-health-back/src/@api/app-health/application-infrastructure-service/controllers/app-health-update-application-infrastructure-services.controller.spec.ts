import { AppHealthUpdateApplicationInfrastructureServicesController, AppHealthUpdateApplicationInfrastructureServicesHandler } from '@api/app-health/application-infrastructure-service';
import { appHealthMockApplicationInfrastructureServiceData } from '@app/app-health/application-infrastructure-service';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthUpdateApplicationInfrastructureServicesController', () =>
{
    let controller: AppHealthUpdateApplicationInfrastructureServicesController;
    let handler: AppHealthUpdateApplicationInfrastructureServicesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                AppHealthUpdateApplicationInfrastructureServicesController,
            ],
            providers: [
                {
                    provide : AppHealthUpdateApplicationInfrastructureServicesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<AppHealthUpdateApplicationInfrastructureServicesController>(AppHealthUpdateApplicationInfrastructureServicesController);
        handler = module.get<AppHealthUpdateApplicationInfrastructureServicesHandler>(AppHealthUpdateApplicationInfrastructureServicesHandler);
    });

    describe('main', () =>
    {
        test('AppHealthUpdateApplicationInfrastructureServicesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a applicationInfrastructureServices updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationInfrastructureServiceData[0])));
            expect(await controller.main(appHealthMockApplicationInfrastructureServiceData[0])).toBe(appHealthMockApplicationInfrastructureServiceData[0]);
        });
    });
});

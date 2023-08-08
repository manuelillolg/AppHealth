import { AppHealthPaginateApplicationInfrastructureServicesController, AppHealthPaginateApplicationInfrastructureServicesHandler } from '@api/app-health/application-infrastructure-service';
import { appHealthMockApplicationInfrastructureServiceData } from '@app/app-health/application-infrastructure-service';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthPaginateApplicationInfrastructureServicesController', () =>
{
    let controller: AppHealthPaginateApplicationInfrastructureServicesController;
    let handler: AppHealthPaginateApplicationInfrastructureServicesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                AppHealthPaginateApplicationInfrastructureServicesController,
            ],
            providers: [
                {
                    provide : AppHealthPaginateApplicationInfrastructureServicesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<AppHealthPaginateApplicationInfrastructureServicesController>(AppHealthPaginateApplicationInfrastructureServicesController);
        handler = module.get<AppHealthPaginateApplicationInfrastructureServicesHandler>(AppHealthPaginateApplicationInfrastructureServicesHandler);
    });

    describe('main', () =>
    {
        test('AppHealthPaginateApplicationInfrastructureServicesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a appHealthMockApplicationInfrastructureServiceData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : appHealthMockApplicationInfrastructureServiceData,
            })));
            expect(await controller.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : appHealthMockApplicationInfrastructureServiceData,
            });
        });
    });
});

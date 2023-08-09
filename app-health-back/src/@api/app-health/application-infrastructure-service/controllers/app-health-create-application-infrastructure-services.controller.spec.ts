import { AppHealthCreateApplicationInfrastructureServicesController, AppHealthCreateApplicationInfrastructureServicesHandler } from '@api/app-health/application-infrastructure-service';
import { appHealthMockApplicationInfrastructureServiceData } from '@app/app-health/application-infrastructure-service';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthCreateApplicationInfrastructureServicesController', () =>
{
    let controller: AppHealthCreateApplicationInfrastructureServicesController;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [
                AppHealthCreateApplicationInfrastructureServicesController,
            ],
            providers: [
                {
                    provide : AppHealthCreateApplicationInfrastructureServicesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<AppHealthCreateApplicationInfrastructureServicesController>(AppHealthCreateApplicationInfrastructureServicesController);
    });

    describe('main', () =>
    {
        test('AppHealthCreateApplicationInfrastructureServicesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an appHealthMockApplicationInfrastructureServiceData created', async () =>
        {
            expect(
                await controller.main(
                    appHealthMockApplicationInfrastructureServiceData,
                ),
            )
                .toBe(undefined);
        });
    });
});

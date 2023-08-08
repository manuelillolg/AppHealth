import { AppHealthCreateInfrastuctureProvidersController, AppHealthCreateInfrastuctureProvidersHandler } from '@api/app-health/infrastructure-provider';
import { appHealthMockInfrastructureProviderData } from '@app/app-health/infrastructure-provider';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthCreateInfrastuctureProvidersController', () =>
{
    let controller: AppHealthCreateInfrastuctureProvidersController;
    let handler: AppHealthCreateInfrastuctureProvidersHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [
                AppHealthCreateInfrastuctureProvidersController,
            ],
            providers: [
                {
                    provide : AppHealthCreateInfrastuctureProvidersHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<AppHealthCreateInfrastuctureProvidersController>(AppHealthCreateInfrastuctureProvidersController);
        handler = module.get<AppHealthCreateInfrastuctureProvidersHandler>(AppHealthCreateInfrastuctureProvidersHandler);
    });

    describe('main', () =>
    {
        test('AppHealthCreateInfrastuctureProvidersController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an appHealthMockInfrastructureProviderData created', async () =>
        {
            expect(await controller.main(appHealthMockInfrastructureProviderData)).toBe(undefined);
        });
    });
});
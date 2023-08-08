import { AppHealthGetInfrastuctureProvidersController, AppHealthGetInfrastuctureProvidersHandler } from '@api/app-health/infrastructure-provider';
import { appHealthMockInfrastructureProviderData } from '@app/app-health/infrastructure-provider';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthGetInfrastuctureProvidersController', () =>
{
    let controller: AppHealthGetInfrastuctureProvidersController;
    let handler: AppHealthGetInfrastuctureProvidersHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                AppHealthGetInfrastuctureProvidersController,
            ],
            providers: [
                {
                    provide : AppHealthGetInfrastuctureProvidersHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<AppHealthGetInfrastuctureProvidersController>(AppHealthGetInfrastuctureProvidersController);
        handler = module.get<AppHealthGetInfrastuctureProvidersHandler>(AppHealthGetInfrastuctureProvidersHandler);
    });

    describe('main', () =>
    {
        test('AppHealthGetInfrastuctureProvidersController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a appHealthMockInfrastructureProviderData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockInfrastructureProviderData)));
            expect(await controller.main()).toBe(appHealthMockInfrastructureProviderData);
        });
    });
});

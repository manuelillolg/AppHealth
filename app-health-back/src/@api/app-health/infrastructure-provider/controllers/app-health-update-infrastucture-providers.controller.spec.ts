import { AppHealthUpdateInfrastuctureProvidersController, AppHealthUpdateInfrastuctureProvidersHandler } from '@api/app-health/infrastructure-provider';
import { appHealthMockInfrastructureProviderData } from '@app/app-health/infrastructure-provider';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthUpdateInfrastuctureProvidersController', () =>
{
    let controller: AppHealthUpdateInfrastuctureProvidersController;
    let handler: AppHealthUpdateInfrastuctureProvidersHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                AppHealthUpdateInfrastuctureProvidersController,
            ],
            providers: [
                {
                    provide : AppHealthUpdateInfrastuctureProvidersHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<AppHealthUpdateInfrastuctureProvidersController>(AppHealthUpdateInfrastuctureProvidersController);
        handler = module.get<AppHealthUpdateInfrastuctureProvidersHandler>(AppHealthUpdateInfrastuctureProvidersHandler);
    });

    describe('main', () =>
    {
        test('AppHealthUpdateInfrastuctureProvidersController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a infrastuctureProviders updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockInfrastructureProviderData[0])));
            expect(await controller.main(appHealthMockInfrastructureProviderData[0])).toBe(appHealthMockInfrastructureProviderData[0]);
        });
    });
});

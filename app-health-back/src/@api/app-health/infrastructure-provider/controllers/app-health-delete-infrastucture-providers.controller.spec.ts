import { AppHealthDeleteInfrastuctureProvidersController, AppHealthDeleteInfrastuctureProvidersHandler } from '@api/app-health/infrastructure-provider';
import { appHealthMockInfrastructureProviderData } from '@app/app-health/infrastructure-provider';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthDeleteInfrastuctureProvidersController', () =>
{
    let controller: AppHealthDeleteInfrastuctureProvidersController;
    let handler: AppHealthDeleteInfrastuctureProvidersHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                AppHealthDeleteInfrastuctureProvidersController,
            ],
            providers: [
                {
                    provide : AppHealthDeleteInfrastuctureProvidersHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<AppHealthDeleteInfrastuctureProvidersController>(AppHealthDeleteInfrastuctureProvidersController);
        handler = module.get<AppHealthDeleteInfrastuctureProvidersHandler>(AppHealthDeleteInfrastuctureProvidersHandler);
    });

    describe('main', () =>
    {
        test('AppHealthDeleteInfrastuctureProvidersController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an appHealthMockInfrastructureProviderData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockInfrastructureProviderData)));
            expect(await controller.main()).toBe(appHealthMockInfrastructureProviderData);
        });
    });
});

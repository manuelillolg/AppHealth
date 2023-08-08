import { AppHealthPaginateInfrastuctureProvidersController, AppHealthPaginateInfrastuctureProvidersHandler } from '@api/app-health/infrastructure-provider';
import { appHealthMockInfrastructureProviderData } from '@app/app-health/infrastructure-provider';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthPaginateInfrastuctureProvidersController', () =>
{
    let controller: AppHealthPaginateInfrastuctureProvidersController;
    let handler: AppHealthPaginateInfrastuctureProvidersHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                AppHealthPaginateInfrastuctureProvidersController,
            ],
            providers: [
                {
                    provide : AppHealthPaginateInfrastuctureProvidersHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<AppHealthPaginateInfrastuctureProvidersController>(AppHealthPaginateInfrastuctureProvidersController);
        handler = module.get<AppHealthPaginateInfrastuctureProvidersHandler>(AppHealthPaginateInfrastuctureProvidersHandler);
    });

    describe('main', () =>
    {
        test('AppHealthPaginateInfrastuctureProvidersController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a appHealthMockInfrastructureProviderData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : appHealthMockInfrastructureProviderData,
            })));
            expect(await controller.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : appHealthMockInfrastructureProviderData,
            });
        });
    });
});

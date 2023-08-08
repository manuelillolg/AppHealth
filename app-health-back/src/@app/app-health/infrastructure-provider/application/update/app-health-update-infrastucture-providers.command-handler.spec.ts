import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { appHealthMockInfrastructureProviderData } from '@app/app-health/infrastructure-provider/infrastructure/mock/app-health-mock-infrastructure-provider.data';
import { AppHealthUpdateInfrastuctureProvidersCommandHandler } from './app-health-update-infrastucture-providers.command-handler';
import { AppHealthUpdateInfrastuctureProvidersCommand } from './app-health-update-infrastucture-providers.command';
import { AppHealthUpdateInfrastuctureProvidersService } from './app-health-update-infrastucture-providers.service';

describe('AppHealthUpdateInfrastuctureProvidersCommandHandler', () =>
{
    let commandHandler: AppHealthUpdateInfrastuctureProvidersCommandHandler;
    let service: AppHealthUpdateInfrastuctureProvidersService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthUpdateInfrastuctureProvidersCommandHandler,
                {
                    provide : AppHealthUpdateInfrastuctureProvidersService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<AppHealthUpdateInfrastuctureProvidersCommandHandler>(AppHealthUpdateInfrastuctureProvidersCommandHandler);
        service = module.get<AppHealthUpdateInfrastuctureProvidersService>(AppHealthUpdateInfrastuctureProvidersService);
    });

    describe('main', () =>
    {
        test('UpdateInfrastuctureProvidersCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an infrastuctureProviders updated', async () =>
        {
            expect(await commandHandler.execute(
                new AppHealthUpdateInfrastuctureProvidersCommand(
                    {
                        id: appHealthMockInfrastructureProviderData[0].id,
                        name: appHealthMockInfrastructureProviderData[0].name,
                        score: appHealthMockInfrastructureProviderData[0].score,
                    },
                    {},
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
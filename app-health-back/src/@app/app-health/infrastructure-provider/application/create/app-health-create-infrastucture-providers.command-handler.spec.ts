/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { appHealthMockInfrastructureProviderData } from '@app/app-health/infrastructure-provider/infrastructure/mock/app-health-mock-infrastructure-provider.data';
import { AppHealthCreateInfrastuctureProvidersCommandHandler } from './app-health-create-infrastucture-providers.command-handler';
import { AppHealthCreateInfrastuctureProvidersCommand } from './app-health-create-infrastucture-providers.command';
import { AppHealthCreateInfrastuctureProvidersService } from './app-health-create-infrastucture-providers.service';

describe('appHealthCreateInfrastuctureProvidersCommandHandler', () =>
{
    let commandHandler: AppHealthCreateInfrastuctureProvidersCommandHandler;
    let service: AppHealthCreateInfrastuctureProvidersService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateInfrastuctureProvidersCommandHandler,
                {
                    provide : AppHealthCreateInfrastuctureProvidersService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<AppHealthCreateInfrastuctureProvidersCommandHandler>(AppHealthCreateInfrastuctureProvidersCommandHandler);
        service = module.get<AppHealthCreateInfrastuctureProvidersService>(AppHealthCreateInfrastuctureProvidersService);
    });

    describe('main', () =>
    {
        test('AppHealthCreateInfrastuctureProvidersCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return AppHealthMockInfrastructureProviderData createds', async () =>
        {
            expect(await commandHandler.execute(
                new AppHealthCreateInfrastuctureProvidersCommand(
                    appHealthMockInfrastructureProviderData,
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
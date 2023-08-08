import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteInfrastuctureProvidersCommandHandler } from './app-health-delete-infrastucture-providers.command-handler';
import { AppHealthDeleteInfrastuctureProvidersCommand } from './app-health-delete-infrastucture-providers.command';
import { AppHealthDeleteInfrastuctureProvidersService } from './app-health-delete-infrastucture-providers.service';

describe('AppHealthDeleteInfrastuctureProvidersCommandHandler', () =>
{
    let commandHandler: AppHealthDeleteInfrastuctureProvidersCommandHandler;
    let service: AppHealthDeleteInfrastuctureProvidersService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthDeleteInfrastuctureProvidersCommandHandler,
                {
                    provide : AppHealthDeleteInfrastuctureProvidersService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<AppHealthDeleteInfrastuctureProvidersCommandHandler>(AppHealthDeleteInfrastuctureProvidersCommandHandler);
        service = module.get<AppHealthDeleteInfrastuctureProvidersService>(AppHealthDeleteInfrastuctureProvidersService);
    });

    describe('main', () =>
    {
        test('AppHealthDeleteInfrastuctureProvidersCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return void', async () =>
        {
            expect(await commandHandler.execute(
                new AppHealthDeleteInfrastuctureProvidersCommand(),
            )).toBe(undefined);
        });
    });
});
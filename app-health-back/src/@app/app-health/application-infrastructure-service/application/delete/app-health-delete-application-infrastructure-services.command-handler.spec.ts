import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteApplicationInfrastructureServicesCommandHandler } from './app-health-delete-application-infrastructure-services.command-handler';
import { AppHealthDeleteApplicationInfrastructureServicesCommand } from './app-health-delete-application-infrastructure-services.command';
import { AppHealthDeleteApplicationInfrastructureServicesService } from './app-health-delete-application-infrastructure-services.service';

describe('AppHealthDeleteApplicationInfrastructureServicesCommandHandler', () =>
{
    let commandHandler: AppHealthDeleteApplicationInfrastructureServicesCommandHandler;
    let service: AppHealthDeleteApplicationInfrastructureServicesService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthDeleteApplicationInfrastructureServicesCommandHandler,
                {
                    provide : AppHealthDeleteApplicationInfrastructureServicesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<AppHealthDeleteApplicationInfrastructureServicesCommandHandler>(AppHealthDeleteApplicationInfrastructureServicesCommandHandler);
        service = module.get<AppHealthDeleteApplicationInfrastructureServicesService>(AppHealthDeleteApplicationInfrastructureServicesService);
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApplicationInfrastructureServicesCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return void', async () =>
        {
            expect(await commandHandler.execute(
                new AppHealthDeleteApplicationInfrastructureServicesCommand(),
            )).toBe(undefined);
        });
    });
});
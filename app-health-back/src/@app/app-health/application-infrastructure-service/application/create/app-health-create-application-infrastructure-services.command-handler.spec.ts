/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { appHealthMockApplicationInfrastructureServiceData } from '@app/app-health/application-infrastructure-service/infrastructure/mock/app-health-mock-application-infrastructure-service.data';
import { AppHealthCreateApplicationInfrastructureServicesCommandHandler } from './app-health-create-application-infrastructure-services.command-handler';
import { AppHealthCreateApplicationInfrastructureServicesCommand } from './app-health-create-application-infrastructure-services.command';
import { AppHealthCreateApplicationInfrastructureServicesService } from './app-health-create-application-infrastructure-services.service';

describe('appHealthCreateApplicationInfrastructureServicesCommandHandler', () =>
{
    let commandHandler: AppHealthCreateApplicationInfrastructureServicesCommandHandler;
    let service: AppHealthCreateApplicationInfrastructureServicesService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateApplicationInfrastructureServicesCommandHandler,
                {
                    provide : AppHealthCreateApplicationInfrastructureServicesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<AppHealthCreateApplicationInfrastructureServicesCommandHandler>(AppHealthCreateApplicationInfrastructureServicesCommandHandler);
        service = module.get<AppHealthCreateApplicationInfrastructureServicesService>(AppHealthCreateApplicationInfrastructureServicesService);
    });

    describe('main', () =>
    {
        test('AppHealthCreateApplicationInfrastructureServicesCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return AppHealthMockApplicationInfrastructureServiceData createds', async () =>
        {
            expect(await commandHandler.execute(
                new AppHealthCreateApplicationInfrastructureServicesCommand(
                    appHealthMockApplicationInfrastructureServiceData,
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
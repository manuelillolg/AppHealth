import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { appHealthMockApplicationInfrastructureServiceData } from '@app/app-health/application-infrastructure-service/infrastructure/mock/app-health-mock-application-infrastructure-service.data';
import { AppHealthUpdateApplicationInfrastructureServicesCommandHandler } from './app-health-update-application-infrastructure-services.command-handler';
import { AppHealthUpdateApplicationInfrastructureServicesCommand } from './app-health-update-application-infrastructure-services.command';
import { AppHealthUpdateApplicationInfrastructureServicesService } from './app-health-update-application-infrastructure-services.service';

describe('AppHealthUpdateApplicationInfrastructureServicesCommandHandler', () =>
{
    let commandHandler: AppHealthUpdateApplicationInfrastructureServicesCommandHandler;
    let service: AppHealthUpdateApplicationInfrastructureServicesService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthUpdateApplicationInfrastructureServicesCommandHandler,
                {
                    provide : AppHealthUpdateApplicationInfrastructureServicesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<AppHealthUpdateApplicationInfrastructureServicesCommandHandler>(AppHealthUpdateApplicationInfrastructureServicesCommandHandler);
        service = module.get<AppHealthUpdateApplicationInfrastructureServicesService>(AppHealthUpdateApplicationInfrastructureServicesService);
    });

    describe('main', () =>
    {
        test('UpdateApplicationInfrastructureServicesCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an applicationInfrastructureServices updated', async () =>
        {
            expect(await commandHandler.execute(
                new AppHealthUpdateApplicationInfrastructureServicesCommand(
                    {
                        id: appHealthMockApplicationInfrastructureServiceData[0].id,
                        applicationId: appHealthMockApplicationInfrastructureServiceData[0].applicationId,
                        infrastructureServiceId: appHealthMockApplicationInfrastructureServiceData[0].infrastructureServiceId,
                        averageCostPerYear: appHealthMockApplicationInfrastructureServiceData[0].averageCostPerYear,
                        score: appHealthMockApplicationInfrastructureServiceData[0].score,
                    },
                    {},
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});

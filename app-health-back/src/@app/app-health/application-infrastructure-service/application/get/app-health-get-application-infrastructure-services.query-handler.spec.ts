import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthGetApplicationInfrastructureServicesQueryHandler } from './app-health-get-application-infrastructure-services.query-handler';
import { AppHealthMockApplicationInfrastructureServiceRepository } from '@app/app-health/application-infrastructure-service/infrastructure/mock/app-health-mock-application-infrastructure-service.repository';
import { AppHealthIApplicationInfrastructureServiceRepository } from '@app/app-health/application-infrastructure-service/domain/app-health-application-infrastructure-service.repository';
import { AppHealthApplicationInfrastructureServiceMapper } from '@app/app-health/application-infrastructure-service/domain/app-health-application-infrastructure-service.mapper';
import { AppHealthGetApplicationInfrastructureServicesQuery } from './app-health-get-application-infrastructure-services.query';
import { AppHealthGetApplicationInfrastructureServicesService } from './app-health-get-application-infrastructure-services.service';

describe('GetApplicationInfrastructureServicesQueryHandler', () =>
{
    let queryHandler: AppHealthGetApplicationInfrastructureServicesQueryHandler;
    let service: AppHealthGetApplicationInfrastructureServicesService;
    let repository: AppHealthMockApplicationInfrastructureServiceRepository;
    let mapper: AppHealthApplicationInfrastructureServiceMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthGetApplicationInfrastructureServicesQueryHandler,
                {
                    provide : AppHealthIApplicationInfrastructureServiceRepository,
                    useClass: AppHealthMockApplicationInfrastructureServiceRepository,
                },
                {
                    provide : AppHealthGetApplicationInfrastructureServicesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<AppHealthGetApplicationInfrastructureServicesQueryHandler>(AppHealthGetApplicationInfrastructureServicesQueryHandler);
        service = module.get<AppHealthGetApplicationInfrastructureServicesService>(AppHealthGetApplicationInfrastructureServicesService);
        repository = <AppHealthMockApplicationInfrastructureServiceRepository>module.get<AppHealthIApplicationInfrastructureServiceRepository>(AppHealthIApplicationInfrastructureServiceRepository);
        mapper = new AppHealthApplicationInfrastructureServiceMapper();
    });

    describe('main', () =>
    {
        test('AppHealthGetApplicationInfrastructureServicesQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an applicationInfrastructureServices founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new AppHealthGetApplicationInfrastructureServicesQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
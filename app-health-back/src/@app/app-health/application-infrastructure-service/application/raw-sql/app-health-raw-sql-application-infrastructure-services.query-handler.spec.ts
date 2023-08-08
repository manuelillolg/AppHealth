import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthMockApplicationInfrastructureServiceRepository } from '@app/app-health/application-infrastructure-service/infrastructure/mock/app-health-mock-application-infrastructure-service.repository';
import { AppHealthIApplicationInfrastructureServiceRepository } from '@app/app-health/application-infrastructure-service/domain/app-health-application-infrastructure-service.repository';
import { AppHealthApplicationInfrastructureServiceMapper } from '@app/app-health/application-infrastructure-service/domain/app-health-application-infrastructure-service.mapper';
import { AppHealthRawSQLApplicationInfrastructureServicesQueryHandler } from './app-health-raw-sql-application-infrastructure-services.query-handler';
import { AppHealthRawSQLApplicationInfrastructureServicesQuery } from './app-health-raw-sql-application-infrastructure-services.query';
import { AppHealthRawSQLApplicationInfrastructureServicesService } from './app-health-raw-sql-application-infrastructure-services.service';

describe('RawSQLApplicationInfrastructureServicesQueryHandler', () =>
{
    let queryHandler: AppHealthRawSQLApplicationInfrastructureServicesQueryHandler;
    let service: AppHealthRawSQLApplicationInfrastructureServicesService;
    let repository: AppHealthMockApplicationInfrastructureServiceRepository;
    let mapper: AppHealthApplicationInfrastructureServiceMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthRawSQLApplicationInfrastructureServicesQueryHandler,
                {
                    provide : AppHealthIApplicationInfrastructureServiceRepository,
                    useClass: AppHealthMockApplicationInfrastructureServiceRepository,
                },
                {
                    provide : AppHealthRawSQLApplicationInfrastructureServicesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<AppHealthRawSQLApplicationInfrastructureServicesQueryHandler>(AppHealthRawSQLApplicationInfrastructureServicesQueryHandler);
        service = module.get<AppHealthRawSQLApplicationInfrastructureServicesService>(AppHealthRawSQLApplicationInfrastructureServicesService);
        repository = <AppHealthMockApplicationInfrastructureServiceRepository>module.get<AppHealthIApplicationInfrastructureServiceRepository>(AppHealthIApplicationInfrastructureServiceRepository);
        mapper = new AppHealthApplicationInfrastructureServiceMapper();
    });

    describe('main', () =>
    {
        test('AppHealthRawSQLApplicationInfrastructureServicesQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an applicationInfrastructureServices founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new AppHealthRawSQLApplicationInfrastructureServicesQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
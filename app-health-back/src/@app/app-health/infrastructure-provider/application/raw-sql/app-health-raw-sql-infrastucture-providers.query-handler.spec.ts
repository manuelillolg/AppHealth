import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthMockInfrastructureProviderRepository } from '@app/app-health/infrastructure-provider/infrastructure/mock/app-health-mock-infrastructure-provider.repository';
import { AppHealthIInfrastructureProviderRepository } from '@app/app-health/infrastructure-provider/domain/app-health-infrastructure-provider.repository';
import { AppHealthInfrastructureProviderMapper } from '@app/app-health/infrastructure-provider/domain/app-health-infrastructure-provider.mapper';
import { AppHealthRawSQLInfrastuctureProvidersQueryHandler } from './app-health-raw-sql-infrastucture-providers.query-handler';
import { AppHealthRawSQLInfrastuctureProvidersQuery } from './app-health-raw-sql-infrastucture-providers.query';
import { AppHealthRawSQLInfrastuctureProvidersService } from './app-health-raw-sql-infrastucture-providers.service';

describe('RawSQLInfrastuctureProvidersQueryHandler', () =>
{
    let queryHandler: AppHealthRawSQLInfrastuctureProvidersQueryHandler;
    let service: AppHealthRawSQLInfrastuctureProvidersService;
    let repository: AppHealthMockInfrastructureProviderRepository;
    let mapper: AppHealthInfrastructureProviderMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthRawSQLInfrastuctureProvidersQueryHandler,
                {
                    provide : AppHealthIInfrastructureProviderRepository,
                    useClass: AppHealthMockInfrastructureProviderRepository,
                },
                {
                    provide : AppHealthRawSQLInfrastuctureProvidersService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<AppHealthRawSQLInfrastuctureProvidersQueryHandler>(AppHealthRawSQLInfrastuctureProvidersQueryHandler);
        service = module.get<AppHealthRawSQLInfrastuctureProvidersService>(AppHealthRawSQLInfrastuctureProvidersService);
        repository = <AppHealthMockInfrastructureProviderRepository>module.get<AppHealthIInfrastructureProviderRepository>(AppHealthIInfrastructureProviderRepository);
        mapper = new AppHealthInfrastructureProviderMapper();
    });

    describe('main', () =>
    {
        test('AppHealthRawSQLInfrastuctureProvidersQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an infrastuctureProviders founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new AppHealthRawSQLInfrastuctureProvidersQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
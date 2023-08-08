import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthGetInfrastuctureProvidersQueryHandler } from './app-health-get-infrastucture-providers.query-handler';
import { AppHealthMockInfrastructureProviderRepository } from '@app/app-health/infrastructure-provider/infrastructure/mock/app-health-mock-infrastructure-provider.repository';
import { AppHealthIInfrastructureProviderRepository } from '@app/app-health/infrastructure-provider/domain/app-health-infrastructure-provider.repository';
import { AppHealthInfrastructureProviderMapper } from '@app/app-health/infrastructure-provider/domain/app-health-infrastructure-provider.mapper';
import { AppHealthGetInfrastuctureProvidersQuery } from './app-health-get-infrastucture-providers.query';
import { AppHealthGetInfrastuctureProvidersService } from './app-health-get-infrastucture-providers.service';

describe('GetInfrastuctureProvidersQueryHandler', () =>
{
    let queryHandler: AppHealthGetInfrastuctureProvidersQueryHandler;
    let service: AppHealthGetInfrastuctureProvidersService;
    let repository: AppHealthMockInfrastructureProviderRepository;
    let mapper: AppHealthInfrastructureProviderMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthGetInfrastuctureProvidersQueryHandler,
                {
                    provide : AppHealthIInfrastructureProviderRepository,
                    useClass: AppHealthMockInfrastructureProviderRepository,
                },
                {
                    provide : AppHealthGetInfrastuctureProvidersService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<AppHealthGetInfrastuctureProvidersQueryHandler>(AppHealthGetInfrastuctureProvidersQueryHandler);
        service = module.get<AppHealthGetInfrastuctureProvidersService>(AppHealthGetInfrastuctureProvidersService);
        repository = <AppHealthMockInfrastructureProviderRepository>module.get<AppHealthIInfrastructureProviderRepository>(AppHealthIInfrastructureProviderRepository);
        mapper = new AppHealthInfrastructureProviderMapper();
    });

    describe('main', () =>
    {
        test('AppHealthGetInfrastuctureProvidersQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an infrastuctureProviders founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new AppHealthGetInfrastuctureProvidersQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
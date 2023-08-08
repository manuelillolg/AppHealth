/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthPaginateInfrastuctureProvidersResolver } from './app-health-paginate-infrastucture-providers.resolver';
import { AppHealthPaginateInfrastuctureProvidersHandler } from '../handlers/app-health-paginate-infrastucture-providers.handler';

// sources
import { appHealthMockInfrastructureProviderData } from '@app/app-health/infrastructure-provider/infrastructure/mock/app-health-mock-infrastructure-provider.data';

describe('AppHealthPaginateInfrastuctureProvidersResolver', () =>
{
    let resolver: AppHealthPaginateInfrastuctureProvidersResolver;
    let handler: AppHealthPaginateInfrastuctureProvidersHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthPaginateInfrastuctureProvidersResolver,
                {
                    provide : AppHealthPaginateInfrastuctureProvidersHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthPaginateInfrastuctureProvidersResolver>(AppHealthPaginateInfrastuctureProvidersResolver);
        handler = module.get<AppHealthPaginateInfrastuctureProvidersHandler>(AppHealthPaginateInfrastuctureProvidersHandler);
    });

    test('AppHealthPaginateInfrastuctureProvidersResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthPaginateInfrastuctureProvidersResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a appHealthMockInfrastructureProviderData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : appHealthMockInfrastructureProviderData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : appHealthMockInfrastructureProviderData,
            });
        });
    });
});
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthFindInfrastructureProviderByIdResolver } from './app-health-find-infrastructure-provider-by-id.resolver';
import { AppHealthFindInfrastructureProviderByIdHandler } from '../handlers/app-health-find-infrastructure-provider-by-id.handler';

// sources
import { appHealthMockInfrastructureProviderData } from '@app/app-health/infrastructure-provider/infrastructure/mock/app-health-mock-infrastructure-provider.data';

describe('AppHealthFindInfrastructureProviderByIdResolver', () =>
{
    let resolver: AppHealthFindInfrastructureProviderByIdResolver;
    let handler: AppHealthFindInfrastructureProviderByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthFindInfrastructureProviderByIdResolver,
                {
                    provide : AppHealthFindInfrastructureProviderByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthFindInfrastructureProviderByIdResolver>(AppHealthFindInfrastructureProviderByIdResolver);
        handler = module.get<AppHealthFindInfrastructureProviderByIdHandler>(AppHealthFindInfrastructureProviderByIdHandler);
    });

    test('AppHealthFindInfrastructureProviderByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthFindInfrastructureProviderByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an infrastructureProvider by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockInfrastructureProviderData[0])));
            expect(await resolver.main(appHealthMockInfrastructureProviderData[0].id)).toBe(appHealthMockInfrastructureProviderData[0]);
        });
    });
});
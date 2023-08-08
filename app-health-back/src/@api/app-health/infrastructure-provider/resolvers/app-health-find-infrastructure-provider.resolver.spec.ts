/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthFindInfrastructureProviderResolver } from './app-health-find-infrastructure-provider.resolver';
import { AppHealthFindInfrastructureProviderHandler } from '../handlers/app-health-find-infrastructure-provider.handler';

// sources
import { appHealthMockInfrastructureProviderData } from '@app/app-health/infrastructure-provider/infrastructure/mock/app-health-mock-infrastructure-provider.data';

describe('AppHealthFindInfrastructureProviderResolver', () =>
{
    let resolver: AppHealthFindInfrastructureProviderResolver;
    let handler: AppHealthFindInfrastructureProviderHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthFindInfrastructureProviderResolver,
                {
                    provide : AppHealthFindInfrastructureProviderHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthFindInfrastructureProviderResolver>(AppHealthFindInfrastructureProviderResolver);
        handler = module.get<AppHealthFindInfrastructureProviderHandler>(AppHealthFindInfrastructureProviderHandler);
    });

    test('AppHealthFindInfrastructureProviderResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthFindInfrastructureProviderResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a infrastructureProvider', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockInfrastructureProviderData[0])));
            expect(await resolver.main()).toBe(appHealthMockInfrastructureProviderData[0]);
        });
    });
});
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthGetInfrastuctureProvidersResolver } from './app-health-get-infrastucture-providers.resolver';
import { AppHealthGetInfrastuctureProvidersHandler } from '../handlers/app-health-get-infrastucture-providers.handler';

// sources
import { appHealthMockInfrastructureProviderData } from '@app/app-health/infrastructure-provider/infrastructure/mock/app-health-mock-infrastructure-provider.data';

describe('AppHealthGetInfrastuctureProvidersResolver', () =>
{
    let resolver: AppHealthGetInfrastuctureProvidersResolver;
    let handler: AppHealthGetInfrastuctureProvidersHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthGetInfrastuctureProvidersResolver,
                {
                    provide : AppHealthGetInfrastuctureProvidersHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthGetInfrastuctureProvidersResolver>(AppHealthGetInfrastuctureProvidersResolver);
        handler = module.get<AppHealthGetInfrastuctureProvidersHandler>(AppHealthGetInfrastuctureProvidersHandler);
    });

    test('AppHealthGetInfrastuctureProvidersResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthGetInfrastuctureProvidersResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a appHealthMockInfrastructureProviderData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockInfrastructureProviderData)));
            expect(await resolver.main()).toBe(appHealthMockInfrastructureProviderData);
        });
    });
});
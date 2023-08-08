/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteInfrastuctureProvidersResolver } from './app-health-delete-infrastucture-providers.resolver';
import { AppHealthDeleteInfrastuctureProvidersHandler } from '../handlers/app-health-delete-infrastucture-providers.handler';

// sources
import { appHealthMockInfrastructureProviderData } from '@app/app-health/infrastructure-provider/infrastructure/mock/app-health-mock-infrastructure-provider.data';

describe('AppHealthDeleteInfrastuctureProvidersResolver', () =>
{
    let resolver: AppHealthDeleteInfrastuctureProvidersResolver;
    let handler: AppHealthDeleteInfrastuctureProvidersHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteInfrastuctureProvidersResolver,
                {
                    provide : AppHealthDeleteInfrastuctureProvidersHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteInfrastuctureProvidersResolver>(AppHealthDeleteInfrastuctureProvidersResolver);
        handler = module.get<AppHealthDeleteInfrastuctureProvidersHandler>(AppHealthDeleteInfrastuctureProvidersHandler);
    });

    test('AppHealthDeleteInfrastuctureProvidersResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteInfrastuctureProvidersResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an appHealthMockInfrastructureProviderData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockInfrastructureProviderData)));
            expect(await resolver.main()).toBe(appHealthMockInfrastructureProviderData);
        });
    });
});
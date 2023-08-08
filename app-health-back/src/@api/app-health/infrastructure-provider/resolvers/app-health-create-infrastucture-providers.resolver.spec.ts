import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateInfrastuctureProvidersResolver } from './app-health-create-infrastucture-providers.resolver';
import { AppHealthCreateInfrastuctureProvidersHandler } from '../handlers/app-health-create-infrastucture-providers.handler';
import { AppHealthCreateInfrastructureProviderInput } from '@api/graphql';

// sources
import { appHealthMockInfrastructureProviderData } from '@app/app-health/infrastructure-provider/infrastructure/mock/app-health-mock-infrastructure-provider.data';

describe('AppHealthCreateInfrastuctureProvidersResolver', () =>
{
    let resolver: AppHealthCreateInfrastuctureProvidersResolver;
    let handler: AppHealthCreateInfrastuctureProvidersHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateInfrastuctureProvidersResolver,
                {
                    provide : AppHealthCreateInfrastuctureProvidersHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateInfrastuctureProvidersResolver>(AppHealthCreateInfrastuctureProvidersResolver);
        handler = module.get<AppHealthCreateInfrastuctureProvidersHandler>(AppHealthCreateInfrastuctureProvidersHandler);
    });

    test('AppHealthCreateInfrastuctureProvidersResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateInfrastuctureProvidersResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an infrastuctureProviders created', async () =>
        {
            expect(await resolver.main(<AppHealthCreateInfrastructureProviderInput[]>appHealthMockInfrastructureProviderData)).toBe(undefined);
        });
    });
});
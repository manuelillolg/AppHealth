/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateInfrastuctureProvidersResolver } from './app-health-update-infrastucture-providers.resolver';
import { AppHealthUpdateInfrastuctureProvidersHandler } from '../handlers/app-health-update-infrastucture-providers.handler';
import { AppHealthUpdateInfrastuctureProvidersInput } from '@api/graphql';

// sources
import { appHealthMockInfrastructureProviderData } from '@app/app-health/infrastructure-provider/infrastructure/mock/app-health-mock-infrastructure-provider.data';

describe('AppHealthUpdateInfrastuctureProvidersResolver', () =>
{
    let resolver: AppHealthUpdateInfrastuctureProvidersResolver;
    let handler: AppHealthUpdateInfrastuctureProvidersHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateInfrastuctureProvidersResolver,
                {
                    provide : AppHealthUpdateInfrastuctureProvidersHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateInfrastuctureProvidersResolver>(AppHealthUpdateInfrastuctureProvidersResolver);
        handler = module.get<AppHealthUpdateInfrastuctureProvidersHandler>(AppHealthUpdateInfrastuctureProvidersHandler);
    });

    test('AppHealthUpdateInfrastuctureProvidersResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateInfrastuctureProvidersResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a infrastuctureProviders updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockInfrastructureProviderData[0])));
            expect(await resolver.main(<AppHealthUpdateInfrastuctureProvidersInput>appHealthMockInfrastructureProviderData[0])).toBe(appHealthMockInfrastructureProviderData[0]);
        });
    });
});
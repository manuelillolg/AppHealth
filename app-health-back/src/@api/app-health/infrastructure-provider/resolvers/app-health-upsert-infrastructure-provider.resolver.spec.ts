/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpsertInfrastructureProviderResolver } from './app-health-upsert-infrastructure-provider.resolver';
import { AppHealthUpsertInfrastructureProviderHandler } from '../handlers/app-health-upsert-infrastructure-provider.handler';
import { AppHealthUpdateInfrastructureProviderByIdInput } from '@api/graphql';

// sources
import { appHealthMockInfrastructureProviderData } from '@app/app-health/infrastructure-provider/infrastructure/mock/app-health-mock-infrastructure-provider.data';

describe('AppHealthUpsertInfrastructureProviderResolver', () =>
{
    let resolver: AppHealthUpsertInfrastructureProviderResolver;
    let handler: AppHealthUpsertInfrastructureProviderHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpsertInfrastructureProviderResolver,
                {
                    provide : AppHealthUpsertInfrastructureProviderHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpsertInfrastructureProviderResolver>(AppHealthUpsertInfrastructureProviderResolver);
        handler = module.get<AppHealthUpsertInfrastructureProviderHandler>(AppHealthUpsertInfrastructureProviderHandler);
    });

    test('AppHealthUpsertInfrastructureProviderResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpsertInfrastructureProviderResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an infrastructureProvider upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockInfrastructureProviderData[0])));
            expect(await resolver.main(<AppHealthUpdateInfrastructureProviderByIdInput>appHealthMockInfrastructureProviderData[0])).toBe(appHealthMockInfrastructureProviderData[0]);
        });
    });
});
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateInfrastructureProviderByIdResolver } from './app-health-update-infrastructure-provider-by-id.resolver';
import { AppHealthUpdateInfrastructureProviderByIdHandler } from '../handlers/app-health-update-infrastructure-provider-by-id.handler';
import { AppHealthUpdateInfrastructureProviderByIdInput } from '@api/graphql';

// sources
import { appHealthMockInfrastructureProviderData } from '@app/app-health/infrastructure-provider/infrastructure/mock/app-health-mock-infrastructure-provider.data';

describe('AppHealthUpdateInfrastructureProviderByIdResolver', () =>
{
    let resolver: AppHealthUpdateInfrastructureProviderByIdResolver;
    let handler: AppHealthUpdateInfrastructureProviderByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateInfrastructureProviderByIdResolver,
                {
                    provide : AppHealthUpdateInfrastructureProviderByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateInfrastructureProviderByIdResolver>(AppHealthUpdateInfrastructureProviderByIdResolver);
        handler = module.get<AppHealthUpdateInfrastructureProviderByIdHandler>(AppHealthUpdateInfrastructureProviderByIdHandler);
    });

    test('AppHealthUpdateInfrastructureProviderByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateInfrastructureProviderByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a infrastructureProvider by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockInfrastructureProviderData[0])));
            expect(await resolver.main(<AppHealthUpdateInfrastructureProviderByIdInput>appHealthMockInfrastructureProviderData[0])).toBe(appHealthMockInfrastructureProviderData[0]);
        });
    });
});
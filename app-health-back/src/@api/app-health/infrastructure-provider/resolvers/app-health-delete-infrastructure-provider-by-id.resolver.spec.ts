/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteInfrastructureProviderByIdResolver } from './app-health-delete-infrastructure-provider-by-id.resolver';
import { AppHealthDeleteInfrastructureProviderByIdHandler } from '../handlers/app-health-delete-infrastructure-provider-by-id.handler';

// sources
import { appHealthMockInfrastructureProviderData } from '@app/app-health/infrastructure-provider/infrastructure/mock/app-health-mock-infrastructure-provider.data';

describe('AppHealthDeleteInfrastructureProviderByIdResolver', () =>
{
    let resolver: AppHealthDeleteInfrastructureProviderByIdResolver;
    let handler: AppHealthDeleteInfrastructureProviderByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteInfrastructureProviderByIdResolver,
                {
                    provide : AppHealthDeleteInfrastructureProviderByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteInfrastructureProviderByIdResolver>(AppHealthDeleteInfrastructureProviderByIdResolver);
        handler = module.get<AppHealthDeleteInfrastructureProviderByIdHandler>(AppHealthDeleteInfrastructureProviderByIdHandler);
    });

    test('AppHealthDeleteInfrastructureProviderByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteInfrastructureProviderByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an infrastructureProvider deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockInfrastructureProviderData[0])));
            expect(await resolver.main(appHealthMockInfrastructureProviderData[0].id)).toBe(appHealthMockInfrastructureProviderData[0]);
        });
    });
});
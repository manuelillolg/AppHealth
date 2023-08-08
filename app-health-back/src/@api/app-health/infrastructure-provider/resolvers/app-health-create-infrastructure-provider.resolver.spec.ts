/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateInfrastructureProviderResolver } from './app-health-create-infrastructure-provider.resolver';
import { AppHealthCreateInfrastructureProviderHandler } from '../handlers/app-health-create-infrastructure-provider.handler';
import { AppHealthCreateInfrastructureProviderInput } from '@api/graphql';

// sources
import { appHealthMockInfrastructureProviderData } from '@app/app-health/infrastructure-provider/infrastructure/mock/app-health-mock-infrastructure-provider.data';

describe('AppHealthCreateInfrastructureProviderResolver', () =>
{
    let resolver: AppHealthCreateInfrastructureProviderResolver;
    let handler: AppHealthCreateInfrastructureProviderHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthCreateInfrastructureProviderResolver,
                {
                    provide : AppHealthCreateInfrastructureProviderHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateInfrastructureProviderResolver>(AppHealthCreateInfrastructureProviderResolver);
        handler = module.get<AppHealthCreateInfrastructureProviderHandler>(AppHealthCreateInfrastructureProviderHandler);
    });

    test('AppHealthCreateInfrastructureProviderResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateInfrastructureProviderResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an infrastructureProvider created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockInfrastructureProviderData[0])));
            expect(await resolver.main(<AppHealthCreateInfrastructureProviderInput>appHealthMockInfrastructureProviderData[0])).toBe(appHealthMockInfrastructureProviderData[0]);
        });
    });
});
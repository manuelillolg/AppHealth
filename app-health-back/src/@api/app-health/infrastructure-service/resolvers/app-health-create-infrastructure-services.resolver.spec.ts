import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateInfrastructureServicesResolver } from './app-health-create-infrastructure-services.resolver';
import { AppHealthCreateInfrastructureServicesHandler } from '../handlers/app-health-create-infrastructure-services.handler';
import { AppHealthCreateInfrastructureServiceInput } from '@api/graphql';

// sources
import { appHealthMockInfrastructureServiceData } from '@app/app-health/infrastructure-service/infrastructure/mock/app-health-mock-infrastructure-service.data';

describe('AppHealthCreateInfrastructureServicesResolver', () =>
{
    let resolver: AppHealthCreateInfrastructureServicesResolver;
    let handler: AppHealthCreateInfrastructureServicesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateInfrastructureServicesResolver,
                {
                    provide : AppHealthCreateInfrastructureServicesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateInfrastructureServicesResolver>(AppHealthCreateInfrastructureServicesResolver);
        handler = module.get<AppHealthCreateInfrastructureServicesHandler>(AppHealthCreateInfrastructureServicesHandler);
    });

    test('AppHealthCreateInfrastructureServicesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateInfrastructureServicesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an infrastructureServices created', async () =>
        {
            expect(await resolver.main(<AppHealthCreateInfrastructureServiceInput[]>appHealthMockInfrastructureServiceData)).toBe(undefined);
        });
    });
});
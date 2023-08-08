import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateApplicationInfrastructureServicesResolver } from './app-health-create-application-infrastructure-services.resolver';
import { AppHealthCreateApplicationInfrastructureServicesHandler } from '../handlers/app-health-create-application-infrastructure-services.handler';
import { AppHealthCreateApplicationInfrastructureServiceInput } from '@api/graphql';

// sources
import { appHealthMockApplicationInfrastructureServiceData } from '@app/app-health/application-infrastructure-service/infrastructure/mock/app-health-mock-application-infrastructure-service.data';

describe('AppHealthCreateApplicationInfrastructureServicesResolver', () =>
{
    let resolver: AppHealthCreateApplicationInfrastructureServicesResolver;
    let handler: AppHealthCreateApplicationInfrastructureServicesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateApplicationInfrastructureServicesResolver,
                {
                    provide : AppHealthCreateApplicationInfrastructureServicesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateApplicationInfrastructureServicesResolver>(AppHealthCreateApplicationInfrastructureServicesResolver);
        handler = module.get<AppHealthCreateApplicationInfrastructureServicesHandler>(AppHealthCreateApplicationInfrastructureServicesHandler);
    });

    test('AppHealthCreateApplicationInfrastructureServicesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateApplicationInfrastructureServicesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationInfrastructureServices created', async () =>
        {
            expect(await resolver.main(<AppHealthCreateApplicationInfrastructureServiceInput[]>appHealthMockApplicationInfrastructureServiceData)).toBe(undefined);
        });
    });
});
import { AppHealthCreateApplicationInfrastructureServicesHandler, AppHealthCreateApplicationInfrastructureServicesResolver } from '@api/app-health/application-infrastructure-service';
import { AppHealthCreateApplicationInfrastructureServiceInput } from '@api/graphql';
import { appHealthMockApplicationInfrastructureServiceData } from '@app/app-health/application-infrastructure-service';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthCreateApplicationInfrastructureServicesResolver', () =>
{
    let resolver: AppHealthCreateApplicationInfrastructureServicesResolver;

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

/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppHealthDeleteApplicationInfrastructureServicesHandler, AppHealthDeleteApplicationInfrastructureServicesResolver } from '@api/app-health/application-infrastructure-service';
import { appHealthMockApplicationInfrastructureServiceData } from '@app/app-health/application-infrastructure-service';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthDeleteApplicationInfrastructureServicesResolver', () =>
{
    let resolver: AppHealthDeleteApplicationInfrastructureServicesResolver;
    let handler: AppHealthDeleteApplicationInfrastructureServicesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteApplicationInfrastructureServicesResolver,
                {
                    provide : AppHealthDeleteApplicationInfrastructureServicesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteApplicationInfrastructureServicesResolver>(AppHealthDeleteApplicationInfrastructureServicesResolver);
        handler = module.get<AppHealthDeleteApplicationInfrastructureServicesHandler>(AppHealthDeleteApplicationInfrastructureServicesHandler);
    });

    test('AppHealthDeleteApplicationInfrastructureServicesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApplicationInfrastructureServicesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an appHealthMockApplicationInfrastructureServiceData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationInfrastructureServiceData)));
            expect(await resolver.main()).toBe(appHealthMockApplicationInfrastructureServiceData);
        });
    });
});

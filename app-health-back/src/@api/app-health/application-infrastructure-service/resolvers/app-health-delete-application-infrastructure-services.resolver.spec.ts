/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteApplicationInfrastructureServicesResolver } from './app-health-delete-application-infrastructure-services.resolver';
import { AppHealthDeleteApplicationInfrastructureServicesHandler } from '../handlers/app-health-delete-application-infrastructure-services.handler';

// sources
import { appHealthMockApplicationInfrastructureServiceData } from '@app/app-health/application-infrastructure-service/infrastructure/mock/app-health-mock-application-infrastructure-service.data';

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
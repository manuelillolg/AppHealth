/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteInfrastructureServicesResolver } from './app-health-delete-infrastructure-services.resolver';
import { AppHealthDeleteInfrastructureServicesHandler } from '../handlers/app-health-delete-infrastructure-services.handler';

// sources
import { appHealthMockInfrastructureServiceData } from '@app/app-health/infrastructure-service/infrastructure/mock/app-health-mock-infrastructure-service.data';

describe('AppHealthDeleteInfrastructureServicesResolver', () =>
{
    let resolver: AppHealthDeleteInfrastructureServicesResolver;
    let handler: AppHealthDeleteInfrastructureServicesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteInfrastructureServicesResolver,
                {
                    provide : AppHealthDeleteInfrastructureServicesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteInfrastructureServicesResolver>(AppHealthDeleteInfrastructureServicesResolver);
        handler = module.get<AppHealthDeleteInfrastructureServicesHandler>(AppHealthDeleteInfrastructureServicesHandler);
    });

    test('AppHealthDeleteInfrastructureServicesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteInfrastructureServicesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an appHealthMockInfrastructureServiceData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockInfrastructureServiceData)));
            expect(await resolver.main()).toBe(appHealthMockInfrastructureServiceData);
        });
    });
});
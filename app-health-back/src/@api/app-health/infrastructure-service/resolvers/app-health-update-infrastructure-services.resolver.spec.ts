/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateInfrastructureServicesResolver } from './app-health-update-infrastructure-services.resolver';
import { AppHealthUpdateInfrastructureServicesHandler } from '../handlers/app-health-update-infrastructure-services.handler';
import { AppHealthUpdateInfrastructureServicesInput } from '@api/graphql';

// sources
import { appHealthMockInfrastructureServiceData } from '@app/app-health/infrastructure-service/infrastructure/mock/app-health-mock-infrastructure-service.data';

describe('AppHealthUpdateInfrastructureServicesResolver', () =>
{
    let resolver: AppHealthUpdateInfrastructureServicesResolver;
    let handler: AppHealthUpdateInfrastructureServicesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateInfrastructureServicesResolver,
                {
                    provide : AppHealthUpdateInfrastructureServicesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateInfrastructureServicesResolver>(AppHealthUpdateInfrastructureServicesResolver);
        handler = module.get<AppHealthUpdateInfrastructureServicesHandler>(AppHealthUpdateInfrastructureServicesHandler);
    });

    test('AppHealthUpdateInfrastructureServicesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateInfrastructureServicesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a infrastructureServices updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockInfrastructureServiceData[0])));
            expect(await resolver.main(<AppHealthUpdateInfrastructureServicesInput>appHealthMockInfrastructureServiceData[0])).toBe(appHealthMockInfrastructureServiceData[0]);
        });
    });
});
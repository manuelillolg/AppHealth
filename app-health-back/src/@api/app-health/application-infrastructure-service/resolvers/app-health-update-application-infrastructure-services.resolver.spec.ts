/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateApplicationInfrastructureServicesResolver } from './app-health-update-application-infrastructure-services.resolver';
import { AppHealthUpdateApplicationInfrastructureServicesHandler } from '../handlers/app-health-update-application-infrastructure-services.handler';
import { AppHealthUpdateApplicationInfrastructureServicesInput } from '@api/graphql';

// sources
import { appHealthMockApplicationInfrastructureServiceData } from '@app/app-health/application-infrastructure-service/infrastructure/mock/app-health-mock-application-infrastructure-service.data';

describe('AppHealthUpdateApplicationInfrastructureServicesResolver', () =>
{
    let resolver: AppHealthUpdateApplicationInfrastructureServicesResolver;
    let handler: AppHealthUpdateApplicationInfrastructureServicesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateApplicationInfrastructureServicesResolver,
                {
                    provide : AppHealthUpdateApplicationInfrastructureServicesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateApplicationInfrastructureServicesResolver>(AppHealthUpdateApplicationInfrastructureServicesResolver);
        handler = module.get<AppHealthUpdateApplicationInfrastructureServicesHandler>(AppHealthUpdateApplicationInfrastructureServicesHandler);
    });

    test('AppHealthUpdateApplicationInfrastructureServicesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateApplicationInfrastructureServicesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a applicationInfrastructureServices updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationInfrastructureServiceData[0])));
            expect(await resolver.main(<AppHealthUpdateApplicationInfrastructureServicesInput>appHealthMockApplicationInfrastructureServiceData[0])).toBe(appHealthMockApplicationInfrastructureServiceData[0]);
        });
    });
});
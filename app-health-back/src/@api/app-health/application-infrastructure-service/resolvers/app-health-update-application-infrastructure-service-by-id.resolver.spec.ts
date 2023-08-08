/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateApplicationInfrastructureServiceByIdResolver } from './app-health-update-application-infrastructure-service-by-id.resolver';
import { AppHealthUpdateApplicationInfrastructureServiceByIdHandler } from '../handlers/app-health-update-application-infrastructure-service-by-id.handler';
import { AppHealthUpdateApplicationInfrastructureServiceByIdInput } from '@api/graphql';

// sources
import { appHealthMockApplicationInfrastructureServiceData } from '@app/app-health/application-infrastructure-service/infrastructure/mock/app-health-mock-application-infrastructure-service.data';

describe('AppHealthUpdateApplicationInfrastructureServiceByIdResolver', () =>
{
    let resolver: AppHealthUpdateApplicationInfrastructureServiceByIdResolver;
    let handler: AppHealthUpdateApplicationInfrastructureServiceByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateApplicationInfrastructureServiceByIdResolver,
                {
                    provide : AppHealthUpdateApplicationInfrastructureServiceByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateApplicationInfrastructureServiceByIdResolver>(AppHealthUpdateApplicationInfrastructureServiceByIdResolver);
        handler = module.get<AppHealthUpdateApplicationInfrastructureServiceByIdHandler>(AppHealthUpdateApplicationInfrastructureServiceByIdHandler);
    });

    test('AppHealthUpdateApplicationInfrastructureServiceByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateApplicationInfrastructureServiceByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a applicationInfrastructureService by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationInfrastructureServiceData[0])));
            expect(await resolver.main(<AppHealthUpdateApplicationInfrastructureServiceByIdInput>appHealthMockApplicationInfrastructureServiceData[0])).toBe(appHealthMockApplicationInfrastructureServiceData[0]);
        });
    });
});
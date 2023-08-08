/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthPaginateApplicationInfrastructureServicesResolver } from './app-health-paginate-application-infrastructure-services.resolver';
import { AppHealthPaginateApplicationInfrastructureServicesHandler } from '../handlers/app-health-paginate-application-infrastructure-services.handler';

// sources
import { appHealthMockApplicationInfrastructureServiceData } from '@app/app-health/application-infrastructure-service/infrastructure/mock/app-health-mock-application-infrastructure-service.data';

describe('AppHealthPaginateApplicationInfrastructureServicesResolver', () =>
{
    let resolver: AppHealthPaginateApplicationInfrastructureServicesResolver;
    let handler: AppHealthPaginateApplicationInfrastructureServicesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthPaginateApplicationInfrastructureServicesResolver,
                {
                    provide : AppHealthPaginateApplicationInfrastructureServicesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthPaginateApplicationInfrastructureServicesResolver>(AppHealthPaginateApplicationInfrastructureServicesResolver);
        handler = module.get<AppHealthPaginateApplicationInfrastructureServicesHandler>(AppHealthPaginateApplicationInfrastructureServicesHandler);
    });

    test('AppHealthPaginateApplicationInfrastructureServicesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthPaginateApplicationInfrastructureServicesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a appHealthMockApplicationInfrastructureServiceData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : appHealthMockApplicationInfrastructureServiceData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : appHealthMockApplicationInfrastructureServiceData,
            });
        });
    });
});
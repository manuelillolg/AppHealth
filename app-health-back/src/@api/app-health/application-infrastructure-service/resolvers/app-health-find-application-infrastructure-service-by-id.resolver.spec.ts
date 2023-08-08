/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthFindApplicationInfrastructureServiceByIdResolver } from './app-health-find-application-infrastructure-service-by-id.resolver';
import { AppHealthFindApplicationInfrastructureServiceByIdHandler } from '../handlers/app-health-find-application-infrastructure-service-by-id.handler';

// sources
import { appHealthMockApplicationInfrastructureServiceData } from '@app/app-health/application-infrastructure-service/infrastructure/mock/app-health-mock-application-infrastructure-service.data';

describe('AppHealthFindApplicationInfrastructureServiceByIdResolver', () =>
{
    let resolver: AppHealthFindApplicationInfrastructureServiceByIdResolver;
    let handler: AppHealthFindApplicationInfrastructureServiceByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthFindApplicationInfrastructureServiceByIdResolver,
                {
                    provide : AppHealthFindApplicationInfrastructureServiceByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthFindApplicationInfrastructureServiceByIdResolver>(AppHealthFindApplicationInfrastructureServiceByIdResolver);
        handler = module.get<AppHealthFindApplicationInfrastructureServiceByIdHandler>(AppHealthFindApplicationInfrastructureServiceByIdHandler);
    });

    test('AppHealthFindApplicationInfrastructureServiceByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthFindApplicationInfrastructureServiceByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationInfrastructureService by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationInfrastructureServiceData[0])));
            expect(await resolver.main(appHealthMockApplicationInfrastructureServiceData[0].id)).toBe(appHealthMockApplicationInfrastructureServiceData[0]);
        });
    });
});
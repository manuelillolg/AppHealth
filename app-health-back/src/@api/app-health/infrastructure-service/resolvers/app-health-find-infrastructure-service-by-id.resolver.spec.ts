/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthFindInfrastructureServiceByIdResolver } from './app-health-find-infrastructure-service-by-id.resolver';
import { AppHealthFindInfrastructureServiceByIdHandler } from '../handlers/app-health-find-infrastructure-service-by-id.handler';

// sources
import { appHealthMockInfrastructureServiceData } from '@app/app-health/infrastructure-service/infrastructure/mock/app-health-mock-infrastructure-service.data';

describe('AppHealthFindInfrastructureServiceByIdResolver', () =>
{
    let resolver: AppHealthFindInfrastructureServiceByIdResolver;
    let handler: AppHealthFindInfrastructureServiceByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthFindInfrastructureServiceByIdResolver,
                {
                    provide : AppHealthFindInfrastructureServiceByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthFindInfrastructureServiceByIdResolver>(AppHealthFindInfrastructureServiceByIdResolver);
        handler = module.get<AppHealthFindInfrastructureServiceByIdHandler>(AppHealthFindInfrastructureServiceByIdHandler);
    });

    test('AppHealthFindInfrastructureServiceByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthFindInfrastructureServiceByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an infrastructureService by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockInfrastructureServiceData[0])));
            expect(await resolver.main(appHealthMockInfrastructureServiceData[0].id)).toBe(appHealthMockInfrastructureServiceData[0]);
        });
    });
});
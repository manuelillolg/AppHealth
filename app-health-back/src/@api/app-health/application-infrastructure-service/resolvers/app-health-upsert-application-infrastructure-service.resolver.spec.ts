/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpsertApplicationInfrastructureServiceResolver } from './app-health-upsert-application-infrastructure-service.resolver';
import { AppHealthUpsertApplicationInfrastructureServiceHandler } from '../handlers/app-health-upsert-application-infrastructure-service.handler';
import { AppHealthUpdateApplicationInfrastructureServiceByIdInput } from '@api/graphql';

// sources
import { appHealthMockApplicationInfrastructureServiceData } from '@app/app-health/application-infrastructure-service/infrastructure/mock/app-health-mock-application-infrastructure-service.data';

describe('AppHealthUpsertApplicationInfrastructureServiceResolver', () =>
{
    let resolver: AppHealthUpsertApplicationInfrastructureServiceResolver;
    let handler: AppHealthUpsertApplicationInfrastructureServiceHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpsertApplicationInfrastructureServiceResolver,
                {
                    provide : AppHealthUpsertApplicationInfrastructureServiceHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpsertApplicationInfrastructureServiceResolver>(AppHealthUpsertApplicationInfrastructureServiceResolver);
        handler = module.get<AppHealthUpsertApplicationInfrastructureServiceHandler>(AppHealthUpsertApplicationInfrastructureServiceHandler);
    });

    test('AppHealthUpsertApplicationInfrastructureServiceResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpsertApplicationInfrastructureServiceResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationInfrastructureService upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationInfrastructureServiceData[0])));
            expect(await resolver.main(<AppHealthUpdateApplicationInfrastructureServiceByIdInput>appHealthMockApplicationInfrastructureServiceData[0])).toBe(appHealthMockApplicationInfrastructureServiceData[0]);
        });
    });
});
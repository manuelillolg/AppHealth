/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthFindApplicationIntegrationByIdResolver } from './app-health-find-application-integration-by-id.resolver';
import { AppHealthFindApplicationIntegrationByIdHandler } from '../handlers/app-health-find-application-integration-by-id.handler';

// sources
import { appHealthMockApplicationIntegrationData } from '@app/app-health/application-integration/infrastructure/mock/app-health-mock-application-integration.data';

describe('AppHealthFindApplicationIntegrationByIdResolver', () =>
{
    let resolver: AppHealthFindApplicationIntegrationByIdResolver;
    let handler: AppHealthFindApplicationIntegrationByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthFindApplicationIntegrationByIdResolver,
                {
                    provide : AppHealthFindApplicationIntegrationByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthFindApplicationIntegrationByIdResolver>(AppHealthFindApplicationIntegrationByIdResolver);
        handler = module.get<AppHealthFindApplicationIntegrationByIdHandler>(AppHealthFindApplicationIntegrationByIdHandler);
    });

    test('AppHealthFindApplicationIntegrationByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthFindApplicationIntegrationByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationIntegration by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationIntegrationData[0])));
            expect(await resolver.main(appHealthMockApplicationIntegrationData[0].id)).toBe(appHealthMockApplicationIntegrationData[0]);
        });
    });
});
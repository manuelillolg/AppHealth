/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthFindApplicationIntegrationResolver } from './app-health-find-application-integration.resolver';
import { AppHealthFindApplicationIntegrationHandler } from '../handlers/app-health-find-application-integration.handler';

// sources
import { appHealthMockApplicationIntegrationData } from '@app/app-health/application-integration/infrastructure/mock/app-health-mock-application-integration.data';

describe('AppHealthFindApplicationIntegrationResolver', () =>
{
    let resolver: AppHealthFindApplicationIntegrationResolver;
    let handler: AppHealthFindApplicationIntegrationHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthFindApplicationIntegrationResolver,
                {
                    provide : AppHealthFindApplicationIntegrationHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthFindApplicationIntegrationResolver>(AppHealthFindApplicationIntegrationResolver);
        handler = module.get<AppHealthFindApplicationIntegrationHandler>(AppHealthFindApplicationIntegrationHandler);
    });

    test('AppHealthFindApplicationIntegrationResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthFindApplicationIntegrationResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a applicationIntegration', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationIntegrationData[0])));
            expect(await resolver.main()).toBe(appHealthMockApplicationIntegrationData[0]);
        });
    });
});
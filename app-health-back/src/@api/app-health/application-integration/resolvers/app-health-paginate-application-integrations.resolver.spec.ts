/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthPaginateApplicationIntegrationsResolver } from './app-health-paginate-application-integrations.resolver';
import { AppHealthPaginateApplicationIntegrationsHandler } from '../handlers/app-health-paginate-application-integrations.handler';

// sources
import { appHealthMockApplicationIntegrationData } from '@app/app-health/application-integration/infrastructure/mock/app-health-mock-application-integration.data';

describe('AppHealthPaginateApplicationIntegrationsResolver', () =>
{
    let resolver: AppHealthPaginateApplicationIntegrationsResolver;
    let handler: AppHealthPaginateApplicationIntegrationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthPaginateApplicationIntegrationsResolver,
                {
                    provide : AppHealthPaginateApplicationIntegrationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthPaginateApplicationIntegrationsResolver>(AppHealthPaginateApplicationIntegrationsResolver);
        handler = module.get<AppHealthPaginateApplicationIntegrationsHandler>(AppHealthPaginateApplicationIntegrationsHandler);
    });

    test('AppHealthPaginateApplicationIntegrationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthPaginateApplicationIntegrationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a appHealthMockApplicationIntegrationData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : appHealthMockApplicationIntegrationData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : appHealthMockApplicationIntegrationData,
            });
        });
    });
});
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteApplicationIntegrationsResolver } from './app-health-delete-application-integrations.resolver';
import { AppHealthDeleteApplicationIntegrationsHandler } from '../handlers/app-health-delete-application-integrations.handler';

// sources
import { appHealthMockApplicationIntegrationData } from '@app/app-health/application-integration/infrastructure/mock/app-health-mock-application-integration.data';

describe('AppHealthDeleteApplicationIntegrationsResolver', () =>
{
    let resolver: AppHealthDeleteApplicationIntegrationsResolver;
    let handler: AppHealthDeleteApplicationIntegrationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteApplicationIntegrationsResolver,
                {
                    provide : AppHealthDeleteApplicationIntegrationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteApplicationIntegrationsResolver>(AppHealthDeleteApplicationIntegrationsResolver);
        handler = module.get<AppHealthDeleteApplicationIntegrationsHandler>(AppHealthDeleteApplicationIntegrationsHandler);
    });

    test('AppHealthDeleteApplicationIntegrationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApplicationIntegrationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an appHealthMockApplicationIntegrationData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationIntegrationData)));
            expect(await resolver.main()).toBe(appHealthMockApplicationIntegrationData);
        });
    });
});
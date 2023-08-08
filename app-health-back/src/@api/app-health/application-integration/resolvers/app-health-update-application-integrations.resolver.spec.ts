/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateApplicationIntegrationsResolver } from './app-health-update-application-integrations.resolver';
import { AppHealthUpdateApplicationIntegrationsHandler } from '../handlers/app-health-update-application-integrations.handler';
import { AppHealthUpdateApplicationIntegrationsInput } from '@api/graphql';

// sources
import { appHealthMockApplicationIntegrationData } from '@app/app-health/application-integration/infrastructure/mock/app-health-mock-application-integration.data';

describe('AppHealthUpdateApplicationIntegrationsResolver', () =>
{
    let resolver: AppHealthUpdateApplicationIntegrationsResolver;
    let handler: AppHealthUpdateApplicationIntegrationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateApplicationIntegrationsResolver,
                {
                    provide : AppHealthUpdateApplicationIntegrationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateApplicationIntegrationsResolver>(AppHealthUpdateApplicationIntegrationsResolver);
        handler = module.get<AppHealthUpdateApplicationIntegrationsHandler>(AppHealthUpdateApplicationIntegrationsHandler);
    });

    test('AppHealthUpdateApplicationIntegrationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateApplicationIntegrationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a applicationIntegrations updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationIntegrationData[0])));
            expect(await resolver.main(<AppHealthUpdateApplicationIntegrationsInput>appHealthMockApplicationIntegrationData[0])).toBe(appHealthMockApplicationIntegrationData[0]);
        });
    });
});
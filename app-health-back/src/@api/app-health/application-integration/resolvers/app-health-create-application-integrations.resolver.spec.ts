import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateApplicationIntegrationsResolver } from './app-health-create-application-integrations.resolver';
import { AppHealthCreateApplicationIntegrationsHandler } from '../handlers/app-health-create-application-integrations.handler';
import { AppHealthCreateApplicationIntegrationInput } from '@api/graphql';

// sources
import { appHealthMockApplicationIntegrationData } from '@app/app-health/application-integration/infrastructure/mock/app-health-mock-application-integration.data';

describe('AppHealthCreateApplicationIntegrationsResolver', () =>
{
    let resolver: AppHealthCreateApplicationIntegrationsResolver;
    let handler: AppHealthCreateApplicationIntegrationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateApplicationIntegrationsResolver,
                {
                    provide : AppHealthCreateApplicationIntegrationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateApplicationIntegrationsResolver>(AppHealthCreateApplicationIntegrationsResolver);
        handler = module.get<AppHealthCreateApplicationIntegrationsHandler>(AppHealthCreateApplicationIntegrationsHandler);
    });

    test('AppHealthCreateApplicationIntegrationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateApplicationIntegrationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationIntegrations created', async () =>
        {
            expect(await resolver.main(<AppHealthCreateApplicationIntegrationInput[]>appHealthMockApplicationIntegrationData)).toBe(undefined);
        });
    });
});
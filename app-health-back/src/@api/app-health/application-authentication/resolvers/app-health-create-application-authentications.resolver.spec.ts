import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateApplicationAuthenticationsResolver } from './app-health-create-application-authentications.resolver';
import { AppHealthCreateApplicationAuthenticationsHandler } from '../handlers/app-health-create-application-authentications.handler';
import { AppHealthCreateApplicationAuthenticationInput } from '@api/graphql';

// sources
import { appHealthMockApplicationAuthenticationData } from '@app/app-health/application-authentication/infrastructure/mock/app-health-mock-application-authentication.data';

describe('AppHealthCreateApplicationAuthenticationsResolver', () =>
{
    let resolver: AppHealthCreateApplicationAuthenticationsResolver;
    let handler: AppHealthCreateApplicationAuthenticationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateApplicationAuthenticationsResolver,
                {
                    provide : AppHealthCreateApplicationAuthenticationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateApplicationAuthenticationsResolver>(AppHealthCreateApplicationAuthenticationsResolver);
        handler = module.get<AppHealthCreateApplicationAuthenticationsHandler>(AppHealthCreateApplicationAuthenticationsHandler);
    });

    test('AppHealthCreateApplicationAuthenticationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateApplicationAuthenticationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationAuthentications created', async () =>
        {
            expect(await resolver.main(<AppHealthCreateApplicationAuthenticationInput[]>appHealthMockApplicationAuthenticationData)).toBe(undefined);
        });
    });
});
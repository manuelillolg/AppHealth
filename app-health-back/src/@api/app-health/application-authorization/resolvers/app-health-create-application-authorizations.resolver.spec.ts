import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateApplicationAuthorizationsResolver } from './app-health-create-application-authorizations.resolver';
import { AppHealthCreateApplicationAuthorizationsHandler } from '../handlers/app-health-create-application-authorizations.handler';
import { AppHealthCreateApplicationAuthorizationInput } from '@api/graphql';

// sources
import { appHealthMockApplicationAuthorizationData } from '@app/app-health/application-authorization/infrastructure/mock/app-health-mock-application-authorization.data';

describe('AppHealthCreateApplicationAuthorizationsResolver', () =>
{
    let resolver: AppHealthCreateApplicationAuthorizationsResolver;
    let handler: AppHealthCreateApplicationAuthorizationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateApplicationAuthorizationsResolver,
                {
                    provide : AppHealthCreateApplicationAuthorizationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateApplicationAuthorizationsResolver>(AppHealthCreateApplicationAuthorizationsResolver);
        handler = module.get<AppHealthCreateApplicationAuthorizationsHandler>(AppHealthCreateApplicationAuthorizationsHandler);
    });

    test('AppHealthCreateApplicationAuthorizationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateApplicationAuthorizationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationAuthorizations created', async () =>
        {
            expect(await resolver.main(<AppHealthCreateApplicationAuthorizationInput[]>appHealthMockApplicationAuthorizationData)).toBe(undefined);
        });
    });
});
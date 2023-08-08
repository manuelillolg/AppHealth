/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthGetApplicationAuthenticationsResolver } from './app-health-get-application-authentications.resolver';
import { AppHealthGetApplicationAuthenticationsHandler } from '../handlers/app-health-get-application-authentications.handler';

// sources
import { appHealthMockApplicationAuthenticationData } from '@app/app-health/application-authentication/infrastructure/mock/app-health-mock-application-authentication.data';

describe('AppHealthGetApplicationAuthenticationsResolver', () =>
{
    let resolver: AppHealthGetApplicationAuthenticationsResolver;
    let handler: AppHealthGetApplicationAuthenticationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthGetApplicationAuthenticationsResolver,
                {
                    provide : AppHealthGetApplicationAuthenticationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthGetApplicationAuthenticationsResolver>(AppHealthGetApplicationAuthenticationsResolver);
        handler = module.get<AppHealthGetApplicationAuthenticationsHandler>(AppHealthGetApplicationAuthenticationsHandler);
    });

    test('AppHealthGetApplicationAuthenticationsResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthGetApplicationAuthenticationsResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a appHealthMockApplicationAuthenticationData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationAuthenticationData)));
            expect(await resolver.main()).toBe(appHealthMockApplicationAuthenticationData);
        });
    });
});
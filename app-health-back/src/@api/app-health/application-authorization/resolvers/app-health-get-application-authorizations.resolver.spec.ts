/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthGetApplicationAuthorizationsResolver } from './app-health-get-application-authorizations.resolver';
import { AppHealthGetApplicationAuthorizationsHandler } from '../handlers/app-health-get-application-authorizations.handler';

// sources
import { appHealthMockApplicationAuthorizationData } from '@app/app-health/application-authorization/infrastructure/mock/app-health-mock-application-authorization.data';

describe('AppHealthGetApplicationAuthorizationsResolver', () =>
{
    let resolver: AppHealthGetApplicationAuthorizationsResolver;
    let handler: AppHealthGetApplicationAuthorizationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthGetApplicationAuthorizationsResolver,
                {
                    provide : AppHealthGetApplicationAuthorizationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthGetApplicationAuthorizationsResolver>(AppHealthGetApplicationAuthorizationsResolver);
        handler = module.get<AppHealthGetApplicationAuthorizationsHandler>(AppHealthGetApplicationAuthorizationsHandler);
    });

    test('AppHealthGetApplicationAuthorizationsResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthGetApplicationAuthorizationsResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a appHealthMockApplicationAuthorizationData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationAuthorizationData)));
            expect(await resolver.main()).toBe(appHealthMockApplicationAuthorizationData);
        });
    });
});
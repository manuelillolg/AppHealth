/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteApplicationAuthorizationsResolver } from './app-health-delete-application-authorizations.resolver';
import { AppHealthDeleteApplicationAuthorizationsHandler } from '../handlers/app-health-delete-application-authorizations.handler';

// sources
import { appHealthMockApplicationAuthorizationData } from '@app/app-health/application-authorization/infrastructure/mock/app-health-mock-application-authorization.data';

describe('AppHealthDeleteApplicationAuthorizationsResolver', () =>
{
    let resolver: AppHealthDeleteApplicationAuthorizationsResolver;
    let handler: AppHealthDeleteApplicationAuthorizationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteApplicationAuthorizationsResolver,
                {
                    provide : AppHealthDeleteApplicationAuthorizationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteApplicationAuthorizationsResolver>(AppHealthDeleteApplicationAuthorizationsResolver);
        handler = module.get<AppHealthDeleteApplicationAuthorizationsHandler>(AppHealthDeleteApplicationAuthorizationsHandler);
    });

    test('AppHealthDeleteApplicationAuthorizationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApplicationAuthorizationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an appHealthMockApplicationAuthorizationData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationAuthorizationData)));
            expect(await resolver.main()).toBe(appHealthMockApplicationAuthorizationData);
        });
    });
});
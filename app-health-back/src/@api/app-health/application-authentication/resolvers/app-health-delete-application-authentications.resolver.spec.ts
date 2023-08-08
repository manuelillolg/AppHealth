/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteApplicationAuthenticationsResolver } from './app-health-delete-application-authentications.resolver';
import { AppHealthDeleteApplicationAuthenticationsHandler } from '../handlers/app-health-delete-application-authentications.handler';

// sources
import { appHealthMockApplicationAuthenticationData } from '@app/app-health/application-authentication/infrastructure/mock/app-health-mock-application-authentication.data';

describe('AppHealthDeleteApplicationAuthenticationsResolver', () =>
{
    let resolver: AppHealthDeleteApplicationAuthenticationsResolver;
    let handler: AppHealthDeleteApplicationAuthenticationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteApplicationAuthenticationsResolver,
                {
                    provide : AppHealthDeleteApplicationAuthenticationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteApplicationAuthenticationsResolver>(AppHealthDeleteApplicationAuthenticationsResolver);
        handler = module.get<AppHealthDeleteApplicationAuthenticationsHandler>(AppHealthDeleteApplicationAuthenticationsHandler);
    });

    test('AppHealthDeleteApplicationAuthenticationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApplicationAuthenticationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an appHealthMockApplicationAuthenticationData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationAuthenticationData)));
            expect(await resolver.main()).toBe(appHealthMockApplicationAuthenticationData);
        });
    });
});
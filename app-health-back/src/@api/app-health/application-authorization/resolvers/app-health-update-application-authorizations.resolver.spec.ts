/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateApplicationAuthorizationsResolver } from './app-health-update-application-authorizations.resolver';
import { AppHealthUpdateApplicationAuthorizationsHandler } from '../handlers/app-health-update-application-authorizations.handler';
import { AppHealthUpdateApplicationAuthorizationsInput } from '@api/graphql';

// sources
import { appHealthMockApplicationAuthorizationData } from '@app/app-health/application-authorization/infrastructure/mock/app-health-mock-application-authorization.data';

describe('AppHealthUpdateApplicationAuthorizationsResolver', () =>
{
    let resolver: AppHealthUpdateApplicationAuthorizationsResolver;
    let handler: AppHealthUpdateApplicationAuthorizationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateApplicationAuthorizationsResolver,
                {
                    provide : AppHealthUpdateApplicationAuthorizationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateApplicationAuthorizationsResolver>(AppHealthUpdateApplicationAuthorizationsResolver);
        handler = module.get<AppHealthUpdateApplicationAuthorizationsHandler>(AppHealthUpdateApplicationAuthorizationsHandler);
    });

    test('AppHealthUpdateApplicationAuthorizationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateApplicationAuthorizationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a applicationAuthorizations updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationAuthorizationData[0])));
            expect(await resolver.main(<AppHealthUpdateApplicationAuthorizationsInput>appHealthMockApplicationAuthorizationData[0])).toBe(appHealthMockApplicationAuthorizationData[0]);
        });
    });
});
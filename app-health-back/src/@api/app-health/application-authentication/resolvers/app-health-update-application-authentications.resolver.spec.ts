/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateApplicationAuthenticationsResolver } from './app-health-update-application-authentications.resolver';
import { AppHealthUpdateApplicationAuthenticationsHandler } from '../handlers/app-health-update-application-authentications.handler';
import { AppHealthUpdateApplicationAuthenticationsInput } from '@api/graphql';

// sources
import { appHealthMockApplicationAuthenticationData } from '@app/app-health/application-authentication/infrastructure/mock/app-health-mock-application-authentication.data';

describe('AppHealthUpdateApplicationAuthenticationsResolver', () =>
{
    let resolver: AppHealthUpdateApplicationAuthenticationsResolver;
    let handler: AppHealthUpdateApplicationAuthenticationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateApplicationAuthenticationsResolver,
                {
                    provide : AppHealthUpdateApplicationAuthenticationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateApplicationAuthenticationsResolver>(AppHealthUpdateApplicationAuthenticationsResolver);
        handler = module.get<AppHealthUpdateApplicationAuthenticationsHandler>(AppHealthUpdateApplicationAuthenticationsHandler);
    });

    test('AppHealthUpdateApplicationAuthenticationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateApplicationAuthenticationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a applicationAuthentications updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationAuthenticationData[0])));
            expect(await resolver.main(<AppHealthUpdateApplicationAuthenticationsInput>appHealthMockApplicationAuthenticationData[0])).toBe(appHealthMockApplicationAuthenticationData[0]);
        });
    });
});
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateApplicationAuthorizationResolver } from './app-health-create-application-authorization.resolver';
import { AppHealthCreateApplicationAuthorizationHandler } from '../handlers/app-health-create-application-authorization.handler';
import { AppHealthCreateApplicationAuthorizationInput } from '@api/graphql';

// sources
import { appHealthMockApplicationAuthorizationData } from '@app/app-health/application-authorization/infrastructure/mock/app-health-mock-application-authorization.data';

describe('AppHealthCreateApplicationAuthorizationResolver', () =>
{
    let resolver: AppHealthCreateApplicationAuthorizationResolver;
    let handler: AppHealthCreateApplicationAuthorizationHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthCreateApplicationAuthorizationResolver,
                {
                    provide : AppHealthCreateApplicationAuthorizationHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateApplicationAuthorizationResolver>(AppHealthCreateApplicationAuthorizationResolver);
        handler = module.get<AppHealthCreateApplicationAuthorizationHandler>(AppHealthCreateApplicationAuthorizationHandler);
    });

    test('AppHealthCreateApplicationAuthorizationResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateApplicationAuthorizationResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationAuthorization created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationAuthorizationData[0])));
            expect(await resolver.main(<AppHealthCreateApplicationAuthorizationInput>appHealthMockApplicationAuthorizationData[0])).toBe(appHealthMockApplicationAuthorizationData[0]);
        });
    });
});
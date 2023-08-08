/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateApplicationAuthenticationResolver } from './app-health-create-application-authentication.resolver';
import { AppHealthCreateApplicationAuthenticationHandler } from '../handlers/app-health-create-application-authentication.handler';
import { AppHealthCreateApplicationAuthenticationInput } from '@api/graphql';

// sources
import { appHealthMockApplicationAuthenticationData } from '@app/app-health/application-authentication/infrastructure/mock/app-health-mock-application-authentication.data';

describe('AppHealthCreateApplicationAuthenticationResolver', () =>
{
    let resolver: AppHealthCreateApplicationAuthenticationResolver;
    let handler: AppHealthCreateApplicationAuthenticationHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthCreateApplicationAuthenticationResolver,
                {
                    provide : AppHealthCreateApplicationAuthenticationHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateApplicationAuthenticationResolver>(AppHealthCreateApplicationAuthenticationResolver);
        handler = module.get<AppHealthCreateApplicationAuthenticationHandler>(AppHealthCreateApplicationAuthenticationHandler);
    });

    test('AppHealthCreateApplicationAuthenticationResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateApplicationAuthenticationResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationAuthentication created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationAuthenticationData[0])));
            expect(await resolver.main(<AppHealthCreateApplicationAuthenticationInput>appHealthMockApplicationAuthenticationData[0])).toBe(appHealthMockApplicationAuthenticationData[0]);
        });
    });
});
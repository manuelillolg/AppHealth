/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpsertApplicationAuthenticationResolver } from './app-health-upsert-application-authentication.resolver';
import { AppHealthUpsertApplicationAuthenticationHandler } from '../handlers/app-health-upsert-application-authentication.handler';
import { AppHealthUpdateApplicationAuthenticationByIdInput } from '@api/graphql';

// sources
import { appHealthMockApplicationAuthenticationData } from '@app/app-health/application-authentication/infrastructure/mock/app-health-mock-application-authentication.data';

describe('AppHealthUpsertApplicationAuthenticationResolver', () =>
{
    let resolver: AppHealthUpsertApplicationAuthenticationResolver;
    let handler: AppHealthUpsertApplicationAuthenticationHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpsertApplicationAuthenticationResolver,
                {
                    provide : AppHealthUpsertApplicationAuthenticationHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpsertApplicationAuthenticationResolver>(AppHealthUpsertApplicationAuthenticationResolver);
        handler = module.get<AppHealthUpsertApplicationAuthenticationHandler>(AppHealthUpsertApplicationAuthenticationHandler);
    });

    test('AppHealthUpsertApplicationAuthenticationResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpsertApplicationAuthenticationResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationAuthentication upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationAuthenticationData[0])));
            expect(await resolver.main(<AppHealthUpdateApplicationAuthenticationByIdInput>appHealthMockApplicationAuthenticationData[0])).toBe(appHealthMockApplicationAuthenticationData[0]);
        });
    });
});
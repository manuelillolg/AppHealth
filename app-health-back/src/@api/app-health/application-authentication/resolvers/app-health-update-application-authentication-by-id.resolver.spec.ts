/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateApplicationAuthenticationByIdResolver } from './app-health-update-application-authentication-by-id.resolver';
import { AppHealthUpdateApplicationAuthenticationByIdHandler } from '../handlers/app-health-update-application-authentication-by-id.handler';
import { AppHealthUpdateApplicationAuthenticationByIdInput } from '@api/graphql';

// sources
import { appHealthMockApplicationAuthenticationData } from '@app/app-health/application-authentication/infrastructure/mock/app-health-mock-application-authentication.data';

describe('AppHealthUpdateApplicationAuthenticationByIdResolver', () =>
{
    let resolver: AppHealthUpdateApplicationAuthenticationByIdResolver;
    let handler: AppHealthUpdateApplicationAuthenticationByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateApplicationAuthenticationByIdResolver,
                {
                    provide : AppHealthUpdateApplicationAuthenticationByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateApplicationAuthenticationByIdResolver>(AppHealthUpdateApplicationAuthenticationByIdResolver);
        handler = module.get<AppHealthUpdateApplicationAuthenticationByIdHandler>(AppHealthUpdateApplicationAuthenticationByIdHandler);
    });

    test('AppHealthUpdateApplicationAuthenticationByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateApplicationAuthenticationByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a applicationAuthentication by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationAuthenticationData[0])));
            expect(await resolver.main(<AppHealthUpdateApplicationAuthenticationByIdInput>appHealthMockApplicationAuthenticationData[0])).toBe(appHealthMockApplicationAuthenticationData[0]);
        });
    });
});
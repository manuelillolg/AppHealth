/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthFindApplicationAuthenticationByIdResolver } from './app-health-find-application-authentication-by-id.resolver';
import { AppHealthFindApplicationAuthenticationByIdHandler } from '../handlers/app-health-find-application-authentication-by-id.handler';

// sources
import { appHealthMockApplicationAuthenticationData } from '@app/app-health/application-authentication/infrastructure/mock/app-health-mock-application-authentication.data';

describe('AppHealthFindApplicationAuthenticationByIdResolver', () =>
{
    let resolver: AppHealthFindApplicationAuthenticationByIdResolver;
    let handler: AppHealthFindApplicationAuthenticationByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthFindApplicationAuthenticationByIdResolver,
                {
                    provide : AppHealthFindApplicationAuthenticationByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthFindApplicationAuthenticationByIdResolver>(AppHealthFindApplicationAuthenticationByIdResolver);
        handler = module.get<AppHealthFindApplicationAuthenticationByIdHandler>(AppHealthFindApplicationAuthenticationByIdHandler);
    });

    test('AppHealthFindApplicationAuthenticationByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthFindApplicationAuthenticationByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationAuthentication by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationAuthenticationData[0])));
            expect(await resolver.main(appHealthMockApplicationAuthenticationData[0].id)).toBe(appHealthMockApplicationAuthenticationData[0]);
        });
    });
});
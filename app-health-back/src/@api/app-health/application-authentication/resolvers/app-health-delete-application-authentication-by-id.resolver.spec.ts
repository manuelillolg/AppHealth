/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteApplicationAuthenticationByIdResolver } from './app-health-delete-application-authentication-by-id.resolver';
import { AppHealthDeleteApplicationAuthenticationByIdHandler } from '../handlers/app-health-delete-application-authentication-by-id.handler';

// sources
import { appHealthMockApplicationAuthenticationData } from '@app/app-health/application-authentication/infrastructure/mock/app-health-mock-application-authentication.data';

describe('AppHealthDeleteApplicationAuthenticationByIdResolver', () =>
{
    let resolver: AppHealthDeleteApplicationAuthenticationByIdResolver;
    let handler: AppHealthDeleteApplicationAuthenticationByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteApplicationAuthenticationByIdResolver,
                {
                    provide : AppHealthDeleteApplicationAuthenticationByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteApplicationAuthenticationByIdResolver>(AppHealthDeleteApplicationAuthenticationByIdResolver);
        handler = module.get<AppHealthDeleteApplicationAuthenticationByIdHandler>(AppHealthDeleteApplicationAuthenticationByIdHandler);
    });

    test('AppHealthDeleteApplicationAuthenticationByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApplicationAuthenticationByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationAuthentication deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationAuthenticationData[0])));
            expect(await resolver.main(appHealthMockApplicationAuthenticationData[0].id)).toBe(appHealthMockApplicationAuthenticationData[0]);
        });
    });
});
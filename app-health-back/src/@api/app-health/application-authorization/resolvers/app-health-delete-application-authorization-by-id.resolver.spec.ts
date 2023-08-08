/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteApplicationAuthorizationByIdResolver } from './app-health-delete-application-authorization-by-id.resolver';
import { AppHealthDeleteApplicationAuthorizationByIdHandler } from '../handlers/app-health-delete-application-authorization-by-id.handler';

// sources
import { appHealthMockApplicationAuthorizationData } from '@app/app-health/application-authorization/infrastructure/mock/app-health-mock-application-authorization.data';

describe('AppHealthDeleteApplicationAuthorizationByIdResolver', () =>
{
    let resolver: AppHealthDeleteApplicationAuthorizationByIdResolver;
    let handler: AppHealthDeleteApplicationAuthorizationByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteApplicationAuthorizationByIdResolver,
                {
                    provide : AppHealthDeleteApplicationAuthorizationByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteApplicationAuthorizationByIdResolver>(AppHealthDeleteApplicationAuthorizationByIdResolver);
        handler = module.get<AppHealthDeleteApplicationAuthorizationByIdHandler>(AppHealthDeleteApplicationAuthorizationByIdHandler);
    });

    test('AppHealthDeleteApplicationAuthorizationByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApplicationAuthorizationByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationAuthorization deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationAuthorizationData[0])));
            expect(await resolver.main(appHealthMockApplicationAuthorizationData[0].id)).toBe(appHealthMockApplicationAuthorizationData[0]);
        });
    });
});
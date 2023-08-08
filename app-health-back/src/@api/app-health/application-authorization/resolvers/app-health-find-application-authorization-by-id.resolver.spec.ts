/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthFindApplicationAuthorizationByIdResolver } from './app-health-find-application-authorization-by-id.resolver';
import { AppHealthFindApplicationAuthorizationByIdHandler } from '../handlers/app-health-find-application-authorization-by-id.handler';

// sources
import { appHealthMockApplicationAuthorizationData } from '@app/app-health/application-authorization/infrastructure/mock/app-health-mock-application-authorization.data';

describe('AppHealthFindApplicationAuthorizationByIdResolver', () =>
{
    let resolver: AppHealthFindApplicationAuthorizationByIdResolver;
    let handler: AppHealthFindApplicationAuthorizationByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthFindApplicationAuthorizationByIdResolver,
                {
                    provide : AppHealthFindApplicationAuthorizationByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthFindApplicationAuthorizationByIdResolver>(AppHealthFindApplicationAuthorizationByIdResolver);
        handler = module.get<AppHealthFindApplicationAuthorizationByIdHandler>(AppHealthFindApplicationAuthorizationByIdHandler);
    });

    test('AppHealthFindApplicationAuthorizationByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthFindApplicationAuthorizationByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationAuthorization by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationAuthorizationData[0])));
            expect(await resolver.main(appHealthMockApplicationAuthorizationData[0].id)).toBe(appHealthMockApplicationAuthorizationData[0]);
        });
    });
});
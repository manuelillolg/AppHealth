/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateApplicationAuthorizationByIdResolver } from './app-health-update-application-authorization-by-id.resolver';
import { AppHealthUpdateApplicationAuthorizationByIdHandler } from '../handlers/app-health-update-application-authorization-by-id.handler';
import { AppHealthUpdateApplicationAuthorizationByIdInput } from '@api/graphql';

// sources
import { appHealthMockApplicationAuthorizationData } from '@app/app-health/application-authorization/infrastructure/mock/app-health-mock-application-authorization.data';

describe('AppHealthUpdateApplicationAuthorizationByIdResolver', () =>
{
    let resolver: AppHealthUpdateApplicationAuthorizationByIdResolver;
    let handler: AppHealthUpdateApplicationAuthorizationByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateApplicationAuthorizationByIdResolver,
                {
                    provide : AppHealthUpdateApplicationAuthorizationByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateApplicationAuthorizationByIdResolver>(AppHealthUpdateApplicationAuthorizationByIdResolver);
        handler = module.get<AppHealthUpdateApplicationAuthorizationByIdHandler>(AppHealthUpdateApplicationAuthorizationByIdHandler);
    });

    test('AppHealthUpdateApplicationAuthorizationByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateApplicationAuthorizationByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a applicationAuthorization by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationAuthorizationData[0])));
            expect(await resolver.main(<AppHealthUpdateApplicationAuthorizationByIdInput>appHealthMockApplicationAuthorizationData[0])).toBe(appHealthMockApplicationAuthorizationData[0]);
        });
    });
});
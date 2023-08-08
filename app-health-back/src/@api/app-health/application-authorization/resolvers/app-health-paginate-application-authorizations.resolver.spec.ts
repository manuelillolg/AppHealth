/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthPaginateApplicationAuthorizationsResolver } from './app-health-paginate-application-authorizations.resolver';
import { AppHealthPaginateApplicationAuthorizationsHandler } from '../handlers/app-health-paginate-application-authorizations.handler';

// sources
import { appHealthMockApplicationAuthorizationData } from '@app/app-health/application-authorization/infrastructure/mock/app-health-mock-application-authorization.data';

describe('AppHealthPaginateApplicationAuthorizationsResolver', () =>
{
    let resolver: AppHealthPaginateApplicationAuthorizationsResolver;
    let handler: AppHealthPaginateApplicationAuthorizationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthPaginateApplicationAuthorizationsResolver,
                {
                    provide : AppHealthPaginateApplicationAuthorizationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthPaginateApplicationAuthorizationsResolver>(AppHealthPaginateApplicationAuthorizationsResolver);
        handler = module.get<AppHealthPaginateApplicationAuthorizationsHandler>(AppHealthPaginateApplicationAuthorizationsHandler);
    });

    test('AppHealthPaginateApplicationAuthorizationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthPaginateApplicationAuthorizationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a appHealthMockApplicationAuthorizationData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : appHealthMockApplicationAuthorizationData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : appHealthMockApplicationAuthorizationData,
            });
        });
    });
});
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthPaginateApplicationDatabasesResolver } from './app-health-paginate-application-databases.resolver';
import { AppHealthPaginateApplicationDatabasesHandler } from '../handlers/app-health-paginate-application-databases.handler';

// sources
import { appHealthMockApplicationDatabaseData } from '@app/app-health/application-database/infrastructure/mock/app-health-mock-application-database.data';

describe('AppHealthPaginateApplicationDatabasesResolver', () =>
{
    let resolver: AppHealthPaginateApplicationDatabasesResolver;
    let handler: AppHealthPaginateApplicationDatabasesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthPaginateApplicationDatabasesResolver,
                {
                    provide : AppHealthPaginateApplicationDatabasesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthPaginateApplicationDatabasesResolver>(AppHealthPaginateApplicationDatabasesResolver);
        handler = module.get<AppHealthPaginateApplicationDatabasesHandler>(AppHealthPaginateApplicationDatabasesHandler);
    });

    test('AppHealthPaginateApplicationDatabasesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthPaginateApplicationDatabasesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a appHealthMockApplicationDatabaseData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : appHealthMockApplicationDatabaseData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : appHealthMockApplicationDatabaseData,
            });
        });
    });
});
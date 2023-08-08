/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthPaginateDatabasesResolver } from './app-health-paginate-databases.resolver';
import { AppHealthPaginateDatabasesHandler } from '../handlers/app-health-paginate-databases.handler';

// sources
import { appHealthMockDatabaseData } from '@app/app-health/database/infrastructure/mock/app-health-mock-database.data';

describe('AppHealthPaginateDatabasesResolver', () =>
{
    let resolver: AppHealthPaginateDatabasesResolver;
    let handler: AppHealthPaginateDatabasesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthPaginateDatabasesResolver,
                {
                    provide : AppHealthPaginateDatabasesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthPaginateDatabasesResolver>(AppHealthPaginateDatabasesResolver);
        handler = module.get<AppHealthPaginateDatabasesHandler>(AppHealthPaginateDatabasesHandler);
    });

    test('AppHealthPaginateDatabasesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthPaginateDatabasesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a appHealthMockDatabaseData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : appHealthMockDatabaseData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : appHealthMockDatabaseData,
            });
        });
    });
});
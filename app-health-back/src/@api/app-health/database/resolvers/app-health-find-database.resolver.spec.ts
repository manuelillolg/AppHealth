/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthFindDatabaseResolver } from './app-health-find-database.resolver';
import { AppHealthFindDatabaseHandler } from '../handlers/app-health-find-database.handler';

// sources
import { appHealthMockDatabaseData } from '@app/app-health/database/infrastructure/mock/app-health-mock-database.data';

describe('AppHealthFindDatabaseResolver', () =>
{
    let resolver: AppHealthFindDatabaseResolver;
    let handler: AppHealthFindDatabaseHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthFindDatabaseResolver,
                {
                    provide : AppHealthFindDatabaseHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthFindDatabaseResolver>(AppHealthFindDatabaseResolver);
        handler = module.get<AppHealthFindDatabaseHandler>(AppHealthFindDatabaseHandler);
    });

    test('AppHealthFindDatabaseResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthFindDatabaseResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a database', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockDatabaseData[0])));
            expect(await resolver.main()).toBe(appHealthMockDatabaseData[0]);
        });
    });
});
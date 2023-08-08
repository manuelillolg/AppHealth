/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpsertDatabaseResolver } from './app-health-upsert-database.resolver';
import { AppHealthUpsertDatabaseHandler } from '../handlers/app-health-upsert-database.handler';
import { AppHealthUpdateDatabaseByIdInput } from '@api/graphql';

// sources
import { appHealthMockDatabaseData } from '@app/app-health/database/infrastructure/mock/app-health-mock-database.data';

describe('AppHealthUpsertDatabaseResolver', () =>
{
    let resolver: AppHealthUpsertDatabaseResolver;
    let handler: AppHealthUpsertDatabaseHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpsertDatabaseResolver,
                {
                    provide : AppHealthUpsertDatabaseHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpsertDatabaseResolver>(AppHealthUpsertDatabaseResolver);
        handler = module.get<AppHealthUpsertDatabaseHandler>(AppHealthUpsertDatabaseHandler);
    });

    test('AppHealthUpsertDatabaseResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpsertDatabaseResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an database upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockDatabaseData[0])));
            expect(await resolver.main(<AppHealthUpdateDatabaseByIdInput>appHealthMockDatabaseData[0])).toBe(appHealthMockDatabaseData[0]);
        });
    });
});
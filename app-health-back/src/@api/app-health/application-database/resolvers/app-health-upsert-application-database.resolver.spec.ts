/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpsertApplicationDatabaseResolver } from './app-health-upsert-application-database.resolver';
import { AppHealthUpsertApplicationDatabaseHandler } from '../handlers/app-health-upsert-application-database.handler';
import { AppHealthUpdateApplicationDatabaseByIdInput } from '@api/graphql';

// sources
import { appHealthMockApplicationDatabaseData } from '@app/app-health/application-database/infrastructure/mock/app-health-mock-application-database.data';

describe('AppHealthUpsertApplicationDatabaseResolver', () =>
{
    let resolver: AppHealthUpsertApplicationDatabaseResolver;
    let handler: AppHealthUpsertApplicationDatabaseHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpsertApplicationDatabaseResolver,
                {
                    provide : AppHealthUpsertApplicationDatabaseHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpsertApplicationDatabaseResolver>(AppHealthUpsertApplicationDatabaseResolver);
        handler = module.get<AppHealthUpsertApplicationDatabaseHandler>(AppHealthUpsertApplicationDatabaseHandler);
    });

    test('AppHealthUpsertApplicationDatabaseResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpsertApplicationDatabaseResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationDatabase upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationDatabaseData[0])));
            expect(await resolver.main(<AppHealthUpdateApplicationDatabaseByIdInput>appHealthMockApplicationDatabaseData[0])).toBe(appHealthMockApplicationDatabaseData[0]);
        });
    });
});
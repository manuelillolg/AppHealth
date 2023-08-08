/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateApplicationDatabasesResolver } from './app-health-update-application-databases.resolver';
import { AppHealthUpdateApplicationDatabasesHandler } from '../handlers/app-health-update-application-databases.handler';
import { AppHealthUpdateApplicationDatabasesInput } from '@api/graphql';

// sources
import { appHealthMockApplicationDatabaseData } from '@app/app-health/application-database/infrastructure/mock/app-health-mock-application-database.data';

describe('AppHealthUpdateApplicationDatabasesResolver', () =>
{
    let resolver: AppHealthUpdateApplicationDatabasesResolver;
    let handler: AppHealthUpdateApplicationDatabasesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateApplicationDatabasesResolver,
                {
                    provide : AppHealthUpdateApplicationDatabasesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateApplicationDatabasesResolver>(AppHealthUpdateApplicationDatabasesResolver);
        handler = module.get<AppHealthUpdateApplicationDatabasesHandler>(AppHealthUpdateApplicationDatabasesHandler);
    });

    test('AppHealthUpdateApplicationDatabasesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateApplicationDatabasesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a applicationDatabases updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationDatabaseData[0])));
            expect(await resolver.main(<AppHealthUpdateApplicationDatabasesInput>appHealthMockApplicationDatabaseData[0])).toBe(appHealthMockApplicationDatabaseData[0]);
        });
    });
});
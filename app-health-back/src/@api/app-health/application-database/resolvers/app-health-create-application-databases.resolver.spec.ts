import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateApplicationDatabasesResolver } from './app-health-create-application-databases.resolver';
import { AppHealthCreateApplicationDatabasesHandler } from '../handlers/app-health-create-application-databases.handler';
import { AppHealthCreateApplicationDatabaseInput } from '@api/graphql';

// sources
import { appHealthMockApplicationDatabaseData } from '@app/app-health/application-database/infrastructure/mock/app-health-mock-application-database.data';

describe('AppHealthCreateApplicationDatabasesResolver', () =>
{
    let resolver: AppHealthCreateApplicationDatabasesResolver;
    let handler: AppHealthCreateApplicationDatabasesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateApplicationDatabasesResolver,
                {
                    provide : AppHealthCreateApplicationDatabasesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateApplicationDatabasesResolver>(AppHealthCreateApplicationDatabasesResolver);
        handler = module.get<AppHealthCreateApplicationDatabasesHandler>(AppHealthCreateApplicationDatabasesHandler);
    });

    test('AppHealthCreateApplicationDatabasesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateApplicationDatabasesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationDatabases created', async () =>
        {
            expect(await resolver.main(<AppHealthCreateApplicationDatabaseInput[]>appHealthMockApplicationDatabaseData)).toBe(undefined);
        });
    });
});
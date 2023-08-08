import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateDatabasesResolver } from './app-health-create-databases.resolver';
import { AppHealthCreateDatabasesHandler } from '../handlers/app-health-create-databases.handler';
import { AppHealthCreateDatabaseInput } from '@api/graphql';

// sources
import { appHealthMockDatabaseData } from '@app/app-health/database/infrastructure/mock/app-health-mock-database.data';

describe('AppHealthCreateDatabasesResolver', () =>
{
    let resolver: AppHealthCreateDatabasesResolver;
    let handler: AppHealthCreateDatabasesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateDatabasesResolver,
                {
                    provide : AppHealthCreateDatabasesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateDatabasesResolver>(AppHealthCreateDatabasesResolver);
        handler = module.get<AppHealthCreateDatabasesHandler>(AppHealthCreateDatabasesHandler);
    });

    test('AppHealthCreateDatabasesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateDatabasesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an databases created', async () =>
        {
            expect(await resolver.main(<AppHealthCreateDatabaseInput[]>appHealthMockDatabaseData)).toBe(undefined);
        });
    });
});
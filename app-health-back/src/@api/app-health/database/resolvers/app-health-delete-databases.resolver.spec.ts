/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteDatabasesResolver } from './app-health-delete-databases.resolver';
import { AppHealthDeleteDatabasesHandler } from '../handlers/app-health-delete-databases.handler';

// sources
import { appHealthMockDatabaseData } from '@app/app-health/database/infrastructure/mock/app-health-mock-database.data';

describe('AppHealthDeleteDatabasesResolver', () =>
{
    let resolver: AppHealthDeleteDatabasesResolver;
    let handler: AppHealthDeleteDatabasesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteDatabasesResolver,
                {
                    provide : AppHealthDeleteDatabasesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteDatabasesResolver>(AppHealthDeleteDatabasesResolver);
        handler = module.get<AppHealthDeleteDatabasesHandler>(AppHealthDeleteDatabasesHandler);
    });

    test('AppHealthDeleteDatabasesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteDatabasesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an appHealthMockDatabaseData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockDatabaseData)));
            expect(await resolver.main()).toBe(appHealthMockDatabaseData);
        });
    });
});
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthGetDatabasesResolver } from './app-health-get-databases.resolver';
import { AppHealthGetDatabasesHandler } from '../handlers/app-health-get-databases.handler';

// sources
import { appHealthMockDatabaseData } from '@app/app-health/database/infrastructure/mock/app-health-mock-database.data';

describe('AppHealthGetDatabasesResolver', () =>
{
    let resolver: AppHealthGetDatabasesResolver;
    let handler: AppHealthGetDatabasesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthGetDatabasesResolver,
                {
                    provide : AppHealthGetDatabasesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthGetDatabasesResolver>(AppHealthGetDatabasesResolver);
        handler = module.get<AppHealthGetDatabasesHandler>(AppHealthGetDatabasesHandler);
    });

    test('AppHealthGetDatabasesResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthGetDatabasesResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a appHealthMockDatabaseData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockDatabaseData)));
            expect(await resolver.main()).toBe(appHealthMockDatabaseData);
        });
    });
});
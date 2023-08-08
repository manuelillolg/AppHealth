/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateDatabasesResolver } from './app-health-update-databases.resolver';
import { AppHealthUpdateDatabasesHandler } from '../handlers/app-health-update-databases.handler';
import { AppHealthUpdateDatabasesInput } from '@api/graphql';

// sources
import { appHealthMockDatabaseData } from '@app/app-health/database/infrastructure/mock/app-health-mock-database.data';

describe('AppHealthUpdateDatabasesResolver', () =>
{
    let resolver: AppHealthUpdateDatabasesResolver;
    let handler: AppHealthUpdateDatabasesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateDatabasesResolver,
                {
                    provide : AppHealthUpdateDatabasesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateDatabasesResolver>(AppHealthUpdateDatabasesResolver);
        handler = module.get<AppHealthUpdateDatabasesHandler>(AppHealthUpdateDatabasesHandler);
    });

    test('AppHealthUpdateDatabasesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateDatabasesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a databases updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockDatabaseData[0])));
            expect(await resolver.main(<AppHealthUpdateDatabasesInput>appHealthMockDatabaseData[0])).toBe(appHealthMockDatabaseData[0]);
        });
    });
});
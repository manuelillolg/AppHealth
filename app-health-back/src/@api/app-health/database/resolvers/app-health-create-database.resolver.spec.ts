/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateDatabaseResolver } from './app-health-create-database.resolver';
import { AppHealthCreateDatabaseHandler } from '../handlers/app-health-create-database.handler';
import { AppHealthCreateDatabaseInput } from '@api/graphql';

// sources
import { appHealthMockDatabaseData } from '@app/app-health/database/infrastructure/mock/app-health-mock-database.data';

describe('AppHealthCreateDatabaseResolver', () =>
{
    let resolver: AppHealthCreateDatabaseResolver;
    let handler: AppHealthCreateDatabaseHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthCreateDatabaseResolver,
                {
                    provide : AppHealthCreateDatabaseHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateDatabaseResolver>(AppHealthCreateDatabaseResolver);
        handler = module.get<AppHealthCreateDatabaseHandler>(AppHealthCreateDatabaseHandler);
    });

    test('AppHealthCreateDatabaseResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateDatabaseResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an database created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockDatabaseData[0])));
            expect(await resolver.main(<AppHealthCreateDatabaseInput>appHealthMockDatabaseData[0])).toBe(appHealthMockDatabaseData[0]);
        });
    });
});
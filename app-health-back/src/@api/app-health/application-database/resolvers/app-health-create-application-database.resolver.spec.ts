/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateApplicationDatabaseResolver } from './app-health-create-application-database.resolver';
import { AppHealthCreateApplicationDatabaseHandler } from '../handlers/app-health-create-application-database.handler';
import { AppHealthCreateApplicationDatabaseInput } from '@api/graphql';

// sources
import { appHealthMockApplicationDatabaseData } from '@app/app-health/application-database/infrastructure/mock/app-health-mock-application-database.data';

describe('AppHealthCreateApplicationDatabaseResolver', () =>
{
    let resolver: AppHealthCreateApplicationDatabaseResolver;
    let handler: AppHealthCreateApplicationDatabaseHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthCreateApplicationDatabaseResolver,
                {
                    provide : AppHealthCreateApplicationDatabaseHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateApplicationDatabaseResolver>(AppHealthCreateApplicationDatabaseResolver);
        handler = module.get<AppHealthCreateApplicationDatabaseHandler>(AppHealthCreateApplicationDatabaseHandler);
    });

    test('AppHealthCreateApplicationDatabaseResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateApplicationDatabaseResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationDatabase created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationDatabaseData[0])));
            expect(await resolver.main(<AppHealthCreateApplicationDatabaseInput>appHealthMockApplicationDatabaseData[0])).toBe(appHealthMockApplicationDatabaseData[0]);
        });
    });
});
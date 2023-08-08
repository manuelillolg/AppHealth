/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthFindApplicationDatabaseResolver } from './app-health-find-application-database.resolver';
import { AppHealthFindApplicationDatabaseHandler } from '../handlers/app-health-find-application-database.handler';

// sources
import { appHealthMockApplicationDatabaseData } from '@app/app-health/application-database/infrastructure/mock/app-health-mock-application-database.data';

describe('AppHealthFindApplicationDatabaseResolver', () =>
{
    let resolver: AppHealthFindApplicationDatabaseResolver;
    let handler: AppHealthFindApplicationDatabaseHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthFindApplicationDatabaseResolver,
                {
                    provide : AppHealthFindApplicationDatabaseHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthFindApplicationDatabaseResolver>(AppHealthFindApplicationDatabaseResolver);
        handler = module.get<AppHealthFindApplicationDatabaseHandler>(AppHealthFindApplicationDatabaseHandler);
    });

    test('AppHealthFindApplicationDatabaseResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthFindApplicationDatabaseResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a applicationDatabase', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationDatabaseData[0])));
            expect(await resolver.main()).toBe(appHealthMockApplicationDatabaseData[0]);
        });
    });
});
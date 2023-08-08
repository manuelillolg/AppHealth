/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthFindApplicationDatabaseByIdResolver } from './app-health-find-application-database-by-id.resolver';
import { AppHealthFindApplicationDatabaseByIdHandler } from '../handlers/app-health-find-application-database-by-id.handler';

// sources
import { appHealthMockApplicationDatabaseData } from '@app/app-health/application-database/infrastructure/mock/app-health-mock-application-database.data';

describe('AppHealthFindApplicationDatabaseByIdResolver', () =>
{
    let resolver: AppHealthFindApplicationDatabaseByIdResolver;
    let handler: AppHealthFindApplicationDatabaseByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthFindApplicationDatabaseByIdResolver,
                {
                    provide : AppHealthFindApplicationDatabaseByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthFindApplicationDatabaseByIdResolver>(AppHealthFindApplicationDatabaseByIdResolver);
        handler = module.get<AppHealthFindApplicationDatabaseByIdHandler>(AppHealthFindApplicationDatabaseByIdHandler);
    });

    test('AppHealthFindApplicationDatabaseByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthFindApplicationDatabaseByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationDatabase by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationDatabaseData[0])));
            expect(await resolver.main(appHealthMockApplicationDatabaseData[0].id)).toBe(appHealthMockApplicationDatabaseData[0]);
        });
    });
});
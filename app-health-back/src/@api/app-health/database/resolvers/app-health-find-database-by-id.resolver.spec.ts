/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthFindDatabaseByIdResolver } from './app-health-find-database-by-id.resolver';
import { AppHealthFindDatabaseByIdHandler } from '../handlers/app-health-find-database-by-id.handler';

// sources
import { appHealthMockDatabaseData } from '@app/app-health/database/infrastructure/mock/app-health-mock-database.data';

describe('AppHealthFindDatabaseByIdResolver', () =>
{
    let resolver: AppHealthFindDatabaseByIdResolver;
    let handler: AppHealthFindDatabaseByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthFindDatabaseByIdResolver,
                {
                    provide : AppHealthFindDatabaseByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthFindDatabaseByIdResolver>(AppHealthFindDatabaseByIdResolver);
        handler = module.get<AppHealthFindDatabaseByIdHandler>(AppHealthFindDatabaseByIdHandler);
    });

    test('AppHealthFindDatabaseByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthFindDatabaseByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an database by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockDatabaseData[0])));
            expect(await resolver.main(appHealthMockDatabaseData[0].id)).toBe(appHealthMockDatabaseData[0]);
        });
    });
});
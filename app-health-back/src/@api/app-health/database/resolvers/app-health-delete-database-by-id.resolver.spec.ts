/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteDatabaseByIdResolver } from './app-health-delete-database-by-id.resolver';
import { AppHealthDeleteDatabaseByIdHandler } from '../handlers/app-health-delete-database-by-id.handler';

// sources
import { appHealthMockDatabaseData } from '@app/app-health/database/infrastructure/mock/app-health-mock-database.data';

describe('AppHealthDeleteDatabaseByIdResolver', () =>
{
    let resolver: AppHealthDeleteDatabaseByIdResolver;
    let handler: AppHealthDeleteDatabaseByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteDatabaseByIdResolver,
                {
                    provide : AppHealthDeleteDatabaseByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteDatabaseByIdResolver>(AppHealthDeleteDatabaseByIdResolver);
        handler = module.get<AppHealthDeleteDatabaseByIdHandler>(AppHealthDeleteDatabaseByIdHandler);
    });

    test('AppHealthDeleteDatabaseByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteDatabaseByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an database deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockDatabaseData[0])));
            expect(await resolver.main(appHealthMockDatabaseData[0].id)).toBe(appHealthMockDatabaseData[0]);
        });
    });
});
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteApplicationDatabaseByIdResolver } from './app-health-delete-application-database-by-id.resolver';
import { AppHealthDeleteApplicationDatabaseByIdHandler } from '../handlers/app-health-delete-application-database-by-id.handler';

// sources
import { appHealthMockApplicationDatabaseData } from '@app/app-health/application-database/infrastructure/mock/app-health-mock-application-database.data';

describe('AppHealthDeleteApplicationDatabaseByIdResolver', () =>
{
    let resolver: AppHealthDeleteApplicationDatabaseByIdResolver;
    let handler: AppHealthDeleteApplicationDatabaseByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteApplicationDatabaseByIdResolver,
                {
                    provide : AppHealthDeleteApplicationDatabaseByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteApplicationDatabaseByIdResolver>(AppHealthDeleteApplicationDatabaseByIdResolver);
        handler = module.get<AppHealthDeleteApplicationDatabaseByIdHandler>(AppHealthDeleteApplicationDatabaseByIdHandler);
    });

    test('AppHealthDeleteApplicationDatabaseByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApplicationDatabaseByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationDatabase deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationDatabaseData[0])));
            expect(await resolver.main(appHealthMockApplicationDatabaseData[0].id)).toBe(appHealthMockApplicationDatabaseData[0]);
        });
    });
});
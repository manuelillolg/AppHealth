/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthPaginateLanguagesResolver } from './app-health-paginate-languages.resolver';
import { AppHealthPaginateLanguagesHandler } from '../handlers/app-health-paginate-languages.handler';

// sources
import { appHealthMockLanguageData } from '@app/app-health/language/infrastructure/mock/app-health-mock-language.data';

describe('AppHealthPaginateLanguagesResolver', () =>
{
    let resolver: AppHealthPaginateLanguagesResolver;
    let handler: AppHealthPaginateLanguagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthPaginateLanguagesResolver,
                {
                    provide : AppHealthPaginateLanguagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthPaginateLanguagesResolver>(AppHealthPaginateLanguagesResolver);
        handler = module.get<AppHealthPaginateLanguagesHandler>(AppHealthPaginateLanguagesHandler);
    });

    test('AppHealthPaginateLanguagesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthPaginateLanguagesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a appHealthMockLanguageData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : appHealthMockLanguageData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : appHealthMockLanguageData,
            });
        });
    });
});
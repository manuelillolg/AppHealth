/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthPaginateApplicationLanguagesResolver } from './app-health-paginate-application-languages.resolver';
import { AppHealthPaginateApplicationLanguagesHandler } from '../handlers/app-health-paginate-application-languages.handler';

// sources
import { appHealthMockApplicationLanguageData } from '@app/app-health/application-language/infrastructure/mock/app-health-mock-application-language.data';

describe('AppHealthPaginateApplicationLanguagesResolver', () =>
{
    let resolver: AppHealthPaginateApplicationLanguagesResolver;
    let handler: AppHealthPaginateApplicationLanguagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthPaginateApplicationLanguagesResolver,
                {
                    provide : AppHealthPaginateApplicationLanguagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthPaginateApplicationLanguagesResolver>(AppHealthPaginateApplicationLanguagesResolver);
        handler = module.get<AppHealthPaginateApplicationLanguagesHandler>(AppHealthPaginateApplicationLanguagesHandler);
    });

    test('AppHealthPaginateApplicationLanguagesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthPaginateApplicationLanguagesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a appHealthMockApplicationLanguageData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : appHealthMockApplicationLanguageData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : appHealthMockApplicationLanguageData,
            });
        });
    });
});
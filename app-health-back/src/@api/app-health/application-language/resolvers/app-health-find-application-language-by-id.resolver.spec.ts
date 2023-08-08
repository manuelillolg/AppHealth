/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthFindApplicationLanguageByIdResolver } from './app-health-find-application-language-by-id.resolver';
import { AppHealthFindApplicationLanguageByIdHandler } from '../handlers/app-health-find-application-language-by-id.handler';

// sources
import { appHealthMockApplicationLanguageData } from '@app/app-health/application-language/infrastructure/mock/app-health-mock-application-language.data';

describe('AppHealthFindApplicationLanguageByIdResolver', () =>
{
    let resolver: AppHealthFindApplicationLanguageByIdResolver;
    let handler: AppHealthFindApplicationLanguageByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthFindApplicationLanguageByIdResolver,
                {
                    provide : AppHealthFindApplicationLanguageByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthFindApplicationLanguageByIdResolver>(AppHealthFindApplicationLanguageByIdResolver);
        handler = module.get<AppHealthFindApplicationLanguageByIdHandler>(AppHealthFindApplicationLanguageByIdHandler);
    });

    test('AppHealthFindApplicationLanguageByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthFindApplicationLanguageByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationLanguage by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationLanguageData[0])));
            expect(await resolver.main(appHealthMockApplicationLanguageData[0].id)).toBe(appHealthMockApplicationLanguageData[0]);
        });
    });
});
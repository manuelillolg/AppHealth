/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthFindApplicationLanguageResolver } from './app-health-find-application-language.resolver';
import { AppHealthFindApplicationLanguageHandler } from '../handlers/app-health-find-application-language.handler';

// sources
import { appHealthMockApplicationLanguageData } from '@app/app-health/application-language/infrastructure/mock/app-health-mock-application-language.data';

describe('AppHealthFindApplicationLanguageResolver', () =>
{
    let resolver: AppHealthFindApplicationLanguageResolver;
    let handler: AppHealthFindApplicationLanguageHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthFindApplicationLanguageResolver,
                {
                    provide : AppHealthFindApplicationLanguageHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthFindApplicationLanguageResolver>(AppHealthFindApplicationLanguageResolver);
        handler = module.get<AppHealthFindApplicationLanguageHandler>(AppHealthFindApplicationLanguageHandler);
    });

    test('AppHealthFindApplicationLanguageResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthFindApplicationLanguageResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a applicationLanguage', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationLanguageData[0])));
            expect(await resolver.main()).toBe(appHealthMockApplicationLanguageData[0]);
        });
    });
});
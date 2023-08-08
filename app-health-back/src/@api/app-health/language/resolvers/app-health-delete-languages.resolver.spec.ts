/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteLanguagesResolver } from './app-health-delete-languages.resolver';
import { AppHealthDeleteLanguagesHandler } from '../handlers/app-health-delete-languages.handler';

// sources
import { appHealthMockLanguageData } from '@app/app-health/language/infrastructure/mock/app-health-mock-language.data';

describe('AppHealthDeleteLanguagesResolver', () =>
{
    let resolver: AppHealthDeleteLanguagesResolver;
    let handler: AppHealthDeleteLanguagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteLanguagesResolver,
                {
                    provide : AppHealthDeleteLanguagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteLanguagesResolver>(AppHealthDeleteLanguagesResolver);
        handler = module.get<AppHealthDeleteLanguagesHandler>(AppHealthDeleteLanguagesHandler);
    });

    test('AppHealthDeleteLanguagesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteLanguagesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an appHealthMockLanguageData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockLanguageData)));
            expect(await resolver.main()).toBe(appHealthMockLanguageData);
        });
    });
});
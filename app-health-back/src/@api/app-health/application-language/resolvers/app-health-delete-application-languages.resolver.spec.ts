/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteApplicationLanguagesResolver } from './app-health-delete-application-languages.resolver';
import { AppHealthDeleteApplicationLanguagesHandler } from '../handlers/app-health-delete-application-languages.handler';

// sources
import { appHealthMockApplicationLanguageData } from '@app/app-health/application-language/infrastructure/mock/app-health-mock-application-language.data';

describe('AppHealthDeleteApplicationLanguagesResolver', () =>
{
    let resolver: AppHealthDeleteApplicationLanguagesResolver;
    let handler: AppHealthDeleteApplicationLanguagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteApplicationLanguagesResolver,
                {
                    provide : AppHealthDeleteApplicationLanguagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteApplicationLanguagesResolver>(AppHealthDeleteApplicationLanguagesResolver);
        handler = module.get<AppHealthDeleteApplicationLanguagesHandler>(AppHealthDeleteApplicationLanguagesHandler);
    });

    test('AppHealthDeleteApplicationLanguagesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApplicationLanguagesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an appHealthMockApplicationLanguageData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationLanguageData)));
            expect(await resolver.main()).toBe(appHealthMockApplicationLanguageData);
        });
    });
});
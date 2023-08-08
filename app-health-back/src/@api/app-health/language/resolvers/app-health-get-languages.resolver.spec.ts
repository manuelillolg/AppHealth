/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthGetLanguagesResolver } from './app-health-get-languages.resolver';
import { AppHealthGetLanguagesHandler } from '../handlers/app-health-get-languages.handler';

// sources
import { appHealthMockLanguageData } from '@app/app-health/language/infrastructure/mock/app-health-mock-language.data';

describe('AppHealthGetLanguagesResolver', () =>
{
    let resolver: AppHealthGetLanguagesResolver;
    let handler: AppHealthGetLanguagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthGetLanguagesResolver,
                {
                    provide : AppHealthGetLanguagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthGetLanguagesResolver>(AppHealthGetLanguagesResolver);
        handler = module.get<AppHealthGetLanguagesHandler>(AppHealthGetLanguagesHandler);
    });

    test('AppHealthGetLanguagesResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthGetLanguagesResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a appHealthMockLanguageData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockLanguageData)));
            expect(await resolver.main()).toBe(appHealthMockLanguageData);
        });
    });
});
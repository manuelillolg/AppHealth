/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateApplicationLanguagesResolver } from './app-health-update-application-languages.resolver';
import { AppHealthUpdateApplicationLanguagesHandler } from '../handlers/app-health-update-application-languages.handler';
import { AppHealthUpdateApplicationLanguagesInput } from '@api/graphql';

// sources
import { appHealthMockApplicationLanguageData } from '@app/app-health/application-language/infrastructure/mock/app-health-mock-application-language.data';

describe('AppHealthUpdateApplicationLanguagesResolver', () =>
{
    let resolver: AppHealthUpdateApplicationLanguagesResolver;
    let handler: AppHealthUpdateApplicationLanguagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateApplicationLanguagesResolver,
                {
                    provide : AppHealthUpdateApplicationLanguagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateApplicationLanguagesResolver>(AppHealthUpdateApplicationLanguagesResolver);
        handler = module.get<AppHealthUpdateApplicationLanguagesHandler>(AppHealthUpdateApplicationLanguagesHandler);
    });

    test('AppHealthUpdateApplicationLanguagesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateApplicationLanguagesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a applicationLanguages updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationLanguageData[0])));
            expect(await resolver.main(<AppHealthUpdateApplicationLanguagesInput>appHealthMockApplicationLanguageData[0])).toBe(appHealthMockApplicationLanguageData[0]);
        });
    });
});
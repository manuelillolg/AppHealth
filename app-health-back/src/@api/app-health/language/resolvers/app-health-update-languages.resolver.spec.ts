/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateLanguagesResolver } from './app-health-update-languages.resolver';
import { AppHealthUpdateLanguagesHandler } from '../handlers/app-health-update-languages.handler';
import { AppHealthUpdateLanguagesInput } from '@api/graphql';

// sources
import { appHealthMockLanguageData } from '@app/app-health/language/infrastructure/mock/app-health-mock-language.data';

describe('AppHealthUpdateLanguagesResolver', () =>
{
    let resolver: AppHealthUpdateLanguagesResolver;
    let handler: AppHealthUpdateLanguagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateLanguagesResolver,
                {
                    provide : AppHealthUpdateLanguagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateLanguagesResolver>(AppHealthUpdateLanguagesResolver);
        handler = module.get<AppHealthUpdateLanguagesHandler>(AppHealthUpdateLanguagesHandler);
    });

    test('AppHealthUpdateLanguagesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateLanguagesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a languages updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockLanguageData[0])));
            expect(await resolver.main(<AppHealthUpdateLanguagesInput>appHealthMockLanguageData[0])).toBe(appHealthMockLanguageData[0]);
        });
    });
});
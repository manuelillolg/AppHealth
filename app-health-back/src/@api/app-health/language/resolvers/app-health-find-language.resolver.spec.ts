/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthFindLanguageResolver } from './app-health-find-language.resolver';
import { AppHealthFindLanguageHandler } from '../handlers/app-health-find-language.handler';

// sources
import { appHealthMockLanguageData } from '@app/app-health/language/infrastructure/mock/app-health-mock-language.data';

describe('AppHealthFindLanguageResolver', () =>
{
    let resolver: AppHealthFindLanguageResolver;
    let handler: AppHealthFindLanguageHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthFindLanguageResolver,
                {
                    provide : AppHealthFindLanguageHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthFindLanguageResolver>(AppHealthFindLanguageResolver);
        handler = module.get<AppHealthFindLanguageHandler>(AppHealthFindLanguageHandler);
    });

    test('AppHealthFindLanguageResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthFindLanguageResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a language', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockLanguageData[0])));
            expect(await resolver.main()).toBe(appHealthMockLanguageData[0]);
        });
    });
});
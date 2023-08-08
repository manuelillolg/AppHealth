/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteLanguageByIdResolver } from './app-health-delete-language-by-id.resolver';
import { AppHealthDeleteLanguageByIdHandler } from '../handlers/app-health-delete-language-by-id.handler';

// sources
import { appHealthMockLanguageData } from '@app/app-health/language/infrastructure/mock/app-health-mock-language.data';

describe('AppHealthDeleteLanguageByIdResolver', () =>
{
    let resolver: AppHealthDeleteLanguageByIdResolver;
    let handler: AppHealthDeleteLanguageByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteLanguageByIdResolver,
                {
                    provide : AppHealthDeleteLanguageByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteLanguageByIdResolver>(AppHealthDeleteLanguageByIdResolver);
        handler = module.get<AppHealthDeleteLanguageByIdHandler>(AppHealthDeleteLanguageByIdHandler);
    });

    test('AppHealthDeleteLanguageByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteLanguageByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an language deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockLanguageData[0])));
            expect(await resolver.main(appHealthMockLanguageData[0].id)).toBe(appHealthMockLanguageData[0]);
        });
    });
});
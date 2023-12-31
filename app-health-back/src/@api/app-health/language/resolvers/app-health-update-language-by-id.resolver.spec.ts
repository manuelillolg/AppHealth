/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateLanguageByIdResolver } from './app-health-update-language-by-id.resolver';
import { AppHealthUpdateLanguageByIdHandler } from '../handlers/app-health-update-language-by-id.handler';
import { AppHealthUpdateLanguageByIdInput } from '@api/graphql';

// sources
import { appHealthMockLanguageData } from '@app/app-health/language/infrastructure/mock/app-health-mock-language.data';

describe('AppHealthUpdateLanguageByIdResolver', () =>
{
    let resolver: AppHealthUpdateLanguageByIdResolver;
    let handler: AppHealthUpdateLanguageByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateLanguageByIdResolver,
                {
                    provide : AppHealthUpdateLanguageByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateLanguageByIdResolver>(AppHealthUpdateLanguageByIdResolver);
        handler = module.get<AppHealthUpdateLanguageByIdHandler>(AppHealthUpdateLanguageByIdHandler);
    });

    test('AppHealthUpdateLanguageByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateLanguageByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a language by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockLanguageData[0])));
            expect(await resolver.main(<AppHealthUpdateLanguageByIdInput>appHealthMockLanguageData[0])).toBe(appHealthMockLanguageData[0]);
        });
    });
});
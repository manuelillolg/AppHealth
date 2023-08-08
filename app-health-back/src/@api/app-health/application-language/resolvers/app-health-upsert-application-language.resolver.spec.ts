/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpsertApplicationLanguageResolver } from './app-health-upsert-application-language.resolver';
import { AppHealthUpsertApplicationLanguageHandler } from '../handlers/app-health-upsert-application-language.handler';
import { AppHealthUpdateApplicationLanguageByIdInput } from '@api/graphql';

// sources
import { appHealthMockApplicationLanguageData } from '@app/app-health/application-language/infrastructure/mock/app-health-mock-application-language.data';

describe('AppHealthUpsertApplicationLanguageResolver', () =>
{
    let resolver: AppHealthUpsertApplicationLanguageResolver;
    let handler: AppHealthUpsertApplicationLanguageHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpsertApplicationLanguageResolver,
                {
                    provide : AppHealthUpsertApplicationLanguageHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpsertApplicationLanguageResolver>(AppHealthUpsertApplicationLanguageResolver);
        handler = module.get<AppHealthUpsertApplicationLanguageHandler>(AppHealthUpsertApplicationLanguageHandler);
    });

    test('AppHealthUpsertApplicationLanguageResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpsertApplicationLanguageResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationLanguage upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationLanguageData[0])));
            expect(await resolver.main(<AppHealthUpdateApplicationLanguageByIdInput>appHealthMockApplicationLanguageData[0])).toBe(appHealthMockApplicationLanguageData[0]);
        });
    });
});
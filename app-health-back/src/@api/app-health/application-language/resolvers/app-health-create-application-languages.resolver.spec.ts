import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateApplicationLanguagesResolver } from './app-health-create-application-languages.resolver';
import { AppHealthCreateApplicationLanguagesHandler } from '../handlers/app-health-create-application-languages.handler';
import { AppHealthCreateApplicationLanguageInput } from '@api/graphql';

// sources
import { appHealthMockApplicationLanguageData } from '@app/app-health/application-language/infrastructure/mock/app-health-mock-application-language.data';

describe('AppHealthCreateApplicationLanguagesResolver', () =>
{
    let resolver: AppHealthCreateApplicationLanguagesResolver;
    let handler: AppHealthCreateApplicationLanguagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateApplicationLanguagesResolver,
                {
                    provide : AppHealthCreateApplicationLanguagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateApplicationLanguagesResolver>(AppHealthCreateApplicationLanguagesResolver);
        handler = module.get<AppHealthCreateApplicationLanguagesHandler>(AppHealthCreateApplicationLanguagesHandler);
    });

    test('AppHealthCreateApplicationLanguagesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateApplicationLanguagesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationLanguages created', async () =>
        {
            expect(await resolver.main(<AppHealthCreateApplicationLanguageInput[]>appHealthMockApplicationLanguageData)).toBe(undefined);
        });
    });
});
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateLanguagesResolver } from './app-health-create-languages.resolver';
import { AppHealthCreateLanguagesHandler } from '../handlers/app-health-create-languages.handler';
import { AppHealthCreateLanguageInput } from '@api/graphql';

// sources
import { appHealthMockLanguageData } from '@app/app-health/language/infrastructure/mock/app-health-mock-language.data';

describe('AppHealthCreateLanguagesResolver', () =>
{
    let resolver: AppHealthCreateLanguagesResolver;
    let handler: AppHealthCreateLanguagesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateLanguagesResolver,
                {
                    provide : AppHealthCreateLanguagesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateLanguagesResolver>(AppHealthCreateLanguagesResolver);
        handler = module.get<AppHealthCreateLanguagesHandler>(AppHealthCreateLanguagesHandler);
    });

    test('AppHealthCreateLanguagesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateLanguagesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an languages created', async () =>
        {
            expect(await resolver.main(<AppHealthCreateLanguageInput[]>appHealthMockLanguageData)).toBe(undefined);
        });
    });
});
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateApplicationLanguageResolver } from './app-health-create-application-language.resolver';
import { AppHealthCreateApplicationLanguageHandler } from '../handlers/app-health-create-application-language.handler';
import { AppHealthCreateApplicationLanguageInput } from '@api/graphql';

// sources
import { appHealthMockApplicationLanguageData } from '@app/app-health/application-language/infrastructure/mock/app-health-mock-application-language.data';

describe('AppHealthCreateApplicationLanguageResolver', () =>
{
    let resolver: AppHealthCreateApplicationLanguageResolver;
    let handler: AppHealthCreateApplicationLanguageHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthCreateApplicationLanguageResolver,
                {
                    provide : AppHealthCreateApplicationLanguageHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateApplicationLanguageResolver>(AppHealthCreateApplicationLanguageResolver);
        handler = module.get<AppHealthCreateApplicationLanguageHandler>(AppHealthCreateApplicationLanguageHandler);
    });

    test('AppHealthCreateApplicationLanguageResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateApplicationLanguageResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationLanguage created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationLanguageData[0])));
            expect(await resolver.main(<AppHealthCreateApplicationLanguageInput>appHealthMockApplicationLanguageData[0])).toBe(appHealthMockApplicationLanguageData[0]);
        });
    });
});
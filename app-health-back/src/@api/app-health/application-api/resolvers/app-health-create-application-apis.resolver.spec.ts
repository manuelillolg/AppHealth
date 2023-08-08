import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateApplicationApisResolver } from './app-health-create-application-apis.resolver';
import { AppHealthCreateApplicationApisHandler } from '../handlers/app-health-create-application-apis.handler';
import { AppHealthCreateApplicationApiInput } from '@api/graphql';

// sources
import { appHealthMockApplicationApiData } from '@app/app-health/application-api/infrastructure/mock/app-health-mock-application-api.data';

describe('AppHealthCreateApplicationApisResolver', () =>
{
    let resolver: AppHealthCreateApplicationApisResolver;
    let handler: AppHealthCreateApplicationApisHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateApplicationApisResolver,
                {
                    provide : AppHealthCreateApplicationApisHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateApplicationApisResolver>(AppHealthCreateApplicationApisResolver);
        handler = module.get<AppHealthCreateApplicationApisHandler>(AppHealthCreateApplicationApisHandler);
    });

    test('AppHealthCreateApplicationApisResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateApplicationApisResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationApis created', async () =>
        {
            expect(await resolver.main(<AppHealthCreateApplicationApiInput[]>appHealthMockApplicationApiData)).toBe(undefined);
        });
    });
});
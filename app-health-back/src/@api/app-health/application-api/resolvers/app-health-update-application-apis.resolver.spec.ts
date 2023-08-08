/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateApplicationApisResolver } from './app-health-update-application-apis.resolver';
import { AppHealthUpdateApplicationApisHandler } from '../handlers/app-health-update-application-apis.handler';
import { AppHealthUpdateApplicationApisInput } from '@api/graphql';

// sources
import { appHealthMockApplicationApiData } from '@app/app-health/application-api/infrastructure/mock/app-health-mock-application-api.data';

describe('AppHealthUpdateApplicationApisResolver', () =>
{
    let resolver: AppHealthUpdateApplicationApisResolver;
    let handler: AppHealthUpdateApplicationApisHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateApplicationApisResolver,
                {
                    provide : AppHealthUpdateApplicationApisHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateApplicationApisResolver>(AppHealthUpdateApplicationApisResolver);
        handler = module.get<AppHealthUpdateApplicationApisHandler>(AppHealthUpdateApplicationApisHandler);
    });

    test('AppHealthUpdateApplicationApisResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateApplicationApisResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a applicationApis updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationApiData[0])));
            expect(await resolver.main(<AppHealthUpdateApplicationApisInput>appHealthMockApplicationApiData[0])).toBe(appHealthMockApplicationApiData[0]);
        });
    });
});
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteApplicationApisResolver } from './app-health-delete-application-apis.resolver';
import { AppHealthDeleteApplicationApisHandler } from '../handlers/app-health-delete-application-apis.handler';

// sources
import { appHealthMockApplicationApiData } from '@app/app-health/application-api/infrastructure/mock/app-health-mock-application-api.data';

describe('AppHealthDeleteApplicationApisResolver', () =>
{
    let resolver: AppHealthDeleteApplicationApisResolver;
    let handler: AppHealthDeleteApplicationApisHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteApplicationApisResolver,
                {
                    provide : AppHealthDeleteApplicationApisHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteApplicationApisResolver>(AppHealthDeleteApplicationApisResolver);
        handler = module.get<AppHealthDeleteApplicationApisHandler>(AppHealthDeleteApplicationApisHandler);
    });

    test('AppHealthDeleteApplicationApisResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApplicationApisResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an appHealthMockApplicationApiData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationApiData)));
            expect(await resolver.main()).toBe(appHealthMockApplicationApiData);
        });
    });
});
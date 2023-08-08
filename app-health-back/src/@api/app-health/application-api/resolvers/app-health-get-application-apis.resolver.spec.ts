/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthGetApplicationApisResolver } from './app-health-get-application-apis.resolver';
import { AppHealthGetApplicationApisHandler } from '../handlers/app-health-get-application-apis.handler';

// sources
import { appHealthMockApplicationApiData } from '@app/app-health/application-api/infrastructure/mock/app-health-mock-application-api.data';

describe('AppHealthGetApplicationApisResolver', () =>
{
    let resolver: AppHealthGetApplicationApisResolver;
    let handler: AppHealthGetApplicationApisHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthGetApplicationApisResolver,
                {
                    provide : AppHealthGetApplicationApisHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthGetApplicationApisResolver>(AppHealthGetApplicationApisResolver);
        handler = module.get<AppHealthGetApplicationApisHandler>(AppHealthGetApplicationApisHandler);
    });

    test('AppHealthGetApplicationApisResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthGetApplicationApisResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a appHealthMockApplicationApiData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationApiData)));
            expect(await resolver.main()).toBe(appHealthMockApplicationApiData);
        });
    });
});
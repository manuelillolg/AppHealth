/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthFindApplicationApiResolver } from './app-health-find-application-api.resolver';
import { AppHealthFindApplicationApiHandler } from '../handlers/app-health-find-application-api.handler';

// sources
import { appHealthMockApplicationApiData } from '@app/app-health/application-api/infrastructure/mock/app-health-mock-application-api.data';

describe('AppHealthFindApplicationApiResolver', () =>
{
    let resolver: AppHealthFindApplicationApiResolver;
    let handler: AppHealthFindApplicationApiHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthFindApplicationApiResolver,
                {
                    provide : AppHealthFindApplicationApiHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthFindApplicationApiResolver>(AppHealthFindApplicationApiResolver);
        handler = module.get<AppHealthFindApplicationApiHandler>(AppHealthFindApplicationApiHandler);
    });

    test('AppHealthFindApplicationApiResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthFindApplicationApiResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a applicationApi', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationApiData[0])));
            expect(await resolver.main()).toBe(appHealthMockApplicationApiData[0]);
        });
    });
});
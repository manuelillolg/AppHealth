/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateApplicationViewsResolver } from './app-health-update-application-views.resolver';
import { AppHealthUpdateApplicationViewsHandler } from '../handlers/app-health-update-application-views.handler';
import { AppHealthUpdateApplicationViewsInput } from '@api/graphql';

// sources
import { appHealthMockApplicationViewData } from '@app/app-health/application-view/infrastructure/mock/app-health-mock-application-view.data';

describe('AppHealthUpdateApplicationViewsResolver', () =>
{
    let resolver: AppHealthUpdateApplicationViewsResolver;
    let handler: AppHealthUpdateApplicationViewsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateApplicationViewsResolver,
                {
                    provide : AppHealthUpdateApplicationViewsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateApplicationViewsResolver>(AppHealthUpdateApplicationViewsResolver);
        handler = module.get<AppHealthUpdateApplicationViewsHandler>(AppHealthUpdateApplicationViewsHandler);
    });

    test('AppHealthUpdateApplicationViewsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateApplicationViewsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a applicationViews updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationViewData[0])));
            expect(await resolver.main(<AppHealthUpdateApplicationViewsInput>appHealthMockApplicationViewData[0])).toBe(appHealthMockApplicationViewData[0]);
        });
    });
});
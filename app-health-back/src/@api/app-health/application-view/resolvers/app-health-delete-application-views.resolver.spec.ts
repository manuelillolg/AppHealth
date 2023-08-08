/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteApplicationViewsResolver } from './app-health-delete-application-views.resolver';
import { AppHealthDeleteApplicationViewsHandler } from '../handlers/app-health-delete-application-views.handler';

// sources
import { appHealthMockApplicationViewData } from '@app/app-health/application-view/infrastructure/mock/app-health-mock-application-view.data';

describe('AppHealthDeleteApplicationViewsResolver', () =>
{
    let resolver: AppHealthDeleteApplicationViewsResolver;
    let handler: AppHealthDeleteApplicationViewsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteApplicationViewsResolver,
                {
                    provide : AppHealthDeleteApplicationViewsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteApplicationViewsResolver>(AppHealthDeleteApplicationViewsResolver);
        handler = module.get<AppHealthDeleteApplicationViewsHandler>(AppHealthDeleteApplicationViewsHandler);
    });

    test('AppHealthDeleteApplicationViewsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApplicationViewsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an appHealthMockApplicationViewData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationViewData)));
            expect(await resolver.main()).toBe(appHealthMockApplicationViewData);
        });
    });
});
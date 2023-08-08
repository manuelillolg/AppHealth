/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthGetApplicationViewsResolver } from './app-health-get-application-views.resolver';
import { AppHealthGetApplicationViewsHandler } from '../handlers/app-health-get-application-views.handler';

// sources
import { appHealthMockApplicationViewData } from '@app/app-health/application-view/infrastructure/mock/app-health-mock-application-view.data';

describe('AppHealthGetApplicationViewsResolver', () =>
{
    let resolver: AppHealthGetApplicationViewsResolver;
    let handler: AppHealthGetApplicationViewsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthGetApplicationViewsResolver,
                {
                    provide : AppHealthGetApplicationViewsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthGetApplicationViewsResolver>(AppHealthGetApplicationViewsResolver);
        handler = module.get<AppHealthGetApplicationViewsHandler>(AppHealthGetApplicationViewsHandler);
    });

    test('AppHealthGetApplicationViewsResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthGetApplicationViewsResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a appHealthMockApplicationViewData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationViewData)));
            expect(await resolver.main()).toBe(appHealthMockApplicationViewData);
        });
    });
});
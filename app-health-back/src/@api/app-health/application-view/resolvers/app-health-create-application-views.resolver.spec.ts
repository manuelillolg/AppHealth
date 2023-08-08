import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateApplicationViewsResolver } from './app-health-create-application-views.resolver';
import { AppHealthCreateApplicationViewsHandler } from '../handlers/app-health-create-application-views.handler';
import { AppHealthCreateApplicationViewInput } from '@api/graphql';

// sources
import { appHealthMockApplicationViewData } from '@app/app-health/application-view/infrastructure/mock/app-health-mock-application-view.data';

describe('AppHealthCreateApplicationViewsResolver', () =>
{
    let resolver: AppHealthCreateApplicationViewsResolver;
    let handler: AppHealthCreateApplicationViewsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateApplicationViewsResolver,
                {
                    provide : AppHealthCreateApplicationViewsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateApplicationViewsResolver>(AppHealthCreateApplicationViewsResolver);
        handler = module.get<AppHealthCreateApplicationViewsHandler>(AppHealthCreateApplicationViewsHandler);
    });

    test('AppHealthCreateApplicationViewsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateApplicationViewsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationViews created', async () =>
        {
            expect(await resolver.main(<AppHealthCreateApplicationViewInput[]>appHealthMockApplicationViewData)).toBe(undefined);
        });
    });
});
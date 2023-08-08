/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpsertApplicationViewResolver } from './app-health-upsert-application-view.resolver';
import { AppHealthUpsertApplicationViewHandler } from '../handlers/app-health-upsert-application-view.handler';
import { AppHealthUpdateApplicationViewByIdInput } from '@api/graphql';

// sources
import { appHealthMockApplicationViewData } from '@app/app-health/application-view/infrastructure/mock/app-health-mock-application-view.data';

describe('AppHealthUpsertApplicationViewResolver', () =>
{
    let resolver: AppHealthUpsertApplicationViewResolver;
    let handler: AppHealthUpsertApplicationViewHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpsertApplicationViewResolver,
                {
                    provide : AppHealthUpsertApplicationViewHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpsertApplicationViewResolver>(AppHealthUpsertApplicationViewResolver);
        handler = module.get<AppHealthUpsertApplicationViewHandler>(AppHealthUpsertApplicationViewHandler);
    });

    test('AppHealthUpsertApplicationViewResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpsertApplicationViewResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationView upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationViewData[0])));
            expect(await resolver.main(<AppHealthUpdateApplicationViewByIdInput>appHealthMockApplicationViewData[0])).toBe(appHealthMockApplicationViewData[0]);
        });
    });
});
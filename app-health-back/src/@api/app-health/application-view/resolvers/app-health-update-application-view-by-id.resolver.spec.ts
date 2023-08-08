/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateApplicationViewByIdResolver } from './app-health-update-application-view-by-id.resolver';
import { AppHealthUpdateApplicationViewByIdHandler } from '../handlers/app-health-update-application-view-by-id.handler';
import { AppHealthUpdateApplicationViewByIdInput } from '@api/graphql';

// sources
import { appHealthMockApplicationViewData } from '@app/app-health/application-view/infrastructure/mock/app-health-mock-application-view.data';

describe('AppHealthUpdateApplicationViewByIdResolver', () =>
{
    let resolver: AppHealthUpdateApplicationViewByIdResolver;
    let handler: AppHealthUpdateApplicationViewByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateApplicationViewByIdResolver,
                {
                    provide : AppHealthUpdateApplicationViewByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateApplicationViewByIdResolver>(AppHealthUpdateApplicationViewByIdResolver);
        handler = module.get<AppHealthUpdateApplicationViewByIdHandler>(AppHealthUpdateApplicationViewByIdHandler);
    });

    test('AppHealthUpdateApplicationViewByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateApplicationViewByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a applicationView by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationViewData[0])));
            expect(await resolver.main(<AppHealthUpdateApplicationViewByIdInput>appHealthMockApplicationViewData[0])).toBe(appHealthMockApplicationViewData[0]);
        });
    });
});
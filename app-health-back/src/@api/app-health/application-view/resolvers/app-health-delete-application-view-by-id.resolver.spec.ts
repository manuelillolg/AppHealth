/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteApplicationViewByIdResolver } from './app-health-delete-application-view-by-id.resolver';
import { AppHealthDeleteApplicationViewByIdHandler } from '../handlers/app-health-delete-application-view-by-id.handler';

// sources
import { appHealthMockApplicationViewData } from '@app/app-health/application-view/infrastructure/mock/app-health-mock-application-view.data';

describe('AppHealthDeleteApplicationViewByIdResolver', () =>
{
    let resolver: AppHealthDeleteApplicationViewByIdResolver;
    let handler: AppHealthDeleteApplicationViewByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteApplicationViewByIdResolver,
                {
                    provide : AppHealthDeleteApplicationViewByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteApplicationViewByIdResolver>(AppHealthDeleteApplicationViewByIdResolver);
        handler = module.get<AppHealthDeleteApplicationViewByIdHandler>(AppHealthDeleteApplicationViewByIdHandler);
    });

    test('AppHealthDeleteApplicationViewByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApplicationViewByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationView deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationViewData[0])));
            expect(await resolver.main(appHealthMockApplicationViewData[0].id)).toBe(appHealthMockApplicationViewData[0]);
        });
    });
});
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthPaginateApplicationApisResolver } from './app-health-paginate-application-apis.resolver';
import { AppHealthPaginateApplicationApisHandler } from '../handlers/app-health-paginate-application-apis.handler';

// sources
import { appHealthMockApplicationApiData } from '@app/app-health/application-api/infrastructure/mock/app-health-mock-application-api.data';

describe('AppHealthPaginateApplicationApisResolver', () =>
{
    let resolver: AppHealthPaginateApplicationApisResolver;
    let handler: AppHealthPaginateApplicationApisHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthPaginateApplicationApisResolver,
                {
                    provide : AppHealthPaginateApplicationApisHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthPaginateApplicationApisResolver>(AppHealthPaginateApplicationApisResolver);
        handler = module.get<AppHealthPaginateApplicationApisHandler>(AppHealthPaginateApplicationApisHandler);
    });

    test('AppHealthPaginateApplicationApisResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthPaginateApplicationApisResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a appHealthMockApplicationApiData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : appHealthMockApplicationApiData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : appHealthMockApplicationApiData,
            });
        });
    });
});
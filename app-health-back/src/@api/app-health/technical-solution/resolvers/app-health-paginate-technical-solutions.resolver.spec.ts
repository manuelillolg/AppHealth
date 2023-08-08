/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthPaginateTechnicalSolutionsResolver } from './app-health-paginate-technical-solutions.resolver';
import { AppHealthPaginateTechnicalSolutionsHandler } from '../handlers/app-health-paginate-technical-solutions.handler';

// sources
import { appHealthMockTechnicalSolutionData } from '@app/app-health/technical-solution/infrastructure/mock/app-health-mock-technical-solution.data';

describe('AppHealthPaginateTechnicalSolutionsResolver', () =>
{
    let resolver: AppHealthPaginateTechnicalSolutionsResolver;
    let handler: AppHealthPaginateTechnicalSolutionsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthPaginateTechnicalSolutionsResolver,
                {
                    provide : AppHealthPaginateTechnicalSolutionsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthPaginateTechnicalSolutionsResolver>(AppHealthPaginateTechnicalSolutionsResolver);
        handler = module.get<AppHealthPaginateTechnicalSolutionsHandler>(AppHealthPaginateTechnicalSolutionsHandler);
    });

    test('AppHealthPaginateTechnicalSolutionsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthPaginateTechnicalSolutionsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a appHealthMockTechnicalSolutionData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : appHealthMockTechnicalSolutionData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : appHealthMockTechnicalSolutionData,
            });
        });
    });
});
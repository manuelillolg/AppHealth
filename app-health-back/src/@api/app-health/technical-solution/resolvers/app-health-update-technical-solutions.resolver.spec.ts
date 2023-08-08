/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateTechnicalSolutionsResolver } from './app-health-update-technical-solutions.resolver';
import { AppHealthUpdateTechnicalSolutionsHandler } from '../handlers/app-health-update-technical-solutions.handler';
import { AppHealthUpdateTechnicalSolutionsInput } from '@api/graphql';

// sources
import { appHealthMockTechnicalSolutionData } from '@app/app-health/technical-solution/infrastructure/mock/app-health-mock-technical-solution.data';

describe('AppHealthUpdateTechnicalSolutionsResolver', () =>
{
    let resolver: AppHealthUpdateTechnicalSolutionsResolver;
    let handler: AppHealthUpdateTechnicalSolutionsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateTechnicalSolutionsResolver,
                {
                    provide : AppHealthUpdateTechnicalSolutionsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateTechnicalSolutionsResolver>(AppHealthUpdateTechnicalSolutionsResolver);
        handler = module.get<AppHealthUpdateTechnicalSolutionsHandler>(AppHealthUpdateTechnicalSolutionsHandler);
    });

    test('AppHealthUpdateTechnicalSolutionsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateTechnicalSolutionsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a technicalSolutions updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockTechnicalSolutionData[0])));
            expect(await resolver.main(<AppHealthUpdateTechnicalSolutionsInput>appHealthMockTechnicalSolutionData[0])).toBe(appHealthMockTechnicalSolutionData[0]);
        });
    });
});
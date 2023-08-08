import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateTechnicalSolutionsResolver } from './app-health-create-technical-solutions.resolver';
import { AppHealthCreateTechnicalSolutionsHandler } from '../handlers/app-health-create-technical-solutions.handler';
import { AppHealthCreateTechnicalSolutionInput } from '@api/graphql';

// sources
import { appHealthMockTechnicalSolutionData } from '@app/app-health/technical-solution/infrastructure/mock/app-health-mock-technical-solution.data';

describe('AppHealthCreateTechnicalSolutionsResolver', () =>
{
    let resolver: AppHealthCreateTechnicalSolutionsResolver;
    let handler: AppHealthCreateTechnicalSolutionsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateTechnicalSolutionsResolver,
                {
                    provide : AppHealthCreateTechnicalSolutionsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateTechnicalSolutionsResolver>(AppHealthCreateTechnicalSolutionsResolver);
        handler = module.get<AppHealthCreateTechnicalSolutionsHandler>(AppHealthCreateTechnicalSolutionsHandler);
    });

    test('AppHealthCreateTechnicalSolutionsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateTechnicalSolutionsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an technicalSolutions created', async () =>
        {
            expect(await resolver.main(<AppHealthCreateTechnicalSolutionInput[]>appHealthMockTechnicalSolutionData)).toBe(undefined);
        });
    });
});
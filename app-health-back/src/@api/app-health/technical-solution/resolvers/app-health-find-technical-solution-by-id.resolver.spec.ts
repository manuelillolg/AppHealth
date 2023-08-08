/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthFindTechnicalSolutionByIdResolver } from './app-health-find-technical-solution-by-id.resolver';
import { AppHealthFindTechnicalSolutionByIdHandler } from '../handlers/app-health-find-technical-solution-by-id.handler';

// sources
import { appHealthMockTechnicalSolutionData } from '@app/app-health/technical-solution/infrastructure/mock/app-health-mock-technical-solution.data';

describe('AppHealthFindTechnicalSolutionByIdResolver', () =>
{
    let resolver: AppHealthFindTechnicalSolutionByIdResolver;
    let handler: AppHealthFindTechnicalSolutionByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthFindTechnicalSolutionByIdResolver,
                {
                    provide : AppHealthFindTechnicalSolutionByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthFindTechnicalSolutionByIdResolver>(AppHealthFindTechnicalSolutionByIdResolver);
        handler = module.get<AppHealthFindTechnicalSolutionByIdHandler>(AppHealthFindTechnicalSolutionByIdHandler);
    });

    test('AppHealthFindTechnicalSolutionByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthFindTechnicalSolutionByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an technicalSolution by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockTechnicalSolutionData[0])));
            expect(await resolver.main(appHealthMockTechnicalSolutionData[0].id)).toBe(appHealthMockTechnicalSolutionData[0]);
        });
    });
});
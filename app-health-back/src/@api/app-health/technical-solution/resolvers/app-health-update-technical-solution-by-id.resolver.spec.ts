/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateTechnicalSolutionByIdResolver } from './app-health-update-technical-solution-by-id.resolver';
import { AppHealthUpdateTechnicalSolutionByIdHandler } from '../handlers/app-health-update-technical-solution-by-id.handler';
import { AppHealthUpdateTechnicalSolutionByIdInput } from '@api/graphql';

// sources
import { appHealthMockTechnicalSolutionData } from '@app/app-health/technical-solution/infrastructure/mock/app-health-mock-technical-solution.data';

describe('AppHealthUpdateTechnicalSolutionByIdResolver', () =>
{
    let resolver: AppHealthUpdateTechnicalSolutionByIdResolver;
    let handler: AppHealthUpdateTechnicalSolutionByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateTechnicalSolutionByIdResolver,
                {
                    provide : AppHealthUpdateTechnicalSolutionByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateTechnicalSolutionByIdResolver>(AppHealthUpdateTechnicalSolutionByIdResolver);
        handler = module.get<AppHealthUpdateTechnicalSolutionByIdHandler>(AppHealthUpdateTechnicalSolutionByIdHandler);
    });

    test('AppHealthUpdateTechnicalSolutionByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateTechnicalSolutionByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a technicalSolution by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockTechnicalSolutionData[0])));
            expect(await resolver.main(<AppHealthUpdateTechnicalSolutionByIdInput>appHealthMockTechnicalSolutionData[0])).toBe(appHealthMockTechnicalSolutionData[0]);
        });
    });
});
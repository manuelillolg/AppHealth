/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteTechnicalSolutionByIdResolver } from './app-health-delete-technical-solution-by-id.resolver';
import { AppHealthDeleteTechnicalSolutionByIdHandler } from '../handlers/app-health-delete-technical-solution-by-id.handler';

// sources
import { appHealthMockTechnicalSolutionData } from '@app/app-health/technical-solution/infrastructure/mock/app-health-mock-technical-solution.data';

describe('AppHealthDeleteTechnicalSolutionByIdResolver', () =>
{
    let resolver: AppHealthDeleteTechnicalSolutionByIdResolver;
    let handler: AppHealthDeleteTechnicalSolutionByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteTechnicalSolutionByIdResolver,
                {
                    provide : AppHealthDeleteTechnicalSolutionByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteTechnicalSolutionByIdResolver>(AppHealthDeleteTechnicalSolutionByIdResolver);
        handler = module.get<AppHealthDeleteTechnicalSolutionByIdHandler>(AppHealthDeleteTechnicalSolutionByIdHandler);
    });

    test('AppHealthDeleteTechnicalSolutionByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteTechnicalSolutionByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an technicalSolution deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockTechnicalSolutionData[0])));
            expect(await resolver.main(appHealthMockTechnicalSolutionData[0].id)).toBe(appHealthMockTechnicalSolutionData[0]);
        });
    });
});
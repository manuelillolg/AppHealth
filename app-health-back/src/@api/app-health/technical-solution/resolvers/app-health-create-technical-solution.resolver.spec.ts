/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateTechnicalSolutionResolver } from './app-health-create-technical-solution.resolver';
import { AppHealthCreateTechnicalSolutionHandler } from '../handlers/app-health-create-technical-solution.handler';
import { AppHealthCreateTechnicalSolutionInput } from '@api/graphql';

// sources
import { appHealthMockTechnicalSolutionData } from '@app/app-health/technical-solution/infrastructure/mock/app-health-mock-technical-solution.data';

describe('AppHealthCreateTechnicalSolutionResolver', () =>
{
    let resolver: AppHealthCreateTechnicalSolutionResolver;
    let handler: AppHealthCreateTechnicalSolutionHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthCreateTechnicalSolutionResolver,
                {
                    provide : AppHealthCreateTechnicalSolutionHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateTechnicalSolutionResolver>(AppHealthCreateTechnicalSolutionResolver);
        handler = module.get<AppHealthCreateTechnicalSolutionHandler>(AppHealthCreateTechnicalSolutionHandler);
    });

    test('AppHealthCreateTechnicalSolutionResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateTechnicalSolutionResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an technicalSolution created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockTechnicalSolutionData[0])));
            expect(await resolver.main(<AppHealthCreateTechnicalSolutionInput>appHealthMockTechnicalSolutionData[0])).toBe(appHealthMockTechnicalSolutionData[0]);
        });
    });
});
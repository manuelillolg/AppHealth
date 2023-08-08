/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppHealthPaginateTechnicalSolutionsHandler } from '@api/app-health/technical-solution';
import { appHealthMockTechnicalSolutionData } from '@app/app-health/technical-solution';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthPaginateTechnicalSolutionsHandler', () =>
{
    let handler: AppHealthPaginateTechnicalSolutionsHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthPaginateTechnicalSolutionsHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<AppHealthPaginateTechnicalSolutionsHandler>(AppHealthPaginateTechnicalSolutionsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('AppHealthPaginateTechnicalSolutionsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthPaginateTechnicalSolutionsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a technicalSolutions', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: appHealthMockTechnicalSolutionData.length,
                count: appHealthMockTechnicalSolutionData.length,
                rows : appHealthMockTechnicalSolutionData,
            })));
            expect(await handler.main()).toEqual({
                total: appHealthMockTechnicalSolutionData.length,
                count: appHealthMockTechnicalSolutionData.length,
                rows : appHealthMockTechnicalSolutionData,
            });
        });
    });
});
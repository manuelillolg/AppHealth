/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppHealthCreateApplicationViewHandler } from '@api/app-health/application-view';
import { appHealthMockApplicationViewData } from '@app/app-health/application-view';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthCreateApplicationViewHandler', () =>
{
    let handler: AppHealthCreateApplicationViewHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthCreateApplicationViewHandler,
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

        handler = module.get<AppHealthCreateApplicationViewHandler>(AppHealthCreateApplicationViewHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    describe('main', () =>
    {
        test('AppHealthCreateApplicationViewHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an applicationView created', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationViewData[0])));
            expect(await handler.main(appHealthMockApplicationViewData[0])).toBe(appHealthMockApplicationViewData[0]);
        });
    });
});
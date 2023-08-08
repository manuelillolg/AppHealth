/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppHealthPaginateApplicationAuthenticationsHandler } from '@api/app-health/application-authentication';
import { appHealthMockApplicationAuthenticationData } from '@app/app-health/application-authentication';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthPaginateApplicationAuthenticationsHandler', () =>
{
    let handler: AppHealthPaginateApplicationAuthenticationsHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthPaginateApplicationAuthenticationsHandler,
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

        handler = module.get<AppHealthPaginateApplicationAuthenticationsHandler>(AppHealthPaginateApplicationAuthenticationsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('AppHealthPaginateApplicationAuthenticationsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthPaginateApplicationAuthenticationsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a applicationAuthentications', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: appHealthMockApplicationAuthenticationData.length,
                count: appHealthMockApplicationAuthenticationData.length,
                rows : appHealthMockApplicationAuthenticationData,
            })));
            expect(await handler.main()).toEqual({
                total: appHealthMockApplicationAuthenticationData.length,
                count: appHealthMockApplicationAuthenticationData.length,
                rows : appHealthMockApplicationAuthenticationData,
            });
        });
    });
});
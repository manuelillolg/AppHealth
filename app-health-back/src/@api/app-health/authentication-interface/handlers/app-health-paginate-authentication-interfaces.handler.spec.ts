/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppHealthPaginateAuthenticationInterfacesHandler } from '@api/app-health/authentication-interface';
import { appHealthMockAuthenticationInterfaceData } from '@app/app-health/authentication-interface';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthPaginateAuthenticationInterfacesHandler', () =>
{
    let handler: AppHealthPaginateAuthenticationInterfacesHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthPaginateAuthenticationInterfacesHandler,
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

        handler = module.get<AppHealthPaginateAuthenticationInterfacesHandler>(AppHealthPaginateAuthenticationInterfacesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('AppHealthPaginateAuthenticationInterfacesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthPaginateAuthenticationInterfacesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a authenticationInterfaces', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: appHealthMockAuthenticationInterfaceData.length,
                count: appHealthMockAuthenticationInterfaceData.length,
                rows : appHealthMockAuthenticationInterfaceData,
            })));
            expect(await handler.main()).toEqual({
                total: appHealthMockAuthenticationInterfaceData.length,
                count: appHealthMockAuthenticationInterfaceData.length,
                rows : appHealthMockAuthenticationInterfaceData,
            });
        });
    });
});
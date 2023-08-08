/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpsertAuthorizationInterfaceResolver } from './app-health-upsert-authorization-interface.resolver';
import { AppHealthUpsertAuthorizationInterfaceHandler } from '../handlers/app-health-upsert-authorization-interface.handler';
import { AppHealthUpdateAuthorizationInterfaceByIdInput } from '@api/graphql';

// sources
import { appHealthMockAuthorizationInterfaceData } from '@app/app-health/authorization-interface/infrastructure/mock/app-health-mock-authorization-interface.data';

describe('AppHealthUpsertAuthorizationInterfaceResolver', () =>
{
    let resolver: AppHealthUpsertAuthorizationInterfaceResolver;
    let handler: AppHealthUpsertAuthorizationInterfaceHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpsertAuthorizationInterfaceResolver,
                {
                    provide : AppHealthUpsertAuthorizationInterfaceHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpsertAuthorizationInterfaceResolver>(AppHealthUpsertAuthorizationInterfaceResolver);
        handler = module.get<AppHealthUpsertAuthorizationInterfaceHandler>(AppHealthUpsertAuthorizationInterfaceHandler);
    });

    test('AppHealthUpsertAuthorizationInterfaceResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpsertAuthorizationInterfaceResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an authorizationInterface upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockAuthorizationInterfaceData[0])));
            expect(await resolver.main(<AppHealthUpdateAuthorizationInterfaceByIdInput>appHealthMockAuthorizationInterfaceData[0])).toBe(appHealthMockAuthorizationInterfaceData[0]);
        });
    });
});
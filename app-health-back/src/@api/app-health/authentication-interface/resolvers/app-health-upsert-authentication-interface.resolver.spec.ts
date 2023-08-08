/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpsertAuthenticationInterfaceResolver } from './app-health-upsert-authentication-interface.resolver';
import { AppHealthUpsertAuthenticationInterfaceHandler } from '../handlers/app-health-upsert-authentication-interface.handler';
import { AppHealthUpdateAuthenticationInterfaceByIdInput } from '@api/graphql';

// sources
import { appHealthMockAuthenticationInterfaceData } from '@app/app-health/authentication-interface/infrastructure/mock/app-health-mock-authentication-interface.data';

describe('AppHealthUpsertAuthenticationInterfaceResolver', () =>
{
    let resolver: AppHealthUpsertAuthenticationInterfaceResolver;
    let handler: AppHealthUpsertAuthenticationInterfaceHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpsertAuthenticationInterfaceResolver,
                {
                    provide : AppHealthUpsertAuthenticationInterfaceHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpsertAuthenticationInterfaceResolver>(AppHealthUpsertAuthenticationInterfaceResolver);
        handler = module.get<AppHealthUpsertAuthenticationInterfaceHandler>(AppHealthUpsertAuthenticationInterfaceHandler);
    });

    test('AppHealthUpsertAuthenticationInterfaceResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpsertAuthenticationInterfaceResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an authenticationInterface upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockAuthenticationInterfaceData[0])));
            expect(await resolver.main(<AppHealthUpdateAuthenticationInterfaceByIdInput>appHealthMockAuthenticationInterfaceData[0])).toBe(appHealthMockAuthenticationInterfaceData[0]);
        });
    });
});
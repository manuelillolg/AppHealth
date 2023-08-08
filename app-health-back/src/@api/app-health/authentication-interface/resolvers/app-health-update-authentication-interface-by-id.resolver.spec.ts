/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateAuthenticationInterfaceByIdResolver } from './app-health-update-authentication-interface-by-id.resolver';
import { AppHealthUpdateAuthenticationInterfaceByIdHandler } from '../handlers/app-health-update-authentication-interface-by-id.handler';
import { AppHealthUpdateAuthenticationInterfaceByIdInput } from '@api/graphql';

// sources
import { appHealthMockAuthenticationInterfaceData } from '@app/app-health/authentication-interface/infrastructure/mock/app-health-mock-authentication-interface.data';

describe('AppHealthUpdateAuthenticationInterfaceByIdResolver', () =>
{
    let resolver: AppHealthUpdateAuthenticationInterfaceByIdResolver;
    let handler: AppHealthUpdateAuthenticationInterfaceByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateAuthenticationInterfaceByIdResolver,
                {
                    provide : AppHealthUpdateAuthenticationInterfaceByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateAuthenticationInterfaceByIdResolver>(AppHealthUpdateAuthenticationInterfaceByIdResolver);
        handler = module.get<AppHealthUpdateAuthenticationInterfaceByIdHandler>(AppHealthUpdateAuthenticationInterfaceByIdHandler);
    });

    test('AppHealthUpdateAuthenticationInterfaceByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateAuthenticationInterfaceByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a authenticationInterface by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockAuthenticationInterfaceData[0])));
            expect(await resolver.main(<AppHealthUpdateAuthenticationInterfaceByIdInput>appHealthMockAuthenticationInterfaceData[0])).toBe(appHealthMockAuthenticationInterfaceData[0]);
        });
    });
});
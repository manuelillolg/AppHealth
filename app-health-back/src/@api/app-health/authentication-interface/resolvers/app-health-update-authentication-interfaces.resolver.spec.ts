/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateAuthenticationInterfacesResolver } from './app-health-update-authentication-interfaces.resolver';
import { AppHealthUpdateAuthenticationInterfacesHandler } from '../handlers/app-health-update-authentication-interfaces.handler';
import { AppHealthUpdateAuthenticationInterfacesInput } from '@api/graphql';

// sources
import { appHealthMockAuthenticationInterfaceData } from '@app/app-health/authentication-interface/infrastructure/mock/app-health-mock-authentication-interface.data';

describe('AppHealthUpdateAuthenticationInterfacesResolver', () =>
{
    let resolver: AppHealthUpdateAuthenticationInterfacesResolver;
    let handler: AppHealthUpdateAuthenticationInterfacesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateAuthenticationInterfacesResolver,
                {
                    provide : AppHealthUpdateAuthenticationInterfacesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateAuthenticationInterfacesResolver>(AppHealthUpdateAuthenticationInterfacesResolver);
        handler = module.get<AppHealthUpdateAuthenticationInterfacesHandler>(AppHealthUpdateAuthenticationInterfacesHandler);
    });

    test('AppHealthUpdateAuthenticationInterfacesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateAuthenticationInterfacesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a authenticationInterfaces updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockAuthenticationInterfaceData[0])));
            expect(await resolver.main(<AppHealthUpdateAuthenticationInterfacesInput>appHealthMockAuthenticationInterfaceData[0])).toBe(appHealthMockAuthenticationInterfaceData[0]);
        });
    });
});
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthGetAuthenticationInterfacesResolver } from './app-health-get-authentication-interfaces.resolver';
import { AppHealthGetAuthenticationInterfacesHandler } from '../handlers/app-health-get-authentication-interfaces.handler';

// sources
import { appHealthMockAuthenticationInterfaceData } from '@app/app-health/authentication-interface/infrastructure/mock/app-health-mock-authentication-interface.data';

describe('AppHealthGetAuthenticationInterfacesResolver', () =>
{
    let resolver: AppHealthGetAuthenticationInterfacesResolver;
    let handler: AppHealthGetAuthenticationInterfacesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthGetAuthenticationInterfacesResolver,
                {
                    provide : AppHealthGetAuthenticationInterfacesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthGetAuthenticationInterfacesResolver>(AppHealthGetAuthenticationInterfacesResolver);
        handler = module.get<AppHealthGetAuthenticationInterfacesHandler>(AppHealthGetAuthenticationInterfacesHandler);
    });

    test('AppHealthGetAuthenticationInterfacesResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthGetAuthenticationInterfacesResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a appHealthMockAuthenticationInterfaceData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockAuthenticationInterfaceData)));
            expect(await resolver.main()).toBe(appHealthMockAuthenticationInterfaceData);
        });
    });
});
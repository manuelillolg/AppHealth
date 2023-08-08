/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteAuthenticationInterfacesResolver } from './app-health-delete-authentication-interfaces.resolver';
import { AppHealthDeleteAuthenticationInterfacesHandler } from '../handlers/app-health-delete-authentication-interfaces.handler';

// sources
import { appHealthMockAuthenticationInterfaceData } from '@app/app-health/authentication-interface/infrastructure/mock/app-health-mock-authentication-interface.data';

describe('AppHealthDeleteAuthenticationInterfacesResolver', () =>
{
    let resolver: AppHealthDeleteAuthenticationInterfacesResolver;
    let handler: AppHealthDeleteAuthenticationInterfacesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteAuthenticationInterfacesResolver,
                {
                    provide : AppHealthDeleteAuthenticationInterfacesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteAuthenticationInterfacesResolver>(AppHealthDeleteAuthenticationInterfacesResolver);
        handler = module.get<AppHealthDeleteAuthenticationInterfacesHandler>(AppHealthDeleteAuthenticationInterfacesHandler);
    });

    test('AppHealthDeleteAuthenticationInterfacesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteAuthenticationInterfacesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an appHealthMockAuthenticationInterfaceData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockAuthenticationInterfaceData)));
            expect(await resolver.main()).toBe(appHealthMockAuthenticationInterfaceData);
        });
    });
});
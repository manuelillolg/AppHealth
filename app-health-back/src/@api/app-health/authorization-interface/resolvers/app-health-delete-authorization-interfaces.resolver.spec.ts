/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteAuthorizationInterfacesResolver } from './app-health-delete-authorization-interfaces.resolver';
import { AppHealthDeleteAuthorizationInterfacesHandler } from '../handlers/app-health-delete-authorization-interfaces.handler';

// sources
import { appHealthMockAuthorizationInterfaceData } from '@app/app-health/authorization-interface/infrastructure/mock/app-health-mock-authorization-interface.data';

describe('AppHealthDeleteAuthorizationInterfacesResolver', () =>
{
    let resolver: AppHealthDeleteAuthorizationInterfacesResolver;
    let handler: AppHealthDeleteAuthorizationInterfacesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteAuthorizationInterfacesResolver,
                {
                    provide : AppHealthDeleteAuthorizationInterfacesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteAuthorizationInterfacesResolver>(AppHealthDeleteAuthorizationInterfacesResolver);
        handler = module.get<AppHealthDeleteAuthorizationInterfacesHandler>(AppHealthDeleteAuthorizationInterfacesHandler);
    });

    test('AppHealthDeleteAuthorizationInterfacesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteAuthorizationInterfacesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an appHealthMockAuthorizationInterfaceData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockAuthorizationInterfaceData)));
            expect(await resolver.main()).toBe(appHealthMockAuthorizationInterfaceData);
        });
    });
});
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthGetAuthorizationInterfacesResolver } from './app-health-get-authorization-interfaces.resolver';
import { AppHealthGetAuthorizationInterfacesHandler } from '../handlers/app-health-get-authorization-interfaces.handler';

// sources
import { appHealthMockAuthorizationInterfaceData } from '@app/app-health/authorization-interface/infrastructure/mock/app-health-mock-authorization-interface.data';

describe('AppHealthGetAuthorizationInterfacesResolver', () =>
{
    let resolver: AppHealthGetAuthorizationInterfacesResolver;
    let handler: AppHealthGetAuthorizationInterfacesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthGetAuthorizationInterfacesResolver,
                {
                    provide : AppHealthGetAuthorizationInterfacesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthGetAuthorizationInterfacesResolver>(AppHealthGetAuthorizationInterfacesResolver);
        handler = module.get<AppHealthGetAuthorizationInterfacesHandler>(AppHealthGetAuthorizationInterfacesHandler);
    });

    test('AppHealthGetAuthorizationInterfacesResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthGetAuthorizationInterfacesResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a appHealthMockAuthorizationInterfaceData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockAuthorizationInterfaceData)));
            expect(await resolver.main()).toBe(appHealthMockAuthorizationInterfaceData);
        });
    });
});
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateAuthorizationInterfacesResolver } from './app-health-create-authorization-interfaces.resolver';
import { AppHealthCreateAuthorizationInterfacesHandler } from '../handlers/app-health-create-authorization-interfaces.handler';
import { AppHealthCreateAuthorizationInterfaceInput } from '@api/graphql';

// sources
import { appHealthMockAuthorizationInterfaceData } from '@app/app-health/authorization-interface/infrastructure/mock/app-health-mock-authorization-interface.data';

describe('AppHealthCreateAuthorizationInterfacesResolver', () =>
{
    let resolver: AppHealthCreateAuthorizationInterfacesResolver;
    let handler: AppHealthCreateAuthorizationInterfacesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateAuthorizationInterfacesResolver,
                {
                    provide : AppHealthCreateAuthorizationInterfacesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateAuthorizationInterfacesResolver>(AppHealthCreateAuthorizationInterfacesResolver);
        handler = module.get<AppHealthCreateAuthorizationInterfacesHandler>(AppHealthCreateAuthorizationInterfacesHandler);
    });

    test('AppHealthCreateAuthorizationInterfacesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateAuthorizationInterfacesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an authorizationInterfaces created', async () =>
        {
            expect(await resolver.main(<AppHealthCreateAuthorizationInterfaceInput[]>appHealthMockAuthorizationInterfaceData)).toBe(undefined);
        });
    });
});
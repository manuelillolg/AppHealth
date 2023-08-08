import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateAuthenticationInterfacesResolver } from './app-health-create-authentication-interfaces.resolver';
import { AppHealthCreateAuthenticationInterfacesHandler } from '../handlers/app-health-create-authentication-interfaces.handler';
import { AppHealthCreateAuthenticationInterfaceInput } from '@api/graphql';

// sources
import { appHealthMockAuthenticationInterfaceData } from '@app/app-health/authentication-interface/infrastructure/mock/app-health-mock-authentication-interface.data';

describe('AppHealthCreateAuthenticationInterfacesResolver', () =>
{
    let resolver: AppHealthCreateAuthenticationInterfacesResolver;
    let handler: AppHealthCreateAuthenticationInterfacesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateAuthenticationInterfacesResolver,
                {
                    provide : AppHealthCreateAuthenticationInterfacesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateAuthenticationInterfacesResolver>(AppHealthCreateAuthenticationInterfacesResolver);
        handler = module.get<AppHealthCreateAuthenticationInterfacesHandler>(AppHealthCreateAuthenticationInterfacesHandler);
    });

    test('AppHealthCreateAuthenticationInterfacesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateAuthenticationInterfacesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an authenticationInterfaces created', async () =>
        {
            expect(await resolver.main(<AppHealthCreateAuthenticationInterfaceInput[]>appHealthMockAuthenticationInterfaceData)).toBe(undefined);
        });
    });
});
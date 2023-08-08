/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteAuthenticationInterfaceByIdResolver } from './app-health-delete-authentication-interface-by-id.resolver';
import { AppHealthDeleteAuthenticationInterfaceByIdHandler } from '../handlers/app-health-delete-authentication-interface-by-id.handler';

// sources
import { appHealthMockAuthenticationInterfaceData } from '@app/app-health/authentication-interface/infrastructure/mock/app-health-mock-authentication-interface.data';

describe('AppHealthDeleteAuthenticationInterfaceByIdResolver', () =>
{
    let resolver: AppHealthDeleteAuthenticationInterfaceByIdResolver;
    let handler: AppHealthDeleteAuthenticationInterfaceByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteAuthenticationInterfaceByIdResolver,
                {
                    provide : AppHealthDeleteAuthenticationInterfaceByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteAuthenticationInterfaceByIdResolver>(AppHealthDeleteAuthenticationInterfaceByIdResolver);
        handler = module.get<AppHealthDeleteAuthenticationInterfaceByIdHandler>(AppHealthDeleteAuthenticationInterfaceByIdHandler);
    });

    test('AppHealthDeleteAuthenticationInterfaceByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteAuthenticationInterfaceByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an authenticationInterface deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockAuthenticationInterfaceData[0])));
            expect(await resolver.main(appHealthMockAuthenticationInterfaceData[0].id)).toBe(appHealthMockAuthenticationInterfaceData[0]);
        });
    });
});
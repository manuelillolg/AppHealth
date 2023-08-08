/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteAuthorizationInterfaceByIdResolver } from './app-health-delete-authorization-interface-by-id.resolver';
import { AppHealthDeleteAuthorizationInterfaceByIdHandler } from '../handlers/app-health-delete-authorization-interface-by-id.handler';

// sources
import { appHealthMockAuthorizationInterfaceData } from '@app/app-health/authorization-interface/infrastructure/mock/app-health-mock-authorization-interface.data';

describe('AppHealthDeleteAuthorizationInterfaceByIdResolver', () =>
{
    let resolver: AppHealthDeleteAuthorizationInterfaceByIdResolver;
    let handler: AppHealthDeleteAuthorizationInterfaceByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteAuthorizationInterfaceByIdResolver,
                {
                    provide : AppHealthDeleteAuthorizationInterfaceByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteAuthorizationInterfaceByIdResolver>(AppHealthDeleteAuthorizationInterfaceByIdResolver);
        handler = module.get<AppHealthDeleteAuthorizationInterfaceByIdHandler>(AppHealthDeleteAuthorizationInterfaceByIdHandler);
    });

    test('AppHealthDeleteAuthorizationInterfaceByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteAuthorizationInterfaceByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an authorizationInterface deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockAuthorizationInterfaceData[0])));
            expect(await resolver.main(appHealthMockAuthorizationInterfaceData[0].id)).toBe(appHealthMockAuthorizationInterfaceData[0]);
        });
    });
});
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthPaginateAuthorizationInterfacesResolver } from './app-health-paginate-authorization-interfaces.resolver';
import { AppHealthPaginateAuthorizationInterfacesHandler } from '../handlers/app-health-paginate-authorization-interfaces.handler';

// sources
import { appHealthMockAuthorizationInterfaceData } from '@app/app-health/authorization-interface/infrastructure/mock/app-health-mock-authorization-interface.data';

describe('AppHealthPaginateAuthorizationInterfacesResolver', () =>
{
    let resolver: AppHealthPaginateAuthorizationInterfacesResolver;
    let handler: AppHealthPaginateAuthorizationInterfacesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthPaginateAuthorizationInterfacesResolver,
                {
                    provide : AppHealthPaginateAuthorizationInterfacesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthPaginateAuthorizationInterfacesResolver>(AppHealthPaginateAuthorizationInterfacesResolver);
        handler = module.get<AppHealthPaginateAuthorizationInterfacesHandler>(AppHealthPaginateAuthorizationInterfacesHandler);
    });

    test('AppHealthPaginateAuthorizationInterfacesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthPaginateAuthorizationInterfacesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a appHealthMockAuthorizationInterfaceData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : appHealthMockAuthorizationInterfaceData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : appHealthMockAuthorizationInterfaceData,
            });
        });
    });
});
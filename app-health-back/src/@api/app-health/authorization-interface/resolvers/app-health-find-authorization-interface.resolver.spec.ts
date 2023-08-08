/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthFindAuthorizationInterfaceResolver } from './app-health-find-authorization-interface.resolver';
import { AppHealthFindAuthorizationInterfaceHandler } from '../handlers/app-health-find-authorization-interface.handler';

// sources
import { appHealthMockAuthorizationInterfaceData } from '@app/app-health/authorization-interface/infrastructure/mock/app-health-mock-authorization-interface.data';

describe('AppHealthFindAuthorizationInterfaceResolver', () =>
{
    let resolver: AppHealthFindAuthorizationInterfaceResolver;
    let handler: AppHealthFindAuthorizationInterfaceHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthFindAuthorizationInterfaceResolver,
                {
                    provide : AppHealthFindAuthorizationInterfaceHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthFindAuthorizationInterfaceResolver>(AppHealthFindAuthorizationInterfaceResolver);
        handler = module.get<AppHealthFindAuthorizationInterfaceHandler>(AppHealthFindAuthorizationInterfaceHandler);
    });

    test('AppHealthFindAuthorizationInterfaceResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthFindAuthorizationInterfaceResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a authorizationInterface', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockAuthorizationInterfaceData[0])));
            expect(await resolver.main()).toBe(appHealthMockAuthorizationInterfaceData[0]);
        });
    });
});
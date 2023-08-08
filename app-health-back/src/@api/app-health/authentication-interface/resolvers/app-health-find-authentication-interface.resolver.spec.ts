/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthFindAuthenticationInterfaceResolver } from './app-health-find-authentication-interface.resolver';
import { AppHealthFindAuthenticationInterfaceHandler } from '../handlers/app-health-find-authentication-interface.handler';

// sources
import { appHealthMockAuthenticationInterfaceData } from '@app/app-health/authentication-interface/infrastructure/mock/app-health-mock-authentication-interface.data';

describe('AppHealthFindAuthenticationInterfaceResolver', () =>
{
    let resolver: AppHealthFindAuthenticationInterfaceResolver;
    let handler: AppHealthFindAuthenticationInterfaceHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthFindAuthenticationInterfaceResolver,
                {
                    provide : AppHealthFindAuthenticationInterfaceHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthFindAuthenticationInterfaceResolver>(AppHealthFindAuthenticationInterfaceResolver);
        handler = module.get<AppHealthFindAuthenticationInterfaceHandler>(AppHealthFindAuthenticationInterfaceHandler);
    });

    test('AppHealthFindAuthenticationInterfaceResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthFindAuthenticationInterfaceResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a authenticationInterface', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockAuthenticationInterfaceData[0])));
            expect(await resolver.main()).toBe(appHealthMockAuthenticationInterfaceData[0]);
        });
    });
});
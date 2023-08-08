/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteApiInterfaceTypesResolver } from './app-health-delete-api-interface-types.resolver';
import { AppHealthDeleteApiInterfaceTypesHandler } from '../handlers/app-health-delete-api-interface-types.handler';

// sources
import { appHealthMockApiInterfaceTypeData } from '@app/app-health/api-interface-type/infrastructure/mock/app-health-mock-api-interface-type.data';

describe('AppHealthDeleteApiInterfaceTypesResolver', () =>
{
    let resolver: AppHealthDeleteApiInterfaceTypesResolver;
    let handler: AppHealthDeleteApiInterfaceTypesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteApiInterfaceTypesResolver,
                {
                    provide : AppHealthDeleteApiInterfaceTypesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteApiInterfaceTypesResolver>(AppHealthDeleteApiInterfaceTypesResolver);
        handler = module.get<AppHealthDeleteApiInterfaceTypesHandler>(AppHealthDeleteApiInterfaceTypesHandler);
    });

    test('AppHealthDeleteApiInterfaceTypesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApiInterfaceTypesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an appHealthMockApiInterfaceTypeData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApiInterfaceTypeData)));
            expect(await resolver.main()).toBe(appHealthMockApiInterfaceTypeData);
        });
    });
});
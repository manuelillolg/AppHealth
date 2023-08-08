/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthGetApiInterfaceTypesResolver } from './app-health-get-api-interface-types.resolver';
import { AppHealthGetApiInterfaceTypesHandler } from '../handlers/app-health-get-api-interface-types.handler';

// sources
import { appHealthMockApiInterfaceTypeData } from '@app/app-health/api-interface-type/infrastructure/mock/app-health-mock-api-interface-type.data';

describe('AppHealthGetApiInterfaceTypesResolver', () =>
{
    let resolver: AppHealthGetApiInterfaceTypesResolver;
    let handler: AppHealthGetApiInterfaceTypesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthGetApiInterfaceTypesResolver,
                {
                    provide : AppHealthGetApiInterfaceTypesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthGetApiInterfaceTypesResolver>(AppHealthGetApiInterfaceTypesResolver);
        handler = module.get<AppHealthGetApiInterfaceTypesHandler>(AppHealthGetApiInterfaceTypesHandler);
    });

    test('AppHealthGetApiInterfaceTypesResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthGetApiInterfaceTypesResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a appHealthMockApiInterfaceTypeData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApiInterfaceTypeData)));
            expect(await resolver.main()).toBe(appHealthMockApiInterfaceTypeData);
        });
    });
});
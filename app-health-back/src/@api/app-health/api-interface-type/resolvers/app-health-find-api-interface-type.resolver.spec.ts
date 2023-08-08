/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthFindApiInterfaceTypeResolver } from './app-health-find-api-interface-type.resolver';
import { AppHealthFindApiInterfaceTypeHandler } from '../handlers/app-health-find-api-interface-type.handler';

// sources
import { appHealthMockApiInterfaceTypeData } from '@app/app-health/api-interface-type/infrastructure/mock/app-health-mock-api-interface-type.data';

describe('AppHealthFindApiInterfaceTypeResolver', () =>
{
    let resolver: AppHealthFindApiInterfaceTypeResolver;
    let handler: AppHealthFindApiInterfaceTypeHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthFindApiInterfaceTypeResolver,
                {
                    provide : AppHealthFindApiInterfaceTypeHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthFindApiInterfaceTypeResolver>(AppHealthFindApiInterfaceTypeResolver);
        handler = module.get<AppHealthFindApiInterfaceTypeHandler>(AppHealthFindApiInterfaceTypeHandler);
    });

    test('AppHealthFindApiInterfaceTypeResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthFindApiInterfaceTypeResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a apiInterfaceType', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApiInterfaceTypeData[0])));
            expect(await resolver.main()).toBe(appHealthMockApiInterfaceTypeData[0]);
        });
    });
});
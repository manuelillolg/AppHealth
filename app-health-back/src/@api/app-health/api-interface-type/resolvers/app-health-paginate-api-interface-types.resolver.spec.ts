/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthPaginateApiInterfaceTypesResolver } from './app-health-paginate-api-interface-types.resolver';
import { AppHealthPaginateApiInterfaceTypesHandler } from '../handlers/app-health-paginate-api-interface-types.handler';

// sources
import { appHealthMockApiInterfaceTypeData } from '@app/app-health/api-interface-type/infrastructure/mock/app-health-mock-api-interface-type.data';

describe('AppHealthPaginateApiInterfaceTypesResolver', () =>
{
    let resolver: AppHealthPaginateApiInterfaceTypesResolver;
    let handler: AppHealthPaginateApiInterfaceTypesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthPaginateApiInterfaceTypesResolver,
                {
                    provide : AppHealthPaginateApiInterfaceTypesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthPaginateApiInterfaceTypesResolver>(AppHealthPaginateApiInterfaceTypesResolver);
        handler = module.get<AppHealthPaginateApiInterfaceTypesHandler>(AppHealthPaginateApiInterfaceTypesHandler);
    });

    test('AppHealthPaginateApiInterfaceTypesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthPaginateApiInterfaceTypesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a appHealthMockApiInterfaceTypeData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : appHealthMockApiInterfaceTypeData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : appHealthMockApiInterfaceTypeData,
            });
        });
    });
});
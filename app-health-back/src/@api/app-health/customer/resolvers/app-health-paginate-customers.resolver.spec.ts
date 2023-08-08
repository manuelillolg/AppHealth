/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthPaginateCustomersResolver } from './app-health-paginate-customers.resolver';
import { AppHealthPaginateCustomersHandler } from '../handlers/app-health-paginate-customers.handler';

// sources
import { appHealthMockCustomerData } from '@app/app-health/customer/infrastructure/mock/app-health-mock-customer.data';

describe('AppHealthPaginateCustomersResolver', () =>
{
    let resolver: AppHealthPaginateCustomersResolver;
    let handler: AppHealthPaginateCustomersHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthPaginateCustomersResolver,
                {
                    provide : AppHealthPaginateCustomersHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthPaginateCustomersResolver>(AppHealthPaginateCustomersResolver);
        handler = module.get<AppHealthPaginateCustomersHandler>(AppHealthPaginateCustomersHandler);
    });

    test('AppHealthPaginateCustomersResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthPaginateCustomersResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a appHealthMockCustomerData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : appHealthMockCustomerData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : appHealthMockCustomerData,
            });
        });
    });
});
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthGetCustomersResolver } from './app-health-get-customers.resolver';
import { AppHealthGetCustomersHandler } from '../handlers/app-health-get-customers.handler';

// sources
import { appHealthMockCustomerData } from '@app/app-health/customer/infrastructure/mock/app-health-mock-customer.data';

describe('AppHealthGetCustomersResolver', () =>
{
    let resolver: AppHealthGetCustomersResolver;
    let handler: AppHealthGetCustomersHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthGetCustomersResolver,
                {
                    provide : AppHealthGetCustomersHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthGetCustomersResolver>(AppHealthGetCustomersResolver);
        handler = module.get<AppHealthGetCustomersHandler>(AppHealthGetCustomersHandler);
    });

    test('AppHealthGetCustomersResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthGetCustomersResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a appHealthMockCustomerData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockCustomerData)));
            expect(await resolver.main()).toBe(appHealthMockCustomerData);
        });
    });
});
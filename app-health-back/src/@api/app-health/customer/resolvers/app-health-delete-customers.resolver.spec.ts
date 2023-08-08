/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteCustomersResolver } from './app-health-delete-customers.resolver';
import { AppHealthDeleteCustomersHandler } from '../handlers/app-health-delete-customers.handler';

// sources
import { appHealthMockCustomerData } from '@app/app-health/customer/infrastructure/mock/app-health-mock-customer.data';

describe('AppHealthDeleteCustomersResolver', () =>
{
    let resolver: AppHealthDeleteCustomersResolver;
    let handler: AppHealthDeleteCustomersHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteCustomersResolver,
                {
                    provide : AppHealthDeleteCustomersHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteCustomersResolver>(AppHealthDeleteCustomersResolver);
        handler = module.get<AppHealthDeleteCustomersHandler>(AppHealthDeleteCustomersHandler);
    });

    test('AppHealthDeleteCustomersResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteCustomersResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an appHealthMockCustomerData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockCustomerData)));
            expect(await resolver.main()).toBe(appHealthMockCustomerData);
        });
    });
});
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateCustomersResolver } from './app-health-create-customers.resolver';
import { AppHealthCreateCustomersHandler } from '../handlers/app-health-create-customers.handler';
import { AppHealthCreateCustomerInput } from '@api/graphql';

// sources
import { appHealthMockCustomerData } from '@app/app-health/customer/infrastructure/mock/app-health-mock-customer.data';

describe('AppHealthCreateCustomersResolver', () =>
{
    let resolver: AppHealthCreateCustomersResolver;
    let handler: AppHealthCreateCustomersHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateCustomersResolver,
                {
                    provide : AppHealthCreateCustomersHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateCustomersResolver>(AppHealthCreateCustomersResolver);
        handler = module.get<AppHealthCreateCustomersHandler>(AppHealthCreateCustomersHandler);
    });

    test('AppHealthCreateCustomersResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateCustomersResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an customers created', async () =>
        {
            expect(await resolver.main(<AppHealthCreateCustomerInput[]>appHealthMockCustomerData)).toBe(undefined);
        });
    });
});
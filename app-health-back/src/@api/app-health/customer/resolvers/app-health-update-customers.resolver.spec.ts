/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateCustomersResolver } from './app-health-update-customers.resolver';
import { AppHealthUpdateCustomersHandler } from '../handlers/app-health-update-customers.handler';
import { AppHealthUpdateCustomersInput } from '@api/graphql';

// sources
import { appHealthMockCustomerData } from '@app/app-health/customer/infrastructure/mock/app-health-mock-customer.data';

describe('AppHealthUpdateCustomersResolver', () =>
{
    let resolver: AppHealthUpdateCustomersResolver;
    let handler: AppHealthUpdateCustomersHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateCustomersResolver,
                {
                    provide : AppHealthUpdateCustomersHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateCustomersResolver>(AppHealthUpdateCustomersResolver);
        handler = module.get<AppHealthUpdateCustomersHandler>(AppHealthUpdateCustomersHandler);
    });

    test('AppHealthUpdateCustomersResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateCustomersResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a customers updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockCustomerData[0])));
            expect(await resolver.main(<AppHealthUpdateCustomersInput>appHealthMockCustomerData[0])).toBe(appHealthMockCustomerData[0]);
        });
    });
});
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateCustomerByIdResolver } from './app-health-update-customer-by-id.resolver';
import { AppHealthUpdateCustomerByIdHandler } from '../handlers/app-health-update-customer-by-id.handler';
import { AppHealthUpdateCustomerByIdInput } from '@api/graphql';

// sources
import { appHealthMockCustomerData } from '@app/app-health/customer/infrastructure/mock/app-health-mock-customer.data';

describe('AppHealthUpdateCustomerByIdResolver', () =>
{
    let resolver: AppHealthUpdateCustomerByIdResolver;
    let handler: AppHealthUpdateCustomerByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateCustomerByIdResolver,
                {
                    provide : AppHealthUpdateCustomerByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateCustomerByIdResolver>(AppHealthUpdateCustomerByIdResolver);
        handler = module.get<AppHealthUpdateCustomerByIdHandler>(AppHealthUpdateCustomerByIdHandler);
    });

    test('AppHealthUpdateCustomerByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateCustomerByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a customer by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockCustomerData[0])));
            expect(await resolver.main(<AppHealthUpdateCustomerByIdInput>appHealthMockCustomerData[0])).toBe(appHealthMockCustomerData[0]);
        });
    });
});
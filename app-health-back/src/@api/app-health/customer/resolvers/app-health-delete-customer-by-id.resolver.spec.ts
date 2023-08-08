/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteCustomerByIdResolver } from './app-health-delete-customer-by-id.resolver';
import { AppHealthDeleteCustomerByIdHandler } from '../handlers/app-health-delete-customer-by-id.handler';

// sources
import { appHealthMockCustomerData } from '@app/app-health/customer/infrastructure/mock/app-health-mock-customer.data';

describe('AppHealthDeleteCustomerByIdResolver', () =>
{
    let resolver: AppHealthDeleteCustomerByIdResolver;
    let handler: AppHealthDeleteCustomerByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteCustomerByIdResolver,
                {
                    provide : AppHealthDeleteCustomerByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteCustomerByIdResolver>(AppHealthDeleteCustomerByIdResolver);
        handler = module.get<AppHealthDeleteCustomerByIdHandler>(AppHealthDeleteCustomerByIdHandler);
    });

    test('AppHealthDeleteCustomerByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteCustomerByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an customer deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockCustomerData[0])));
            expect(await resolver.main(appHealthMockCustomerData[0].id)).toBe(appHealthMockCustomerData[0]);
        });
    });
});
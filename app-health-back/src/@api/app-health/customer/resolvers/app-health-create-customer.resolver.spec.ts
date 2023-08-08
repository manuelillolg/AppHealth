/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateCustomerResolver } from './app-health-create-customer.resolver';
import { AppHealthCreateCustomerHandler } from '../handlers/app-health-create-customer.handler';
import { AppHealthCreateCustomerInput } from '@api/graphql';

// sources
import { appHealthMockCustomerData } from '@app/app-health/customer/infrastructure/mock/app-health-mock-customer.data';

describe('AppHealthCreateCustomerResolver', () =>
{
    let resolver: AppHealthCreateCustomerResolver;
    let handler: AppHealthCreateCustomerHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthCreateCustomerResolver,
                {
                    provide : AppHealthCreateCustomerHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateCustomerResolver>(AppHealthCreateCustomerResolver);
        handler = module.get<AppHealthCreateCustomerHandler>(AppHealthCreateCustomerHandler);
    });

    test('AppHealthCreateCustomerResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateCustomerResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an customer created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockCustomerData[0])));
            expect(await resolver.main(<AppHealthCreateCustomerInput>appHealthMockCustomerData[0])).toBe(appHealthMockCustomerData[0]);
        });
    });
});
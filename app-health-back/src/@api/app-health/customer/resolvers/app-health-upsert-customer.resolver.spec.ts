/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpsertCustomerResolver } from './app-health-upsert-customer.resolver';
import { AppHealthUpsertCustomerHandler } from '../handlers/app-health-upsert-customer.handler';
import { AppHealthUpdateCustomerByIdInput } from '@api/graphql';

// sources
import { appHealthMockCustomerData } from '@app/app-health/customer/infrastructure/mock/app-health-mock-customer.data';

describe('AppHealthUpsertCustomerResolver', () =>
{
    let resolver: AppHealthUpsertCustomerResolver;
    let handler: AppHealthUpsertCustomerHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpsertCustomerResolver,
                {
                    provide : AppHealthUpsertCustomerHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpsertCustomerResolver>(AppHealthUpsertCustomerResolver);
        handler = module.get<AppHealthUpsertCustomerHandler>(AppHealthUpsertCustomerHandler);
    });

    test('AppHealthUpsertCustomerResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpsertCustomerResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an customer upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockCustomerData[0])));
            expect(await resolver.main(<AppHealthUpdateCustomerByIdInput>appHealthMockCustomerData[0])).toBe(appHealthMockCustomerData[0]);
        });
    });
});
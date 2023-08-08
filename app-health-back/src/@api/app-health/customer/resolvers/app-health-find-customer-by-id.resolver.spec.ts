/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthFindCustomerByIdResolver } from './app-health-find-customer-by-id.resolver';
import { AppHealthFindCustomerByIdHandler } from '../handlers/app-health-find-customer-by-id.handler';

// sources
import { appHealthMockCustomerData } from '@app/app-health/customer/infrastructure/mock/app-health-mock-customer.data';

describe('AppHealthFindCustomerByIdResolver', () =>
{
    let resolver: AppHealthFindCustomerByIdResolver;
    let handler: AppHealthFindCustomerByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthFindCustomerByIdResolver,
                {
                    provide : AppHealthFindCustomerByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthFindCustomerByIdResolver>(AppHealthFindCustomerByIdResolver);
        handler = module.get<AppHealthFindCustomerByIdHandler>(AppHealthFindCustomerByIdHandler);
    });

    test('AppHealthFindCustomerByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthFindCustomerByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an customer by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockCustomerData[0])));
            expect(await resolver.main(appHealthMockCustomerData[0].id)).toBe(appHealthMockCustomerData[0]);
        });
    });
});
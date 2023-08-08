/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteApiInterfaceTypeByIdResolver } from './app-health-delete-api-interface-type-by-id.resolver';
import { AppHealthDeleteApiInterfaceTypeByIdHandler } from '../handlers/app-health-delete-api-interface-type-by-id.handler';

// sources
import { appHealthMockApiInterfaceTypeData } from '@app/app-health/api-interface-type/infrastructure/mock/app-health-mock-api-interface-type.data';

describe('AppHealthDeleteApiInterfaceTypeByIdResolver', () =>
{
    let resolver: AppHealthDeleteApiInterfaceTypeByIdResolver;
    let handler: AppHealthDeleteApiInterfaceTypeByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteApiInterfaceTypeByIdResolver,
                {
                    provide : AppHealthDeleteApiInterfaceTypeByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteApiInterfaceTypeByIdResolver>(AppHealthDeleteApiInterfaceTypeByIdResolver);
        handler = module.get<AppHealthDeleteApiInterfaceTypeByIdHandler>(AppHealthDeleteApiInterfaceTypeByIdHandler);
    });

    test('AppHealthDeleteApiInterfaceTypeByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApiInterfaceTypeByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an apiInterfaceType deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApiInterfaceTypeData[0])));
            expect(await resolver.main(appHealthMockApiInterfaceTypeData[0].id)).toBe(appHealthMockApiInterfaceTypeData[0]);
        });
    });
});
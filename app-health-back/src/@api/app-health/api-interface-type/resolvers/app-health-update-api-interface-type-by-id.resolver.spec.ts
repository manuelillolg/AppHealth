/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateApiInterfaceTypeByIdResolver } from './app-health-update-api-interface-type-by-id.resolver';
import { AppHealthUpdateApiInterfaceTypeByIdHandler } from '../handlers/app-health-update-api-interface-type-by-id.handler';
import { AppHealthUpdateApiInterfaceTypeByIdInput } from '@api/graphql';

// sources
import { appHealthMockApiInterfaceTypeData } from '@app/app-health/api-interface-type/infrastructure/mock/app-health-mock-api-interface-type.data';

describe('AppHealthUpdateApiInterfaceTypeByIdResolver', () =>
{
    let resolver: AppHealthUpdateApiInterfaceTypeByIdResolver;
    let handler: AppHealthUpdateApiInterfaceTypeByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateApiInterfaceTypeByIdResolver,
                {
                    provide : AppHealthUpdateApiInterfaceTypeByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateApiInterfaceTypeByIdResolver>(AppHealthUpdateApiInterfaceTypeByIdResolver);
        handler = module.get<AppHealthUpdateApiInterfaceTypeByIdHandler>(AppHealthUpdateApiInterfaceTypeByIdHandler);
    });

    test('AppHealthUpdateApiInterfaceTypeByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateApiInterfaceTypeByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a apiInterfaceType by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApiInterfaceTypeData[0])));
            expect(await resolver.main(<AppHealthUpdateApiInterfaceTypeByIdInput>appHealthMockApiInterfaceTypeData[0])).toBe(appHealthMockApiInterfaceTypeData[0]);
        });
    });
});
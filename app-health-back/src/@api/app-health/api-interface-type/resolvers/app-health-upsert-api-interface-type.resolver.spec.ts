/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpsertApiInterfaceTypeResolver } from './app-health-upsert-api-interface-type.resolver';
import { AppHealthUpsertApiInterfaceTypeHandler } from '../handlers/app-health-upsert-api-interface-type.handler';
import { AppHealthUpdateApiInterfaceTypeByIdInput } from '@api/graphql';

// sources
import { appHealthMockApiInterfaceTypeData } from '@app/app-health/api-interface-type/infrastructure/mock/app-health-mock-api-interface-type.data';

describe('AppHealthUpsertApiInterfaceTypeResolver', () =>
{
    let resolver: AppHealthUpsertApiInterfaceTypeResolver;
    let handler: AppHealthUpsertApiInterfaceTypeHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpsertApiInterfaceTypeResolver,
                {
                    provide : AppHealthUpsertApiInterfaceTypeHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpsertApiInterfaceTypeResolver>(AppHealthUpsertApiInterfaceTypeResolver);
        handler = module.get<AppHealthUpsertApiInterfaceTypeHandler>(AppHealthUpsertApiInterfaceTypeHandler);
    });

    test('AppHealthUpsertApiInterfaceTypeResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpsertApiInterfaceTypeResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an apiInterfaceType upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApiInterfaceTypeData[0])));
            expect(await resolver.main(<AppHealthUpdateApiInterfaceTypeByIdInput>appHealthMockApiInterfaceTypeData[0])).toBe(appHealthMockApiInterfaceTypeData[0]);
        });
    });
});
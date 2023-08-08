/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateApiInterfaceTypeResolver } from './app-health-create-api-interface-type.resolver';
import { AppHealthCreateApiInterfaceTypeHandler } from '../handlers/app-health-create-api-interface-type.handler';
import { AppHealthCreateApiInterfaceTypeInput } from '@api/graphql';

// sources
import { appHealthMockApiInterfaceTypeData } from '@app/app-health/api-interface-type/infrastructure/mock/app-health-mock-api-interface-type.data';

describe('AppHealthCreateApiInterfaceTypeResolver', () =>
{
    let resolver: AppHealthCreateApiInterfaceTypeResolver;
    let handler: AppHealthCreateApiInterfaceTypeHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthCreateApiInterfaceTypeResolver,
                {
                    provide : AppHealthCreateApiInterfaceTypeHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateApiInterfaceTypeResolver>(AppHealthCreateApiInterfaceTypeResolver);
        handler = module.get<AppHealthCreateApiInterfaceTypeHandler>(AppHealthCreateApiInterfaceTypeHandler);
    });

    test('AppHealthCreateApiInterfaceTypeResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateApiInterfaceTypeResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an apiInterfaceType created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApiInterfaceTypeData[0])));
            expect(await resolver.main(<AppHealthCreateApiInterfaceTypeInput>appHealthMockApiInterfaceTypeData[0])).toBe(appHealthMockApiInterfaceTypeData[0]);
        });
    });
});
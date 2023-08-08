import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateApiInterfaceTypesResolver } from './app-health-create-api-interface-types.resolver';
import { AppHealthCreateApiInterfaceTypesHandler } from '../handlers/app-health-create-api-interface-types.handler';
import { AppHealthCreateApiInterfaceTypeInput } from '@api/graphql';

// sources
import { appHealthMockApiInterfaceTypeData } from '@app/app-health/api-interface-type/infrastructure/mock/app-health-mock-api-interface-type.data';

describe('AppHealthCreateApiInterfaceTypesResolver', () =>
{
    let resolver: AppHealthCreateApiInterfaceTypesResolver;
    let handler: AppHealthCreateApiInterfaceTypesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateApiInterfaceTypesResolver,
                {
                    provide : AppHealthCreateApiInterfaceTypesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateApiInterfaceTypesResolver>(AppHealthCreateApiInterfaceTypesResolver);
        handler = module.get<AppHealthCreateApiInterfaceTypesHandler>(AppHealthCreateApiInterfaceTypesHandler);
    });

    test('AppHealthCreateApiInterfaceTypesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateApiInterfaceTypesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an apiInterfaceTypes created', async () =>
        {
            expect(await resolver.main(<AppHealthCreateApiInterfaceTypeInput[]>appHealthMockApiInterfaceTypeData)).toBe(undefined);
        });
    });
});
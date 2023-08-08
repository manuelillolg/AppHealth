/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateApplicationApiResolver } from './app-health-create-application-api.resolver';
import { AppHealthCreateApplicationApiHandler } from '../handlers/app-health-create-application-api.handler';
import { AppHealthCreateApplicationApiInput } from '@api/graphql';

// sources
import { appHealthMockApplicationApiData } from '@app/app-health/application-api/infrastructure/mock/app-health-mock-application-api.data';

describe('AppHealthCreateApplicationApiResolver', () =>
{
    let resolver: AppHealthCreateApplicationApiResolver;
    let handler: AppHealthCreateApplicationApiHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthCreateApplicationApiResolver,
                {
                    provide : AppHealthCreateApplicationApiHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateApplicationApiResolver>(AppHealthCreateApplicationApiResolver);
        handler = module.get<AppHealthCreateApplicationApiHandler>(AppHealthCreateApplicationApiHandler);
    });

    test('AppHealthCreateApplicationApiResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateApplicationApiResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationApi created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationApiData[0])));
            expect(await resolver.main(<AppHealthCreateApplicationApiInput>appHealthMockApplicationApiData[0])).toBe(appHealthMockApplicationApiData[0]);
        });
    });
});
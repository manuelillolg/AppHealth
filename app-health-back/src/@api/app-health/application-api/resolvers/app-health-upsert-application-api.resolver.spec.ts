/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpsertApplicationApiResolver } from './app-health-upsert-application-api.resolver';
import { AppHealthUpsertApplicationApiHandler } from '../handlers/app-health-upsert-application-api.handler';
import { AppHealthUpdateApplicationApiByIdInput } from '@api/graphql';

// sources
import { appHealthMockApplicationApiData } from '@app/app-health/application-api/infrastructure/mock/app-health-mock-application-api.data';

describe('AppHealthUpsertApplicationApiResolver', () =>
{
    let resolver: AppHealthUpsertApplicationApiResolver;
    let handler: AppHealthUpsertApplicationApiHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpsertApplicationApiResolver,
                {
                    provide : AppHealthUpsertApplicationApiHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpsertApplicationApiResolver>(AppHealthUpsertApplicationApiResolver);
        handler = module.get<AppHealthUpsertApplicationApiHandler>(AppHealthUpsertApplicationApiHandler);
    });

    test('AppHealthUpsertApplicationApiResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpsertApplicationApiResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationApi upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationApiData[0])));
            expect(await resolver.main(<AppHealthUpdateApplicationApiByIdInput>appHealthMockApplicationApiData[0])).toBe(appHealthMockApplicationApiData[0]);
        });
    });
});
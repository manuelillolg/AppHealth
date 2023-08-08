/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpsertApplicationResolver } from './app-health-upsert-application.resolver';
import { AppHealthUpsertApplicationHandler } from '../handlers/app-health-upsert-application.handler';
import { AppHealthUpdateApplicationByIdInput } from '@api/graphql';

// sources
import { appHealthMockApplicationData } from '@app/app-health/application/infrastructure/mock/app-health-mock-application.data';

describe('AppHealthUpsertApplicationResolver', () =>
{
    let resolver: AppHealthUpsertApplicationResolver;
    let handler: AppHealthUpsertApplicationHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpsertApplicationResolver,
                {
                    provide : AppHealthUpsertApplicationHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpsertApplicationResolver>(AppHealthUpsertApplicationResolver);
        handler = module.get<AppHealthUpsertApplicationHandler>(AppHealthUpsertApplicationHandler);
    });

    test('AppHealthUpsertApplicationResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpsertApplicationResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an application upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationData[0])));
            expect(await resolver.main(<AppHealthUpdateApplicationByIdInput>appHealthMockApplicationData[0])).toBe(appHealthMockApplicationData[0]);
        });
    });
});
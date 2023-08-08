/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateApplicationApiByIdResolver } from './app-health-update-application-api-by-id.resolver';
import { AppHealthUpdateApplicationApiByIdHandler } from '../handlers/app-health-update-application-api-by-id.handler';
import { AppHealthUpdateApplicationApiByIdInput } from '@api/graphql';

// sources
import { appHealthMockApplicationApiData } from '@app/app-health/application-api/infrastructure/mock/app-health-mock-application-api.data';

describe('AppHealthUpdateApplicationApiByIdResolver', () =>
{
    let resolver: AppHealthUpdateApplicationApiByIdResolver;
    let handler: AppHealthUpdateApplicationApiByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateApplicationApiByIdResolver,
                {
                    provide : AppHealthUpdateApplicationApiByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateApplicationApiByIdResolver>(AppHealthUpdateApplicationApiByIdResolver);
        handler = module.get<AppHealthUpdateApplicationApiByIdHandler>(AppHealthUpdateApplicationApiByIdHandler);
    });

    test('AppHealthUpdateApplicationApiByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateApplicationApiByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a applicationApi by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationApiData[0])));
            expect(await resolver.main(<AppHealthUpdateApplicationApiByIdInput>appHealthMockApplicationApiData[0])).toBe(appHealthMockApplicationApiData[0]);
        });
    });
});
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteApplicationApiByIdResolver } from './app-health-delete-application-api-by-id.resolver';
import { AppHealthDeleteApplicationApiByIdHandler } from '../handlers/app-health-delete-application-api-by-id.handler';

// sources
import { appHealthMockApplicationApiData } from '@app/app-health/application-api/infrastructure/mock/app-health-mock-application-api.data';

describe('AppHealthDeleteApplicationApiByIdResolver', () =>
{
    let resolver: AppHealthDeleteApplicationApiByIdResolver;
    let handler: AppHealthDeleteApplicationApiByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteApplicationApiByIdResolver,
                {
                    provide : AppHealthDeleteApplicationApiByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteApplicationApiByIdResolver>(AppHealthDeleteApplicationApiByIdResolver);
        handler = module.get<AppHealthDeleteApplicationApiByIdHandler>(AppHealthDeleteApplicationApiByIdHandler);
    });

    test('AppHealthDeleteApplicationApiByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApplicationApiByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationApi deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationApiData[0])));
            expect(await resolver.main(appHealthMockApplicationApiData[0].id)).toBe(appHealthMockApplicationApiData[0]);
        });
    });
});
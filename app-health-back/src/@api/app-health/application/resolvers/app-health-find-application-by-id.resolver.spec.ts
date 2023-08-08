/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthFindApplicationByIdResolver } from './app-health-find-application-by-id.resolver';
import { AppHealthFindApplicationByIdHandler } from '../handlers/app-health-find-application-by-id.handler';

// sources
import { appHealthMockApplicationData } from '@app/app-health/application/infrastructure/mock/app-health-mock-application.data';

describe('AppHealthFindApplicationByIdResolver', () =>
{
    let resolver: AppHealthFindApplicationByIdResolver;
    let handler: AppHealthFindApplicationByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthFindApplicationByIdResolver,
                {
                    provide : AppHealthFindApplicationByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthFindApplicationByIdResolver>(AppHealthFindApplicationByIdResolver);
        handler = module.get<AppHealthFindApplicationByIdHandler>(AppHealthFindApplicationByIdHandler);
    });

    test('AppHealthFindApplicationByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthFindApplicationByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an application by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationData[0])));
            expect(await resolver.main(appHealthMockApplicationData[0].id)).toBe(appHealthMockApplicationData[0]);
        });
    });
});
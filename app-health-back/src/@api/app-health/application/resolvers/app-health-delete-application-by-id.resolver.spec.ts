/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteApplicationByIdResolver } from './app-health-delete-application-by-id.resolver';
import { AppHealthDeleteApplicationByIdHandler } from '../handlers/app-health-delete-application-by-id.handler';

// sources
import { appHealthMockApplicationData } from '@app/app-health/application/infrastructure/mock/app-health-mock-application.data';

describe('AppHealthDeleteApplicationByIdResolver', () =>
{
    let resolver: AppHealthDeleteApplicationByIdResolver;
    let handler: AppHealthDeleteApplicationByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteApplicationByIdResolver,
                {
                    provide : AppHealthDeleteApplicationByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteApplicationByIdResolver>(AppHealthDeleteApplicationByIdResolver);
        handler = module.get<AppHealthDeleteApplicationByIdHandler>(AppHealthDeleteApplicationByIdHandler);
    });

    test('AppHealthDeleteApplicationByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApplicationByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an application deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationData[0])));
            expect(await resolver.main(appHealthMockApplicationData[0].id)).toBe(appHealthMockApplicationData[0]);
        });
    });
});
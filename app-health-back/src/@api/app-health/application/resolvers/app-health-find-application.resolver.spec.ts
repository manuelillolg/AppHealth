/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthFindApplicationResolver } from './app-health-find-application.resolver';
import { AppHealthFindApplicationHandler } from '../handlers/app-health-find-application.handler';

// sources
import { appHealthMockApplicationData } from '@app/app-health/application/infrastructure/mock/app-health-mock-application.data';

describe('AppHealthFindApplicationResolver', () =>
{
    let resolver: AppHealthFindApplicationResolver;
    let handler: AppHealthFindApplicationHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthFindApplicationResolver,
                {
                    provide : AppHealthFindApplicationHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthFindApplicationResolver>(AppHealthFindApplicationResolver);
        handler = module.get<AppHealthFindApplicationHandler>(AppHealthFindApplicationHandler);
    });

    test('AppHealthFindApplicationResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthFindApplicationResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a application', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationData[0])));
            expect(await resolver.main()).toBe(appHealthMockApplicationData[0]);
        });
    });
});
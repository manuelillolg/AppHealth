/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthDeleteApplicationsResolver } from './app-health-delete-applications.resolver';
import { AppHealthDeleteApplicationsHandler } from '../handlers/app-health-delete-applications.handler';

// sources
import { appHealthMockApplicationData } from '@app/app-health/application/infrastructure/mock/app-health-mock-application.data';

describe('AppHealthDeleteApplicationsResolver', () =>
{
    let resolver: AppHealthDeleteApplicationsResolver;
    let handler: AppHealthDeleteApplicationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthDeleteApplicationsResolver,
                {
                    provide : AppHealthDeleteApplicationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthDeleteApplicationsResolver>(AppHealthDeleteApplicationsResolver);
        handler = module.get<AppHealthDeleteApplicationsHandler>(AppHealthDeleteApplicationsHandler);
    });

    test('AppHealthDeleteApplicationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthDeleteApplicationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an appHealthMockApplicationData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationData)));
            expect(await resolver.main()).toBe(appHealthMockApplicationData);
        });
    });
});
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthUpdateApplicationsResolver } from './app-health-update-applications.resolver';
import { AppHealthUpdateApplicationsHandler } from '../handlers/app-health-update-applications.handler';
import { AppHealthUpdateApplicationsInput } from '@api/graphql';

// sources
import { appHealthMockApplicationData } from '@app/app-health/application/infrastructure/mock/app-health-mock-application.data';

describe('AppHealthUpdateApplicationsResolver', () =>
{
    let resolver: AppHealthUpdateApplicationsResolver;
    let handler: AppHealthUpdateApplicationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthUpdateApplicationsResolver,
                {
                    provide : AppHealthUpdateApplicationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthUpdateApplicationsResolver>(AppHealthUpdateApplicationsResolver);
        handler = module.get<AppHealthUpdateApplicationsHandler>(AppHealthUpdateApplicationsHandler);
    });

    test('AppHealthUpdateApplicationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthUpdateApplicationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a applications updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationData[0])));
            expect(await resolver.main(<AppHealthUpdateApplicationsInput>appHealthMockApplicationData[0])).toBe(appHealthMockApplicationData[0]);
        });
    });
});
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateApplicationViewResolver } from './app-health-create-application-view.resolver';
import { AppHealthCreateApplicationViewHandler } from '../handlers/app-health-create-application-view.handler';
import { AppHealthCreateApplicationViewInput } from '@api/graphql';

// sources
import { appHealthMockApplicationViewData } from '@app/app-health/application-view/infrastructure/mock/app-health-mock-application-view.data';

describe('AppHealthCreateApplicationViewResolver', () =>
{
    let resolver: AppHealthCreateApplicationViewResolver;
    let handler: AppHealthCreateApplicationViewHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthCreateApplicationViewResolver,
                {
                    provide : AppHealthCreateApplicationViewHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateApplicationViewResolver>(AppHealthCreateApplicationViewResolver);
        handler = module.get<AppHealthCreateApplicationViewHandler>(AppHealthCreateApplicationViewHandler);
    });

    test('AppHealthCreateApplicationViewResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateApplicationViewResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applicationView created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationViewData[0])));
            expect(await resolver.main(<AppHealthCreateApplicationViewInput>appHealthMockApplicationViewData[0])).toBe(appHealthMockApplicationViewData[0]);
        });
    });
});
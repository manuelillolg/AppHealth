/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateApplicationResolver } from './app-health-create-application.resolver';
import { AppHealthCreateApplicationHandler } from '../handlers/app-health-create-application.handler';
import { AppHealthCreateApplicationInput } from '@api/graphql';

// sources
import { appHealthMockApplicationData } from '@app/app-health/application/infrastructure/mock/app-health-mock-application.data';

describe('AppHealthCreateApplicationResolver', () =>
{
    let resolver: AppHealthCreateApplicationResolver;
    let handler: AppHealthCreateApplicationHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthCreateApplicationResolver,
                {
                    provide : AppHealthCreateApplicationHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateApplicationResolver>(AppHealthCreateApplicationResolver);
        handler = module.get<AppHealthCreateApplicationHandler>(AppHealthCreateApplicationHandler);
    });

    test('AppHealthCreateApplicationResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateApplicationResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an application created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationData[0])));
            expect(await resolver.main(<AppHealthCreateApplicationInput>appHealthMockApplicationData[0])).toBe(appHealthMockApplicationData[0]);
        });
    });
});
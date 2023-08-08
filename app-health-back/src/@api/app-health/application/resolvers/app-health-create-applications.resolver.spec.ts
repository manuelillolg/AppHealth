import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateApplicationsResolver } from './app-health-create-applications.resolver';
import { AppHealthCreateApplicationsHandler } from '../handlers/app-health-create-applications.handler';
import { AppHealthCreateApplicationInput } from '@api/graphql';

// sources
import { appHealthMockApplicationData } from '@app/app-health/application/infrastructure/mock/app-health-mock-application.data';

describe('AppHealthCreateApplicationsResolver', () =>
{
    let resolver: AppHealthCreateApplicationsResolver;
    let handler: AppHealthCreateApplicationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppHealthCreateApplicationsResolver,
                {
                    provide : AppHealthCreateApplicationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateApplicationsResolver>(AppHealthCreateApplicationsResolver);
        handler = module.get<AppHealthCreateApplicationsHandler>(AppHealthCreateApplicationsHandler);
    });

    test('AppHealthCreateApplicationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateApplicationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an applications created', async () =>
        {
            expect(await resolver.main(<AppHealthCreateApplicationInput[]>appHealthMockApplicationData)).toBe(undefined);
        });
    });
});
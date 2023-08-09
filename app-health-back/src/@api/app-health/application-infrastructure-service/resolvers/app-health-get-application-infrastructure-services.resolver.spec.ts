/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppHealthGetApplicationInfrastructureServicesHandler, AppHealthGetApplicationInfrastructureServicesResolver } from '@api/app-health/application-infrastructure-service';
import { appHealthMockApplicationInfrastructureServiceData } from '@app/app-health/application-infrastructure-service';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppHealthGetApplicationInfrastructureServicesResolver', () =>
{
    let resolver: AppHealthGetApplicationInfrastructureServicesResolver;
    let handler: AppHealthGetApplicationInfrastructureServicesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthGetApplicationInfrastructureServicesResolver,
                {
                    provide : AppHealthGetApplicationInfrastructureServicesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthGetApplicationInfrastructureServicesResolver>(AppHealthGetApplicationInfrastructureServicesResolver);
        handler = module.get<AppHealthGetApplicationInfrastructureServicesHandler>(AppHealthGetApplicationInfrastructureServicesHandler);
    });

    test('AppHealthGetApplicationInfrastructureServicesResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthGetApplicationInfrastructureServicesResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a appHealthMockApplicationInfrastructureServiceData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockApplicationInfrastructureServiceData)));
            expect(await resolver.main()).toBe(appHealthMockApplicationInfrastructureServiceData);
        });
    });
});

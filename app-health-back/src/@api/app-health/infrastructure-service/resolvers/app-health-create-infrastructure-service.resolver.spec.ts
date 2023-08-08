/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AppHealthCreateInfrastructureServiceResolver } from './app-health-create-infrastructure-service.resolver';
import { AppHealthCreateInfrastructureServiceHandler } from '../handlers/app-health-create-infrastructure-service.handler';
import { AppHealthCreateInfrastructureServiceInput } from '@api/graphql';

// sources
import { appHealthMockInfrastructureServiceData } from '@app/app-health/infrastructure-service/infrastructure/mock/app-health-mock-infrastructure-service.data';

describe('AppHealthCreateInfrastructureServiceResolver', () =>
{
    let resolver: AppHealthCreateInfrastructureServiceResolver;
    let handler: AppHealthCreateInfrastructureServiceHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AppHealthCreateInfrastructureServiceResolver,
                {
                    provide : AppHealthCreateInfrastructureServiceHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AppHealthCreateInfrastructureServiceResolver>(AppHealthCreateInfrastructureServiceResolver);
        handler = module.get<AppHealthCreateInfrastructureServiceHandler>(AppHealthCreateInfrastructureServiceHandler);
    });

    test('AppHealthCreateInfrastructureServiceResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AppHealthCreateInfrastructureServiceResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an infrastructureService created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(appHealthMockInfrastructureServiceData[0])));
            expect(await resolver.main(<AppHealthCreateInfrastructureServiceInput>appHealthMockInfrastructureServiceData[0])).toBe(appHealthMockInfrastructureServiceData[0]);
        });
    });
});
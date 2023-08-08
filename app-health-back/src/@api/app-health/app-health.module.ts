import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SharedModule } from '@aurora/shared.module';
import { AppHealthSeeder } from './app-health.seeder';
import { AppHealthModels, AppHealthHandlers, AppHealthServices, AppHealthRepositories, AppHealthSagas } from '../../@app/app-health';
import { AppHealthApplicationAuthenticationControllers, AppHealthApplicationAuthenticationResolvers, AppHealthApplicationAuthenticationApiHandlers, AppHealthApplicationAuthenticationServices } from './application-authentication';
import { AppHealthAuthorizationInterfaceControllers, AppHealthAuthorizationInterfaceResolvers, AppHealthAuthorizationInterfaceApiHandlers, AppHealthAuthorizationInterfaceServices } from './authorization-interface';
import { AppHealthApplicationAuthorizationControllers, AppHealthApplicationAuthorizationResolvers, AppHealthApplicationAuthorizationApiHandlers, AppHealthApplicationAuthorizationServices } from './application-authorization';
import { AppHealthApiInterfaceTypeControllers, AppHealthApiInterfaceTypeResolvers, AppHealthApiInterfaceTypeApiHandlers, AppHealthApiInterfaceTypeServices } from './api-interface-type';
import { AppHealthApplicationApiControllers, AppHealthApplicationApiResolvers, AppHealthApplicationApiApiHandlers, AppHealthApplicationApiServices } from './application-api';
import { AppHealthApplicationIntegrationControllers, AppHealthApplicationIntegrationResolvers, AppHealthApplicationIntegrationApiHandlers, AppHealthApplicationIntegrationServices } from './application-integration';
import { AppHealthInfrastructureProviderControllers, AppHealthInfrastructureProviderResolvers, AppHealthInfrastructureProviderApiHandlers, AppHealthInfrastructureProviderServices } from './infrastructure-provider';
import { AppHealthInfrastructureServiceControllers, AppHealthInfrastructureServiceResolvers, AppHealthInfrastructureServiceApiHandlers, AppHealthInfrastructureServiceServices } from './infrastructure-service';
import { AppHealthApplicationInfrastructureServiceControllers, AppHealthApplicationInfrastructureServiceResolvers, AppHealthApplicationInfrastructureServiceApiHandlers, AppHealthApplicationInfrastructureServiceServices } from './application-infrastructure-service';
import { AppHealthAuthenticationInterfaceControllers, AppHealthAuthenticationInterfaceResolvers, AppHealthAuthenticationInterfaceApiHandlers, AppHealthAuthenticationInterfaceServices } from './authentication-interface';
import { AppHealthApplicationLanguageControllers, AppHealthApplicationLanguageResolvers, AppHealthApplicationLanguageApiHandlers, AppHealthApplicationLanguageServices } from './application-language';
import { AppHealthLanguageControllers, AppHealthLanguageResolvers, AppHealthLanguageApiHandlers, AppHealthLanguageServices } from './language';
import { AppHealthApplicationDatabaseControllers, AppHealthApplicationDatabaseResolvers, AppHealthApplicationDatabaseApiHandlers, AppHealthApplicationDatabaseServices } from './application-database';
import { AppHealthDatabaseControllers, AppHealthDatabaseResolvers, AppHealthDatabaseApiHandlers, AppHealthDatabaseServices } from './database';
import { AppHealthApplicationViewControllers, AppHealthApplicationViewResolvers, AppHealthApplicationViewApiHandlers, AppHealthApplicationViewServices } from './application-view';
import { AppHealthApplicationControllers, AppHealthApplicationResolvers, AppHealthApplicationApiHandlers, AppHealthApplicationServices } from './application';
import { AppHealthTechnicalSolutionControllers, AppHealthTechnicalSolutionResolvers, AppHealthTechnicalSolutionApiHandlers, AppHealthTechnicalSolutionServices } from './technical-solution';
import { AppHealthCustomerControllers, AppHealthCustomerResolvers, AppHealthCustomerApiHandlers, AppHealthCustomerServices } from './customer';

@Module({
    imports: [
        SharedModule,
        SequelizeModule.forFeature([
                ...AppHealthModels
            ])
    ],
    controllers: [
        ...AppHealthApplicationAuthenticationControllers,
        ...AppHealthAuthorizationInterfaceControllers,
        ...AppHealthApplicationAuthorizationControllers,
        ...AppHealthApiInterfaceTypeControllers,
        ...AppHealthApplicationApiControllers,
        ...AppHealthApplicationIntegrationControllers,
        ...AppHealthInfrastructureProviderControllers,
        ...AppHealthInfrastructureServiceControllers,
        ...AppHealthApplicationInfrastructureServiceControllers,
        ...AppHealthAuthenticationInterfaceControllers,
        ...AppHealthApplicationLanguageControllers,
        ...AppHealthLanguageControllers,
        ...AppHealthApplicationDatabaseControllers,
        ...AppHealthDatabaseControllers,
        ...AppHealthApplicationViewControllers,
        ...AppHealthApplicationControllers,
        ...AppHealthTechnicalSolutionControllers,
        ...AppHealthCustomerControllers
    ],
    providers: [
        AppHealthSeeder,
        ...AppHealthHandlers,
        ...AppHealthServices,
        ...AppHealthRepositories,
        ...AppHealthSagas,
        ...AppHealthApplicationAuthenticationResolvers,
        ...AppHealthApplicationAuthenticationApiHandlers,
        ...AppHealthApplicationAuthenticationServices,
        ...AppHealthAuthorizationInterfaceResolvers,
        ...AppHealthAuthorizationInterfaceApiHandlers,
        ...AppHealthAuthorizationInterfaceServices,
        ...AppHealthApplicationAuthorizationResolvers,
        ...AppHealthApplicationAuthorizationApiHandlers,
        ...AppHealthApplicationAuthorizationServices,
        ...AppHealthApiInterfaceTypeResolvers,
        ...AppHealthApiInterfaceTypeApiHandlers,
        ...AppHealthApiInterfaceTypeServices,
        ...AppHealthApplicationApiResolvers,
        ...AppHealthApplicationApiApiHandlers,
        ...AppHealthApplicationApiServices,
        ...AppHealthApplicationIntegrationResolvers,
        ...AppHealthApplicationIntegrationApiHandlers,
        ...AppHealthApplicationIntegrationServices,
        ...AppHealthInfrastructureProviderResolvers,
        ...AppHealthInfrastructureProviderApiHandlers,
        ...AppHealthInfrastructureProviderServices,
        ...AppHealthInfrastructureServiceResolvers,
        ...AppHealthInfrastructureServiceApiHandlers,
        ...AppHealthInfrastructureServiceServices,
        ...AppHealthApplicationInfrastructureServiceResolvers,
        ...AppHealthApplicationInfrastructureServiceApiHandlers,
        ...AppHealthApplicationInfrastructureServiceServices,
        ...AppHealthAuthenticationInterfaceResolvers,
        ...AppHealthAuthenticationInterfaceApiHandlers,
        ...AppHealthAuthenticationInterfaceServices,
        ...AppHealthApplicationLanguageResolvers,
        ...AppHealthApplicationLanguageApiHandlers,
        ...AppHealthApplicationLanguageServices,
        ...AppHealthLanguageResolvers,
        ...AppHealthLanguageApiHandlers,
        ...AppHealthLanguageServices,
        ...AppHealthApplicationDatabaseResolvers,
        ...AppHealthApplicationDatabaseApiHandlers,
        ...AppHealthApplicationDatabaseServices,
        ...AppHealthDatabaseResolvers,
        ...AppHealthDatabaseApiHandlers,
        ...AppHealthDatabaseServices,
        ...AppHealthApplicationViewResolvers,
        ...AppHealthApplicationViewApiHandlers,
        ...AppHealthApplicationViewServices,
        ...AppHealthApplicationResolvers,
        ...AppHealthApplicationApiHandlers,
        ...AppHealthApplicationServices,
        ...AppHealthTechnicalSolutionResolvers,
        ...AppHealthTechnicalSolutionApiHandlers,
        ...AppHealthTechnicalSolutionServices,
        ...AppHealthCustomerResolvers,
        ...AppHealthCustomerApiHandlers,
        ...AppHealthCustomerServices
    ],
})
export class AppHealthModule {}

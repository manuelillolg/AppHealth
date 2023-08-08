import { AppHealthApplicationAuthenticationHandlers, AppHealthApplicationAuthenticationServices, AppHealthApplicationAuthenticationModel, AppHealthIApplicationAuthenticationRepository, AppHealthSequelizeApplicationAuthenticationRepository, AppHealthApplicationAuthenticationSagas } from './application-authentication';
import { AppHealthAuthorizationInterfaceHandlers, AppHealthAuthorizationInterfaceServices, AppHealthAuthorizationInterfaceModel, AppHealthIAuthorizationInterfaceRepository, AppHealthSequelizeAuthorizationInterfaceRepository, AppHealthAuthorizationInterfaceSagas } from './authorization-interface';
import { AppHealthApplicationAuthorizationHandlers, AppHealthApplicationAuthorizationServices, AppHealthApplicationAuthorizationModel, AppHealthIApplicationAuthorizationRepository, AppHealthSequelizeApplicationAuthorizationRepository, AppHealthApplicationAuthorizationSagas } from './application-authorization';
import { AppHealthApiInterfaceTypeHandlers, AppHealthApiInterfaceTypeServices, AppHealthApiInterfaceTypeModel, AppHealthIApiInterfaceTypeRepository, AppHealthSequelizeApiInterfaceTypeRepository, AppHealthApiInterfaceTypeSagas } from './api-interface-type';
import { AppHealthApplicationApiHandlers, AppHealthApplicationApiServices, AppHealthApplicationApiModel, AppHealthIApplicationApiRepository, AppHealthSequelizeApplicationApiRepository, AppHealthApplicationApiSagas } from './application-api';
import { AppHealthApplicationIntegrationHandlers, AppHealthApplicationIntegrationServices, AppHealthApplicationIntegrationModel, AppHealthIApplicationIntegrationRepository, AppHealthSequelizeApplicationIntegrationRepository, AppHealthApplicationIntegrationSagas } from './application-integration';
import { AppHealthInfrastructureProviderHandlers, AppHealthInfrastructureProviderServices, AppHealthInfrastructureProviderModel, AppHealthIInfrastructureProviderRepository, AppHealthSequelizeInfrastructureProviderRepository, AppHealthInfrastructureProviderSagas } from './infrastructure-provider';
import { AppHealthInfrastructureServiceHandlers, AppHealthInfrastructureServiceServices, AppHealthInfrastructureServiceModel, AppHealthIInfrastructureServiceRepository, AppHealthSequelizeInfrastructureServiceRepository, AppHealthInfrastructureServiceSagas } from './infrastructure-service';
import { AppHealthApplicationInfrastructureServiceHandlers, AppHealthApplicationInfrastructureServiceServices, AppHealthApplicationInfrastructureServiceModel, AppHealthIApplicationInfrastructureServiceRepository, AppHealthSequelizeApplicationInfrastructureServiceRepository, AppHealthApplicationInfrastructureServiceSagas } from './application-infrastructure-service';
import { AppHealthAuthenticationInterfaceHandlers, AppHealthAuthenticationInterfaceServices, AppHealthAuthenticationInterfaceModel, AppHealthIAuthenticationInterfaceRepository, AppHealthSequelizeAuthenticationInterfaceRepository, AppHealthAuthenticationInterfaceSagas } from './authentication-interface';
import { AppHealthApplicationLanguageHandlers, AppHealthApplicationLanguageServices, AppHealthApplicationLanguageModel, AppHealthIApplicationLanguageRepository, AppHealthSequelizeApplicationLanguageRepository, AppHealthApplicationLanguageSagas } from './application-language';
import { AppHealthLanguageHandlers, AppHealthLanguageServices, AppHealthLanguageModel, AppHealthILanguageRepository, AppHealthSequelizeLanguageRepository, AppHealthLanguageSagas } from './language';
import { AppHealthApplicationDatabaseHandlers, AppHealthApplicationDatabaseServices, AppHealthApplicationDatabaseModel, AppHealthIApplicationDatabaseRepository, AppHealthSequelizeApplicationDatabaseRepository, AppHealthApplicationDatabaseSagas } from './application-database';
import { AppHealthDatabaseHandlers, AppHealthDatabaseServices, AppHealthDatabaseModel, AppHealthIDatabaseRepository, AppHealthSequelizeDatabaseRepository, AppHealthDatabaseSagas } from './database';
import { AppHealthApplicationViewHandlers, AppHealthApplicationViewServices, AppHealthApplicationViewModel, AppHealthIApplicationViewRepository, AppHealthSequelizeApplicationViewRepository, AppHealthApplicationViewSagas } from './application-view';
import { AppHealthApplicationHandlers, AppHealthApplicationServices, AppHealthApplicationModel, AppHealthIApplicationRepository, AppHealthSequelizeApplicationRepository, AppHealthApplicationSagas } from './application';
import { AppHealthTechnicalSolutionHandlers, AppHealthTechnicalSolutionServices, AppHealthTechnicalSolutionModel, AppHealthITechnicalSolutionRepository, AppHealthSequelizeTechnicalSolutionRepository, AppHealthTechnicalSolutionSagas } from './technical-solution';
import { AppHealthCustomerHandlers, AppHealthCustomerServices, AppHealthCustomerModel, AppHealthICustomerRepository, AppHealthSequelizeCustomerRepository, AppHealthCustomerSagas } from './customer';

export const AppHealthHandlers = [
    ...AppHealthApplicationAuthenticationHandlers,
    ...AppHealthAuthorizationInterfaceHandlers,
    ...AppHealthApplicationAuthorizationHandlers,
    ...AppHealthApiInterfaceTypeHandlers,
    ...AppHealthApplicationApiHandlers,
    ...AppHealthApplicationIntegrationHandlers,
    ...AppHealthInfrastructureProviderHandlers,
    ...AppHealthInfrastructureServiceHandlers,
    ...AppHealthApplicationInfrastructureServiceHandlers,
    ...AppHealthAuthenticationInterfaceHandlers,
    ...AppHealthApplicationLanguageHandlers,
    ...AppHealthLanguageHandlers,
    ...AppHealthApplicationDatabaseHandlers,
    ...AppHealthDatabaseHandlers,
    ...AppHealthApplicationViewHandlers,
    ...AppHealthApplicationHandlers,
    ...AppHealthTechnicalSolutionHandlers,
    ...AppHealthCustomerHandlers
];
export const AppHealthServices = [
    ...AppHealthApplicationAuthenticationServices,
    ...AppHealthAuthorizationInterfaceServices,
    ...AppHealthApplicationAuthorizationServices,
    ...AppHealthApiInterfaceTypeServices,
    ...AppHealthApplicationApiServices,
    ...AppHealthApplicationIntegrationServices,
    ...AppHealthInfrastructureProviderServices,
    ...AppHealthInfrastructureServiceServices,
    ...AppHealthApplicationInfrastructureServiceServices,
    ...AppHealthAuthenticationInterfaceServices,
    ...AppHealthApplicationLanguageServices,
    ...AppHealthLanguageServices,
    ...AppHealthApplicationDatabaseServices,
    ...AppHealthDatabaseServices,
    ...AppHealthApplicationViewServices,
    ...AppHealthApplicationServices,
    ...AppHealthTechnicalSolutionServices,
    ...AppHealthCustomerServices
];
export const AppHealthModels = [
    AppHealthApplicationAuthenticationModel,
    AppHealthAuthorizationInterfaceModel,
    AppHealthApplicationAuthorizationModel,
    AppHealthApiInterfaceTypeModel,
    AppHealthApplicationApiModel,
    AppHealthApplicationIntegrationModel,
    AppHealthInfrastructureProviderModel,
    AppHealthInfrastructureServiceModel,
    AppHealthApplicationInfrastructureServiceModel,
    AppHealthAuthenticationInterfaceModel,
    AppHealthApplicationLanguageModel,
    AppHealthLanguageModel,
    AppHealthApplicationDatabaseModel,
    AppHealthDatabaseModel,
    AppHealthApplicationViewModel,
    AppHealthApplicationModel,
    AppHealthTechnicalSolutionModel,
    AppHealthCustomerModel
];
export const AppHealthRepositories = [
    {
        provide : AppHealthIApplicationAuthenticationRepository,
        useClass: AppHealthSequelizeApplicationAuthenticationRepository
    },
    {
        provide : AppHealthIAuthorizationInterfaceRepository,
        useClass: AppHealthSequelizeAuthorizationInterfaceRepository
    },
    {
        provide : AppHealthIApplicationAuthorizationRepository,
        useClass: AppHealthSequelizeApplicationAuthorizationRepository
    },
    {
        provide : AppHealthIApiInterfaceTypeRepository,
        useClass: AppHealthSequelizeApiInterfaceTypeRepository
    },
    {
        provide : AppHealthIApplicationApiRepository,
        useClass: AppHealthSequelizeApplicationApiRepository
    },
    {
        provide : AppHealthIApplicationIntegrationRepository,
        useClass: AppHealthSequelizeApplicationIntegrationRepository
    },
    {
        provide : AppHealthIInfrastructureProviderRepository,
        useClass: AppHealthSequelizeInfrastructureProviderRepository
    },
    {
        provide : AppHealthIInfrastructureServiceRepository,
        useClass: AppHealthSequelizeInfrastructureServiceRepository
    },
    {
        provide : AppHealthIApplicationInfrastructureServiceRepository,
        useClass: AppHealthSequelizeApplicationInfrastructureServiceRepository
    },
    {
        provide : AppHealthIAuthenticationInterfaceRepository,
        useClass: AppHealthSequelizeAuthenticationInterfaceRepository
    },
    {
        provide : AppHealthIApplicationLanguageRepository,
        useClass: AppHealthSequelizeApplicationLanguageRepository
    },
    {
        provide : AppHealthILanguageRepository,
        useClass: AppHealthSequelizeLanguageRepository
    },
    {
        provide : AppHealthIApplicationDatabaseRepository,
        useClass: AppHealthSequelizeApplicationDatabaseRepository
    },
    {
        provide : AppHealthIDatabaseRepository,
        useClass: AppHealthSequelizeDatabaseRepository
    },
    {
        provide : AppHealthIApplicationViewRepository,
        useClass: AppHealthSequelizeApplicationViewRepository
    },
    {
        provide : AppHealthIApplicationRepository,
        useClass: AppHealthSequelizeApplicationRepository
    },
    {
        provide : AppHealthITechnicalSolutionRepository,
        useClass: AppHealthSequelizeTechnicalSolutionRepository
    },
    {
        provide : AppHealthICustomerRepository,
        useClass: AppHealthSequelizeCustomerRepository
    }
];
export const AppHealthSagas = [
    AppHealthApplicationAuthenticationSagas,
    AppHealthAuthorizationInterfaceSagas,
    AppHealthApplicationAuthorizationSagas,
    AppHealthApiInterfaceTypeSagas,
    AppHealthApplicationApiSagas,
    AppHealthApplicationIntegrationSagas,
    AppHealthInfrastructureProviderSagas,
    AppHealthInfrastructureServiceSagas,
    AppHealthApplicationInfrastructureServiceSagas,
    AppHealthAuthenticationInterfaceSagas,
    AppHealthApplicationLanguageSagas,
    AppHealthLanguageSagas,
    AppHealthApplicationDatabaseSagas,
    AppHealthDatabaseSagas,
    AppHealthApplicationViewSagas,
    AppHealthApplicationSagas,
    AppHealthTechnicalSolutionSagas,
    AppHealthCustomerSagas
];

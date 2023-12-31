import { FuseNavigationItem } from '@fuse/components/navigation';

export const appHealthNavigation: FuseNavigationItem = {
    id      : 'appHealth',
    title   : 'AppHealth',
    type    : 'collapsable',
    icon    : 'heroicons_outline:tag',
    children: [
        {
            id   : 'apiInterfaceTypes',
            title: 'ApiInterfaceType',
            type : 'basic',
            icon : 'heroicons_outline:tag',
            link : '/app-health/api-interface-type',
        },
        {
            id   : 'applicationApis',
            title: 'ApplicationApi',
            type : 'basic',
            icon : 'heroicons_outline:tag',
            link : '/app-health/application-api',
        },
        {
            id   : 'applicationAuthentications',
            title: 'ApplicationAuthentication',
            type : 'basic',
            icon : 'heroicons_outline:tag',
            link : '/app-health/application-authentication',
        },
        {
            id   : 'applicationAuthorizations',
            title: 'ApplicationAuthorization',
            type : 'basic',
            icon : 'heroicons_outline:tag',
            link : '/app-health/application-authorization',
        },
        {
            id   : 'applicationDatabases',
            title: 'ApplicationDatabase',
            type : 'basic',
            icon : 'heroicons_outline:tag',
            link : '/app-health/application-database',
        },
        {
            id   : 'applicationInfrastructureServices',
            title: 'ApplicationInfrastructureService',
            type : 'basic',
            icon : 'heroicons_outline:tag',
            link : '/app-health/application-infrastructure-service',
        },
        {
            id   : 'applicationIntegrations',
            title: 'ApplicationIntegration',
            type : 'basic',
            icon : 'heroicons_outline:tag',
            link : '/app-health/application-integration',
        },
        {
            id   : 'applicationLanguages',
            title: 'ApplicationLanguage',
            type : 'basic',
            icon : 'heroicons_outline:tag',
            link : '/app-health/application-language',
        },
        {
            id   : 'applicationViews',
            title: 'ApplicationView',
            type : 'basic',
            icon : 'heroicons_outline:tag',
            link : '/app-health/application-view',
        },
        {
            id   : 'applications',
            title: 'Application',
            type : 'basic',
            icon : 'heroicons_outline:tag',
            link : '/app-health/application',
        },
        {
            id   : 'authenticationInterfaces',
            title: 'AuthenticationInterface',
            type : 'basic',
            icon : 'heroicons_outline:tag',
            link : '/app-health/authentication-interface',
        },
        {
            id   : 'authorizationInterfaces',
            title: 'AuthorizationInterface',
            type : 'basic',
            icon : 'heroicons_outline:tag',
            link : '/app-health/authorization-interface',
        },
        {
            id   : 'customers',
            title: 'Customer',
            type : 'basic',
            icon : 'heroicons_outline:tag',
            link : '/app-health/customer',
        },
        {
            id   : 'databases',
            title: 'Database',
            type : 'basic',
            icon : 'heroicons_outline:tag',
            link : '/app-health/database',
        },
        {
            id   : 'infrastuctureProviders',
            title: 'InfrastructureProvider',
            type : 'basic',
            icon : 'heroicons_outline:tag',
            link : '/app-health/infrastructure-provider',
        },
        {
            id   : 'infrastructureServices',
            title: 'InfrastructureService',
            type : 'basic',
            icon : 'heroicons_outline:tag',
            link : '/app-health/infrastructure-service',
        },
        {
            id   : 'languages',
            title: 'Language',
            type : 'basic',
            icon : 'heroicons_outline:tag',
            link : '/app-health/language',
        },
        {
            id   : 'technicalSolutions',
            title: 'TechnicalSolution',
            type : 'basic',
            icon : 'heroicons_outline:tag',
            link : '/app-health/technical-solution',
        },
    ],
};
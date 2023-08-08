/* eslint-disable indent */
/* eslint-disable key-spacing */
import { Column, Model, Table, ForeignKey, BelongsTo, HasMany, BelongsToMany, HasOne } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { AppHealthTechnicalSolutionModel } from '@app/app-health/technical-solution';
import { AppHealthApplicationViewModel } from '@app/app-health/application-view';
import { AppHealthApplicationAuthenticationModel } from '@app/app-health/application-authentication';
import { AppHealthApplicationAuthorizationModel } from '@app/app-health/application-authorization';
import { AppHealthApplicationLanguageModel } from '@app/app-health/application-language';
import { AppHealthApplicationInfrastructureServiceModel } from '@app/app-health/application-infrastructure-service';
import { AppHealthApplicationDatabaseModel } from '@app/app-health/application-database';
import { AppHealthApplicationApiModel } from '@app/app-health/application-api';
import { AppHealthApplicationIntegrationModel } from '@app/app-health/application-integration';

@Table({
    modelName: 'AppHealthApplication',
    freezeTableName: true,
    timestamps: false,
})
export class AppHealthApplicationModel extends Model<AppHealthApplicationModel>
{
    @Column({
        field: 'id',
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
    })
    id: string;

    @ForeignKey(() => AppHealthTechnicalSolutionModel)
    @Column({
        field: 'technicalSolutionId',
        allowNull: false,
        type: DataTypes.UUID,
    })
    technicalSolutionId: string;

    @BelongsTo(() => AppHealthTechnicalSolutionModel, {
        constraints: false,
        foreignKey: 'technicalSolutionId',
    })
    technicalSolution: AppHealthTechnicalSolutionModel;

    @Column({
        field: 'name',
        allowNull: false,
        type: DataTypes.STRING(255),
    })
    name: string;

    @Column({
        field: 'description',
        allowNull: true,
        type: DataTypes.TEXT,
    })
    description: string;

    @Column({
        field: 'businessImpact',
        allowNull: true,
        type: DataTypes.TEXT,
    })
    businessImpact: string;

    @Column({
        field: 'type',
        allowNull: false,
        type: DataTypes.ENUM('FRONTEND','SERVER','MOBILE','EMBEDDED'),
    })
    type: string;

    @Column({
        field: 'releaseDate',
        allowNull: false,
        type: DataTypes.DATE,
    })
    releaseDate: string;

    @Column({
        field: 'architectureDiagram',
        allowNull: false,
        type: DataTypes.STRING(255),
    })
    architectureDiagram: string;

    @Column({
        field: 'hasTenants',
        allowNull: false,
        type: DataTypes.BOOLEAN,
    })
    hasTenants: boolean;

    @Column({
        field: 'hasLicensing',
        allowNull: false,
        type: DataTypes.BOOLEAN,
    })
    hasLicensing: boolean;

    @Column({
        field: 'costLicensesPerYear',
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
    })
    costLicensesPerYear: number;

    @Column({
        field: 'requestsPerDay',
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
    })
    requestsPerDay: number;

    @ForeignKey(() => AppHealthApplicationViewModel)
    @Column({
        field: 'views',
        allowNull: false,
        type: DataTypes.UUID,
    })
    views: string;

    @BelongsTo(() => AppHealthApplicationViewModel, {
        constraints: false,
        foreignKey: 'views',
    })
    applicationView: AppHealthApplicationViewModel;

    @ForeignKey(() => AppHealthApplicationAuthenticationModel)
    @Column({
        field: 'authentications',
        allowNull: false,
        type: DataTypes.UUID,
    })
    authentications: string;

    @BelongsTo(() => AppHealthApplicationAuthenticationModel, {
        constraints: false,
        foreignKey: 'authentications',
    })
    applicationAuthentication: AppHealthApplicationAuthenticationModel;

    @ForeignKey(() => AppHealthApplicationAuthorizationModel)
    @Column({
        field: 'authorizations',
        allowNull: false,
        type: DataTypes.UUID,
    })
    authorizations: string;

    @BelongsTo(() => AppHealthApplicationAuthorizationModel, {
        constraints: false,
        foreignKey: 'authorizations',
    })
    applicationAuthorization: AppHealthApplicationAuthorizationModel;

    @ForeignKey(() => AppHealthApplicationLanguageModel)
    @Column({
        field: 'languages',
        allowNull: false,
        type: DataTypes.UUID,
    })
    languages: string;

    @BelongsTo(() => AppHealthApplicationLanguageModel, {
        constraints: false,
        foreignKey: 'languages',
    })
    applicationLanguage: AppHealthApplicationLanguageModel;

    @ForeignKey(() => AppHealthApplicationInfrastructureServiceModel)
    @Column({
        field: 'infrastructureServices',
        allowNull: false,
        type: DataTypes.UUID,
    })
    infrastructureServices: string;

    @BelongsTo(() => AppHealthApplicationInfrastructureServiceModel, {
        constraints: false,
        foreignKey: 'infrastructureServices',
    })
    applicationInfrastructureService: AppHealthApplicationInfrastructureServiceModel;

    @ForeignKey(() => AppHealthApplicationDatabaseModel)
    @Column({
        field: 'databases',
        allowNull: false,
        type: DataTypes.UUID,
    })
    databases: string;

    @BelongsTo(() => AppHealthApplicationDatabaseModel, {
        constraints: false,
        foreignKey: 'databases',
    })
    applicationDatabase: AppHealthApplicationDatabaseModel;

    @ForeignKey(() => AppHealthApplicationApiModel)
    @Column({
        field: 'apis',
        allowNull: false,
        type: DataTypes.UUID,
    })
    apis: string;

    @BelongsTo(() => AppHealthApplicationApiModel, {
        constraints: false,
        foreignKey: 'apis',
    })
    applicationApi: AppHealthApplicationApiModel;

    @ForeignKey(() => AppHealthApplicationIntegrationModel)
    @Column({
        field: 'integrations',
        allowNull: false,
        type: DataTypes.UUID,
    })
    integrations: string;

    @BelongsTo(() => AppHealthApplicationIntegrationModel, {
        constraints: false,
        foreignKey: 'integrations',
    })
    applicationIntegration: AppHealthApplicationIntegrationModel;

    @Column({
        field: 'createdAt',
        allowNull: true,
        type: DataTypes.DATE,
    })
    createdAt: string;

    @Column({
        field: 'updatedAt',
        allowNull: true,
        type: DataTypes.DATE,
    })
    updatedAt: string;

    @Column({
        field: 'deletedAt',
        allowNull: true,
        type: DataTypes.DATE,
    })
    deletedAt: string;

}
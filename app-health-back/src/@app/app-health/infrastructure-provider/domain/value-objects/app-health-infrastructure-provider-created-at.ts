import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthInfrastructureProviderCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'InfrastructureProviderCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'InfrastructureProviderCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}
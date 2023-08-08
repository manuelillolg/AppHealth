import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthInfrastructureProviderDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'InfrastructureProviderDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'InfrastructureProviderDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}
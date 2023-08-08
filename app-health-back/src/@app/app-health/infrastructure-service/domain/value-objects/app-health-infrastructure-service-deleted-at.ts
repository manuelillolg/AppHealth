import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthInfrastructureServiceDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'InfrastructureServiceDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'InfrastructureServiceDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}
import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthInfrastructureServiceUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'InfrastructureServiceUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'InfrastructureServiceUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}
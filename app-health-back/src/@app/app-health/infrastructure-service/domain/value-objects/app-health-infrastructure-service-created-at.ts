import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthInfrastructureServiceCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'InfrastructureServiceCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'InfrastructureServiceCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}
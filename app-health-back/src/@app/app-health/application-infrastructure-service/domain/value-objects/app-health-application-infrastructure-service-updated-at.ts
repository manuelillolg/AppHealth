import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationInfrastructureServiceUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'ApplicationInfrastructureServiceUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationInfrastructureServiceUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}
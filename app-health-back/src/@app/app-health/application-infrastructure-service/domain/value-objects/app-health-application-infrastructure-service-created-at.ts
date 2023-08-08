import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationInfrastructureServiceCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'ApplicationInfrastructureServiceCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationInfrastructureServiceCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}
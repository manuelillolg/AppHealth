import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationApiCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'ApplicationApiCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationApiCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}
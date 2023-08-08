import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationApiUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'ApplicationApiUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationApiUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}
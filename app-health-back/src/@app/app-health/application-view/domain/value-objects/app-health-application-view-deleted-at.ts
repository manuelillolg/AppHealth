import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationViewDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'ApplicationViewDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationViewDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}
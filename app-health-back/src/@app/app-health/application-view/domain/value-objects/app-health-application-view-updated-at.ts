import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationViewUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'ApplicationViewUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationViewUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}
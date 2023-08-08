import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'ApplicationUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}
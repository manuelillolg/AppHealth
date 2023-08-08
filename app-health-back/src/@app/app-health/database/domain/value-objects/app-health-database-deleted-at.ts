import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthDatabaseDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'DatabaseDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'DatabaseDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}
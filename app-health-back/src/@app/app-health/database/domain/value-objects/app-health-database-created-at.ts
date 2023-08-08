import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthDatabaseCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'DatabaseCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'DatabaseCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}
import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationDatabaseDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'ApplicationDatabaseDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationDatabaseDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}
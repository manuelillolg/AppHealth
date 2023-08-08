import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationDatabaseCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'ApplicationDatabaseCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationDatabaseCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}
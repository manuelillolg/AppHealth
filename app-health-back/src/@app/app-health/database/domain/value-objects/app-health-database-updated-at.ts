import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthDatabaseUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'DatabaseUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'DatabaseUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}
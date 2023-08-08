import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationDatabaseDatabaseId extends UuidValueObject
{
    public readonly type: string = 'ApplicationDatabaseDatabaseId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationDatabaseDatabaseId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}
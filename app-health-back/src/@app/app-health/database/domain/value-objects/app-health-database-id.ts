import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthDatabaseId extends UuidValueObject
{
    public readonly type: string = 'DatabaseId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'DatabaseId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}
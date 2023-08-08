import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthLanguageDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'LanguageDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'LanguageDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}
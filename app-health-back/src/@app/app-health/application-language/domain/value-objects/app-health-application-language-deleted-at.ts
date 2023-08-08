import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationLanguageDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'ApplicationLanguageDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationLanguageDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}
import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationLanguageCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'ApplicationLanguageCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationLanguageCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}
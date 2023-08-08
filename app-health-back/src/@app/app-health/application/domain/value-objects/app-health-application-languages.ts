import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationLanguages extends UuidValueObject
{
    public readonly type: string = 'ApplicationLanguages';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationLanguages',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}
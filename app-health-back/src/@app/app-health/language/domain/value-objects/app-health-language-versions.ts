import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthLanguageVersions extends JsonValueObject
{
    public readonly type: string = 'LanguageVersions';

    constructor(value: any, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'LanguageVersions',
            nullable   : false,
            undefinable: false,
        }, validationRules));
    }
}
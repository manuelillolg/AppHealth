import { SmallintValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationLanguageCodeQualityScore extends SmallintValueObject
{
    public readonly type: string = 'ApplicationLanguageCodeQualityScore';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationLanguageCodeQualityScore',
            nullable   : false,
            undefinable: false,
            maxLength  : 6,
            unsigned   : true,
        }, validationRules));
    }
}
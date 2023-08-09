import { EnumValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationViewComplexity extends EnumValueObject
{
    public readonly type: string = 'AppHealthApplicationViewComplexity';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'AppHealthApplicationViewComplexity',
            nullable   : false,
            undefinable: false,
            enumOptions: ['LOW','MEDIUM','HIGH'],
        }, validationRules));
    }
}
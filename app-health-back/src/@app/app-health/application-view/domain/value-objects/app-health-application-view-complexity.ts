import { EnumValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationViewComplexity extends EnumValueObject
{
    public readonly type: string = 'ApplicationViewComplexity';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationViewComplexity',
            nullable   : false,
            undefinable: false,
            enumOptions: ['LOW','MEDIUM','HIGH'],
        }, validationRules));
    }
}
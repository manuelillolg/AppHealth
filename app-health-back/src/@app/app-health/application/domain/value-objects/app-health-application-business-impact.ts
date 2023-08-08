import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationBusinessImpact extends StringValueObject
{
    public readonly type: string = 'ApplicationBusinessImpact';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationBusinessImpact',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}
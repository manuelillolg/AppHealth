import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationDescription extends StringValueObject
{
    public readonly type: string = 'ApplicationDescription';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationDescription',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}
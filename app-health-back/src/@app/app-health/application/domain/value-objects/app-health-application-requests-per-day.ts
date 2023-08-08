import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationRequestsPerDay extends IntValueObject
{
    public readonly type: string = 'ApplicationRequestsPerDay';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationRequestsPerDay',
            nullable   : false,
            undefinable: false,
            maxLength  : 10,
            unsigned   : true,
        }, validationRules));
    }
}
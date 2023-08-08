import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationApiRequestsPerDay extends IntValueObject
{
    public readonly type: string = 'ApplicationApiRequestsPerDay';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationApiRequestsPerDay',
            nullable   : false,
            undefinable: false,
            maxLength  : 10,
            unsigned   : true,
        }, validationRules));
    }
}
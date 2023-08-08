import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationViewTotalViews extends IntValueObject
{
    public readonly type: string = 'ApplicationViewTotalViews';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationViewTotalViews',
            nullable   : false,
            undefinable: false,
            maxLength  : 10,
            unsigned   : true,
        }, validationRules));
    }
}
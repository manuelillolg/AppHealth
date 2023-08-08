import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationCostLicensesPerYear extends IntValueObject
{
    public readonly type: string = 'ApplicationCostLicensesPerYear';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationCostLicensesPerYear',
            nullable   : false,
            undefinable: false,
            maxLength  : 10,
            unsigned   : true,
        }, validationRules));
    }
}
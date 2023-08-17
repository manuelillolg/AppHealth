import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthTechnicalSolutionCustomerName extends StringValueObject
{
    public readonly type: string = 'AppHealthTechnicalSolutionCustomerName';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'AppHealthTechnicalSolutionCustomerName',
            nullable   : true,
            undefinable: true,
            maxLength  : 50,
        }, validationRules));
    }
}
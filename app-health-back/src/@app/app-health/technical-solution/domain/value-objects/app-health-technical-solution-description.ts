import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthTechnicalSolutionDescription extends StringValueObject
{
    public readonly type: string = 'TechnicalSolutionDescription';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'TechnicalSolutionDescription',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}
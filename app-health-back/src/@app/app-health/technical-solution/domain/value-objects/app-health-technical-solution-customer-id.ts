import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthTechnicalSolutionCustomerId extends UuidValueObject
{
    public readonly type: string = 'TechnicalSolutionCustomerId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'TechnicalSolutionCustomerId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}
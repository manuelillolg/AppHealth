import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthTechnicalSolutionProposal extends StringValueObject
{
    public readonly type: string = 'TechnicalSolutionProposal';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'TechnicalSolutionProposal',
            nullable   : false,
            undefinable: false,
        }, validationRules));
    }
}
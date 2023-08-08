import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthTechnicalSolutionArchitectureDiagram extends StringValueObject
{
    public readonly type: string = 'TechnicalSolutionArchitectureDiagram';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'TechnicalSolutionArchitectureDiagram',
            nullable   : false,
            undefinable: false,
            maxLength  : 255,
        }, validationRules));
    }
}
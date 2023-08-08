import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationArchitectureDiagram extends StringValueObject
{
    public readonly type: string = 'ApplicationArchitectureDiagram';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationArchitectureDiagram',
            nullable   : false,
            undefinable: false,
            maxLength  : 255,
        }, validationRules));
    }
}
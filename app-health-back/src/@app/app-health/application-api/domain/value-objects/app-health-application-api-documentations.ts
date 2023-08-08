import { EnumValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationApiDocumentations extends EnumValueObject
{
    public readonly type: string = 'ApplicationApiDocumentations';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationApiDocumentations',
            nullable   : true,
            undefinable: true,
            enumOptions: ['OPENAPI','GRAPGQL','HTML','DOCS'],
        }, validationRules));
    }
}
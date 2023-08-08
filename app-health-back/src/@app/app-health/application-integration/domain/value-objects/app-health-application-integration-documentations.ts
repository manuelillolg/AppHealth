import { EnumValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationIntegrationDocumentations extends EnumValueObject
{
    public readonly type: string = 'ApplicationIntegrationDocumentations';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationIntegrationDocumentations',
            nullable   : true,
            undefinable: true,
            enumOptions: ['OPENAPI','GRAPHQL','HTML','DOCS'],
        }, validationRules));
    }
}
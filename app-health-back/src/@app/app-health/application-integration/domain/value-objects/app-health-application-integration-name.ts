import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationIntegrationName extends StringValueObject
{
    public readonly type: string = 'ApplicationIntegrationName';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationIntegrationName',
            nullable   : false,
            undefinable: false,
            maxLength  : 255,
        }, validationRules));
    }
}